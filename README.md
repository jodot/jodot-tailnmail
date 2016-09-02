Jodot-tailnmail
===========

[Jodot] is a long-running process that executes duties delegated to it. See
[Jodot] for more info.

This is a Jodot duty that follows (tail) a file for you and mail you whenever a 
string that you're interested in appears.

Usage scenarios
===============

Use jodot-tailnmail to be notified via e-mail when a certain string appears 
on a monitored log file. Think of this as Jodot looking at the output of 
tail -f and reporting to you when an event that you're interested in appears. 

Some scenarios where this may be useful:

- To a system administrator that may want a simple way to get notified when 
  a system event occur
- If you log visit events to your website or installs of your app, this is 
  a simple way to get notfied when things happen rather than following a file 
  or checking on it periodically
- To monitor whatever files in which you may want to monitor for string additions

How to use
==========

Sign up for a [Mailgun] account. Use the API key for Mailgun to add a duty in 
your Jodot's duty definition file like this:
```
  {
    package: jodot-tailnmail,
    params: ["/var/log/jodot.out.log", "I am alive!", "YOUR_MAILGUN_KEY", "RECIPIENT_EMAIL", "YOUR_DOMAIN, "SENDER_EMAIL"]
  }
```
Please see [adding duties] to learn more about how to add duty to a [Jodot] instance.

[Jodot]: <https://github.com/jodot/jodot>
[adding duties]: <https://github.com/jodot/jodot>
[Mailgun]: <http://www.mailgun.com/>
