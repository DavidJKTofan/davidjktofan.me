---
title: DDoS Attacks
summary: ABC
date: 2021-11-20T10:22:53.306Z
draft: true
featured: true
tags:
  - Security
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

## Denial-of-Service attack

_"A denial-of-service attack (DoS attack) is a cyber-attack in which the perpetrator seeks to make a machine or network resource unavailable to its intended users by temporarily or indefinitely disrupting services of a host connected to a network._
_In a distributed denial-of-service attack (DDoS attack), the incoming traffic flooding the victim originates from many different sources."_ – [Denial-of-service attack – Wikipedia](https://en.wikipedia.org/wiki/Denial-of-service_attack)

{{% toc %}}

* * *
* * *

## DDoS






Additionally, there are some differences between Layer 3 DDoS attacks and DDoS attacks at a higher layer, such as:

* _Layer 3 attacks target the network layer, not transport layer or application layer processes (as layer 4 and layer 7 DDoS attacks do)_
* _Layer 3 attacks do not have to open a TCP connection with the target first_
* _Layer 3 attacks do not target a specific port_

Source: [What are layer 3 DDoS attacks? – Cloudflare](https://www.cloudflare.com/de-de/learning/ddos/layer-3-ddos-attacks/)

At the Layer 3, the Protocol Data Unit (PDU) is called **Packet** (of about 1 KBS to 1.5 KBS). Packets consists of **control information** and user data (payload). Control information provides data for delivering the payload (e.g., source and destination network addresses, error detection codes, or sequencing information).


## DDoS Protection

### Blackholing and sinkholing

As the name suggests, blackholing and sinkholing sends all the attack traffic to a "black hole" (**null interface** or a non-existent server), which discards IP Packets in order to prevent routing loops from occurring in the network. 

### Magic Transit

Cloudflare offers a Layer 3 network protection, traffic acceleration and more with the solution called Magic Transit.

_"Magic Transit is a **network security solution** that offers DDoS protection, traffic acceleration, and much more from every Cloudflare data center— for on-premise, cloud-hosted, and hybrid networks."_ – [Magic Transit – Cloudflare](https://www.cloudflare.com/magic-transit/)

This solution employs standards-based networking protocols, like **Border Gateway Protocol (BGP)**, **Generic Routing Encapsulation (GRE)**, and **IP security (IPsec)**, for routing and encapsulation, and supports all IP services (TCP, UDP, IPSec, VoIP, custom protocols).

* * *

## Disclaimer

Educational purposes only.
