---
title: Intro to Email Security
date: 2021-02-29T21:22:53.306Z
draft: false
featured: true
tags:
  - Security
  - Web Development
  - CyberSec
categories:
  - Security
image:
  filename: featured.png
  focal_point: Smart
  preview_only: true
toc: true
---

Welcome to a brief introduction to Email Security – **FOCUS ON: SPF, DKIM, and DMARC**.

{{% toc %}}

* * *

## Email Security Overview

Some very useful tools which provide more insights and troubleshooting for your email security are the following:

* [Google Admin Toolbox](https://toolbox.googleapps.com/apps/main/)
* [Email Security Grader (ESG)](https://www.emailsecuritygrader.com/)
* [MX Toolbox](https://mxtoolbox.com/)

Additionally, a great checklist for the most important aspects can be found here:

* [The Email Security Checklist](https://www.upguard.com/blog/the-email-security-checklist)


## Google Workspace (formerly G Suite)

Google Workspace is one of the most used business email providers for startups and SMEs alike. Even larger companies trust Google with their email and internal communication. And Google already offers a good security by default. However, you should always look further than the default, and make sure to keep up-2-date with new security features and solutions.

Some of the most basic aspects of better email security are the three following authentication configurations:

* SPF
* DKIM
* DMARC

All of these need to be properly configured in your domain's DNS records. That's why it is also important to properly choose and protect your Domain Registration Providers. Some providers I personally have had good experiences with so far are the following:

* [Google Domains](https://domains.google/)
* [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/)
* [GoDaddy](https://www.godaddy.com/)
* [WIX Domain Names](https://www.wix.com/domain/names)

After you have chosen your favorite Domain Registration Provider, you should start setting up your email security...


### Sender Policy Framework (SPF)

_"SPF is an email authentication method designed to detect forging sender addresses during the delivery of the email."_

Normally, SPF (TXT record) looks like this:
```
v=spf1 include:_spf.google.com ~all
```

More info here:

* [Ensure mail delivery & prevent spoofing (SPF)](https://support.google.com/a/answer/33786)


### DomainKeys Identified Mail (DKIM)

_"DKIM is an email authentication method designed to detect forged sender addresses in email."_

Go to `Apps > Google Workspace > Settings for Gmail > Authenticate email` and you'll find DKIM authentication configuration. Select your email domain and generate a new record. Select your DKIM key bit length (usually the higher, the more secure), and leave the prefix selector as is.

Normally, DKIM (TXT record) looks like this:
```
k=rsa; t=s; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDGMjj8MVaESl30KSPYdLaEreSYzvOVh15u9YKAmTLgk1ecr4BCRq3Vkg3Xa2QrEQWbIvQj9FNqBYOr3XIczzU8gkK5Kh42P4C3DgNiBvlNNk2BlA5ITN/EvVAn/ImjoGq5IrcO+hAj2iSAozYTEpJAKe0NTrj49CIkj5JI6ibyJwIDAQAB
```

Now copy the TXT record to your domain DNS management.
After that, go back to Google Workspace and click on start authentication.

_Note: You might have to wait a few hours for the DNS to update._


### Domain-based Message Authentication, Reporting and Conformance (DMARC)

_"DMARC is an email authentication protocol. It is designed to give email domain owners the ability to protect their domain from unauthorized use, commonly known as email spoofing."_

An example of a DMARC (TXT record) looks like this:
```
v=DMARC1; p=quarantine; pct=100; rua=mailto:EMAIL@DOMAIN.com; ruf=mailto:EMAIL@DOMAIN.com; rf=afrf; fo=1
```

More info can be found here:

* [DMARC Overview](https://dmarc.org/overview/)


## Disclaimer

This is a very general introduction to email security, SPF, DKIM and DMARC. Educational purposes only. There are many more aspects to email security which are not covered here, and all implementations might differ from situation to situation, platform to platform, technology to technology. Remember, you are responsible for your own actions – this is merely an educational intro. Properly inform yourself, keep learning, keep testing, and feel free to share your learnings and experiences as I do. Hope it was helpful!
