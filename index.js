Tail = require('tail').Tail;

process.on('message', function(params) {

  tail = new Tail(params[0]);
  var api_key = params[2];
  var domain = params[4];
  var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

  tail.on("line", function(data) {

    if (data === params[1]) {
      var mailMeta = {
        from: 'Jodot <me@samples.mailgun.org>',
        to: params[3],
        subject: 'Tailed',
        text: data
      };
      mailgun.messages().send(mailMeta, function (error, body) {
        console.log(body);
      });
    }
  });

  tail.on("error", function(error) {
    console.log('ERROR: ', error);
  });

  tail.watch();
  console.log("Tailing " + params[0]);

});