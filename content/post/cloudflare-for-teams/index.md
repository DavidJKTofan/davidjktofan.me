---
title: Cloudflare for Teams
date: 2021-05-26T10:30:12.306Z
draft: false
featured: true
tags:
  - Security
  - Web Development
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

Welcome to a brief introduction to Cloudflare for Teams.

* * *

## Cloudflare One

[Cloudflare One](https://www.cloudflare.com/cloudflare-one/) is a product suite which can generally be split into two distinctive solution sets:

1. Zero Trust Security Solution Set
2. Connectivity and Network Security

Part of the Zero Trust solution is Cloudflare for Teams, which I'd like to introduce today.

### Cloudflare for Teams

[Cloudflare for Teams](https://www.cloudflare.com/teams/) is divided into three solutions:

-   **Gateway**: operates between a company's employees and the Internet.
-   **Access**: secures access to internal applications without a VPN.
-   **Browser Isolation**: runs in the cloud away from local or on-premise networks and endpoints, insulating devices from attacks.

The official Developer Docs can be found here: [Cloudflare for Teams documentation](https://developers.cloudflare.com/cloudflare-one/)

* * *

{{% toc %}}

* * *

## Digital Ocean

### Setting up the Server

For this example I used a Digital Ocean Droplet running _Ubuntu 20.04 (LTS) x64_.

I followed this guide and its prerequisites in order to set up my Droplet and a web environment: [How To Host a Website Using Cloudflare and Nginx on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-host-a-website-using-cloudflare-and-nginx-on-ubuntu-20-04)

You can use `netstat` in order to listen to your open ports and check if your server is available/reachable:

    sudo apt-get install net-tools      # Install
    sudo netstat -tulpn | grep LISTEN

### DNS Records

In order to access my Droplet's nginx content, I set a type A DNS record on my Cloudflare DNS management dashboard with the name _do-droplet_ as a subdomain leading to the Droplet's IPv4 address.

Already curious to see [the end-result](https://do-droplet.davidtofan.com/)!?

* * *

# Cloudflare Access

Let's get started with Cloudflare for Teams and how to set up Access.

## cloudflared

### Install cloudflared

I downloaded and unpacked the cloudflared daemon on the Droplet server:

    sudo wget https://bin.equinox.io/c/VdrWdbjqyF/cloudflared-stable-linux-amd64.deb
    sudo dpkg -i cloudflared-stable-linux-amd64.deb

Checked my version (just in case):

    cloudflared --version

To update the cloudflared daemon simply run:

    cloudflared update

I logged in and connected it to my Cloudflare account with:

    cloudflared login

_Note: Credentials will normally be saved to `/home/$USER/.cloudflared/cert.pem`._

Once cloudflared has been installed and authenticated, the process to get my first Tunnel up and running included 3 high-level steps:

1.  Create a Tunnel and configure it
2.  Route traffic to the Tunnel
3.  Run the Tunnel

Let's get going...

### Create a Tunnel and configure it

I created a Tunnel named _TUNNEL_NAME_ with:

    cloudflared tunnel create TUNNEL_NAME

The output of that command displayed my Tunnel ID (you'll need this later):

    "Created tunnel TUNNEL_NAME with id 6ff42ae2-765d-4adf-8112-31c55c1551ef"

Then I edited the cloudflared config file:

    sudo nano ~/.cloudflared/config.yml

Adding the following code to the config file in order to allow HTTP and SSH connections to my Droplet server (change `6ff42ae2-765d-4adf-8112-31c55c1551ef` with your own Tunnel ID, as well as `TUNNEL_NAME.davidtofan.com` with your own hostname):

    tunnel: 6ff42ae2-765d-4adf-8112-31c55c1551ef
    credentials-file: /home/$USER/.cloudflared/6ff42ae2-765d-4adf-8112-31c55c1551ef.json
    # Root-level configuration
    http2: true
    originRequest:
      connectTimeout: 30s
    logDirectory: /var/log/cloudflared

    ingress:
    - hostname: TUNNEL_NAME.davidtofan.com
      service: http://localhost:80
    - hostname: TUNNEL_NAME-ssh.davidtofan.com
      service: ssh://localhost:22
    # Catch-all rule, which just responds with 404 if traffic doesn't match any of
    # the earlier rules
    - service: http_status:404

Always before running the Tunnel, I validated the config input with:

    cloudflared tunnel ingress validate

### Route traffic to the Tunnel

In order to create DNS records from cloudflared, which will provision a CNAME record that points to the subdomain of a specific Tunnel, one can use either one of these commands:

    cloudflared tunnel route dns TUNNEL_NAME TUNNEL_NAME.davidtofan.com
    # OR
    cloudflared tunnel route dns 6ff42ae2-765d-4adf-8112-31c55c1551ef TUNNEL_NAME.davidtofan.com

### Run the Tunnel

I again checked if the config file is OK, and then I ran my Tunnel to check if it works:

    cloudflared tunnel ingress validate
    cloudflared tunnel run TUNNEL_NAME

Finally, I installed the Cloudflare Tunnel as a system service so that it works even after the server reboots:

    sudo cloudflared service install

### Connect from a Client Machine

Now in order to connect from a client machine (i.e. my MacBook), first I needed to install cloudflared daemon on it too.
Taking macOS as an example, I installed cloudflared with Homebrew:

    brew install cloudflare/cloudflare/cloudflared

Then I changed the SSH configuration file on my client machine:

    sudo ~/.ssh/config

Inserting the following values, replacing `TUNNEL_NAME.davidtofan.com` with the hostname I created:

    Host TUNNEL_NAME.davidtofan.com
      ProxyCommand /usr/local/bin/cloudflared access ssh --hostname %h

Done!

* * *

## SSH

If we are using the Tunnel to access SSH on the Droplet server, then I only needed to activate `Enable browser rendering` on Access > Applications > Settings > `cloudflared settings` card, which allows us to use SSH terminal directly on our browser.

_Once enabled, when users authenticate and visit the URL of the application, Cloudflare will render a terminal in their browser._

### Short-lived Certificates

If you are using Public key authentication for SSH on your Droplet, then the following method would make sense to make it easier for users to login: any authenticated user can access my Droplet through SSH without the necessary Public/Private Keys installed on their device by [configuring short-lived certificates](https://developers.cloudflare.com/cloudflare-one/identity/users/short-lived-certificates).

First I had to generate a short-lived certificate Public Key on the Cloudflare for Teams dashboard (Configuration > Service Auth).

Then I copy-pasted the Public Key on a new file called `ca.pub` on my Droplet:

    cd /etc/ssh
    sudo nano ca.pub

And the last major step on my Droplet was to properly configure my `sshd_config` file:

    sudo nano /etc/ssh/sshd_config

    PubkeyAuthentication yes            # remove the # in front of this line
    TrustedUserCAKeys /etc/ssh/ca.pub   # Add new line

Finally, I restarted SSH and rebooted the server:

    sudo service ssh restart
    sudo systemctl restart ssh
    sudo reboot

And the last step, on the client machine I ran the following command, changing the `~/.ssh/config` file content to what this command displayed:

    cloudflared access ssh-config --hostname TUNNEL_NAME.davidtofan.com --short-lived-cert

_Note: We need to ensure that Unix usernames on our server [match user SSO identities](https://developers.cloudflare.com/cloudflare-one/identity/users/short-lived-certificates#3-ensure-unix-usernames-match-user-sso-identities)._

Done! [Find the end-result here](https://do-droplet.davidtofan.com/).

* * *

## Disclaimer

This is a very general introduction to Cloudflare and [Cloudflare for Teams](https://www.cloudflare.com/teams/). Educational purposes only, and this blog post does not necessarily reflect the opinions of Cloudflare. There are many more aspects to Cloudflare and its products and services – this is merely a brief educational intro. Properly inform yourself, keep learning, keep testing, and feel free to share your learnings and experiences as I do. Hope it was helpful! Images are online and publicly accessible.
