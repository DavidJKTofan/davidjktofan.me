---
title: Cloudflare Data Localization
summary: Take a rigorous and granular approach to data localization, making it easy for businesses to set rules and controls at the Internet edge, adhere to compliance regulations, and keep data locally stored and protected.
date: 2021-11-11T10:22:53.306Z
draft: false
featured: true
tags:
  - Security
  - Privacy
  - Cloudflare
  - CyberSec
categories:
  - Security
image:
  filename: featured.png
  focal_point: Smart
  preview_only: true
toc: true
---

This is a brief introduction to [Cloudflare Data Localization Suite](https://www.cloudflare.com/data-localization/), which honestly is A-M-A-Z-I-N-G!

Check out Matthew Prince, co-founder and CEO at Cloudflare, talking about *"giving company regional distribution controls on customer data"* [on Bloomberg Technology](https://youtu.be/FWO7HQrMyzI).

{{% toc %}}

* * *
* * *


## Data Localization Suite

The Cloudflare Data Localization Suite is mainly composed of 4 solutions:

1. Control where SSL Private Keys can be accessed by Cloudflare with
  - **Keyless SSL**
  - **Geo Key Manager**

2. Choose where (what region) your traffic (HTTPS requests and responses) will be handled/inspected (SSL/TLS decrypted) with **Regional Services**

3. Decide where log data and analytics is sent with **Edge Log Delivery**

4. Protect end-user's privacy with **IP obfuscation**

* * *

### Encryption Key Management

Organizations may choose to use either **Keyless SSL** or **Geo Key Manager** to ensure that their SSL/TLS keys do not leave the European Union (EU) – this is a standard use case.

#### Keyless SSL

_[Keyless SSL](https://www.cloudflare.com/ssl/keyless-ssl/) "allows security-conscious clients to upload their own custom certificates and benefit from Cloudflare, but without exposing their TLS private keys."_

![How Keyless SSL Works Diagram](/media/Cloudflare/keyless-ssl-diagram-how-keyless-ssl-works.svg)
_<caption>Image source: [Overview of Keyless SSL](https://www.cloudflare.com/ssl/keyless-ssl/).</caption>_

It allows organizations to store and manage their own SSL private keys for use with Cloudflare on any external infrastructure of their choosing.

More information can be found on the [Dev Docs](https://developers.cloudflare.com/ssl/keyless-ssl).

#### Geo Key Manager

[Geo Key Manager](https://blog.cloudflare.com/scaling-geo-key-manager/) allows organizations to choose where they store their TLS certificate private keys.

This is similar to Keyless SSL, with the difference that you get granular control over which locations should store the keys. For example, an organization can choose for the private keys required for inspection of traffic to only be accessible inside data centers located in the EU.

One can set this up by going on the Cloudflare Dashboard > ```SSL/TLS``` > ```Edge Certificates``` > ```Upload Custom SSL Certificate```.

More information can be found on the [Dev Docs](https://developers.cloudflare.com/ssl/edge-certificates/custom-certificates).

* * *

### Payload Inspection Boundary

Keyless SSL and Geo Key Manager ensure that private key material does not leave the EU. Regional Services ensures that those keys are only used inside the EU.

#### Regional Services

[Regional Services](https://blog.cloudflare.com/introducing-regional-services/) provides full control over exactly where the organization's traffic is handled.

This gives organizations control over where their HTTPS requests and responses are inspected and decrypted (SSL/TLS termination), and that traffic is securely transmitted to Cloudflare data centers inside the selected region.

![Regional Services Process Diagram](/media/Cloudflare/regional-services-process.png)
_<caption>Image source: [Introducing Regional Services](https://blog.cloudflare.com/introducing-regional-services/).</caption>_

When Regional Services is used, all of the edge application services will run inside the selected region. This includes:

* Storing and retrieving content from Cache
* Blocking malicious HTTP payloads with the Web Application Firewall (WAF)
* Detecting and blocking suspicious activity with Bot Management
* Running Cloudflare Workers scripts
* Load Balancing traffic to the best origin servers

#### Traffic Metadata

Cloudflare collects metadata about the usage of their products for the purposes of:

* Serving analytics via dashboards and APIs
* Sharing raw logs with customers
* Stopping security threats such as Bots or DDoS attacks
* Improving the performance of Cloudflare's network
* Maintaining the reliability and resiliency of Cloudflare's network

This metadata does not contain the contents of customer traffic, and so they do not contain usernames, passwords, personal information, and other private details of customers' end-users. However, these logs may contain end-user IP addresses, which is considered personal data in the EU.

* * *

### Customer Metadata Boundary

All of the traffic metadata that can identify a customer stays in the EU.

#### Edge Log Delivery

With [Edge Log Delivery](https://blog.cloudflare.com/introducing-the-cloudflare-data-localization-suite/), organizations can send logs directly from the edge to their partner of choice, also allowing all of the traffic metadata that can identify a customer to stay in the EU.

For example, an Azure storage bucket in their preferred region, or an instance of Splunk that runs in an on-premise data center. With this option, organizations can still get their complete logs in their preferred region, without these logs first flowing through either of the US or EU Cloudflare core data centers.

![Edge Log Delivery Diagram](/media/Cloudflare/edge-log-delivery-before-after.png)
_<caption>Image source: [Introducing the Cloudflare Data Localization Suite](https://blog.cloudflare.com/introducing-the-cloudflare-data-localization-suite/).</caption>_

#### IP obfuscation

Cloudflare anonymizes source IP addresses via IP truncation methods (last octet for IPv4 and last 80 bits for IPv6) on the UI and in logs. This offers end-user data privacy.

* * *
* * *

## Conclusion

This is all part of Cloudflare's [Trust Hub](https://www.cloudflare.com/trust-hub/) efforts, as well as to take a rigorous and granular approach to data localization, making it easy for businesses to set rules and controls at the Internet edge, adhere to compliance regulations, and keep data locally stored and protected.

*"Trust is the foundation of Cloudflare’s business. We earn our users’ trust by respecting the sanctity of personal data transiting our network, and by being transparent about how we handle and secure that data."*

* * *

## Disclaimer

Educational purposes only, and this blog post does not necessarily reflect the opinions of Cloudflare. There are many more aspects to Cloudflare and its products and services – this is merely a brief educational intro. Properly inform yourself, keep learning, keep testing, and feel free to share your learnings and experiences as I do. Hope it was helpful! Images are online and publicly accessible.
