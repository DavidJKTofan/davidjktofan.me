---
title: Migrating to Cloudflare
summary: How I migrated from Netlify to Cloudflare Pages in only a few steps.
date: 2021-04-19T10:22:53.306Z
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

After joining Cloudflare in April 2021, I recognized the amazing potential of [Cloudflare Pages](https://pages.cloudflare.com/) and all of its other products, so I decided to migrate my website from Netlify to Cloudflare (_sorry Netlify – it was nice!_).

{{% toc %}}

* * *

## My Personal Website

### Step 0: Cloudflare Pages

First, I created a FREE account on Cloudflare, and connected my GitHub repository with Cloudflare Pages.

I had to tweak the deployment a little by adding the build command:
```
hugo --gc --minify -b https://CLOUDFLARE-PAGES.pages.dev/
```

Additionally, I had to set an Environment Variable:
```
HUGO_VERSION   0.80.0
```

After that, the page deployed and worked just fine.

### Step 1: DNS

Now, go to dash.cloudflare.com and add your custom domain. Choose the FREE plan for starters, and simply follow the next steps.

On the DNS tab, add the following DNS records in order to connect to the page on Cloudflare Pages:
```
CNAME   davidtofan.com    CLOUDFLARE-PAGES.pages.dev   Auto
CNAME   www               CLOUDFLARE-PAGES.pages.dev   Auto
```

Furthermore, I also added an empty MX record because I do not use this domain for emails nor do I want to receive emails:
```
MX      davidtofan.com    .                            Auto
```

### Step 2: Domain

In order to redirect www to davidtofan.com, go to Page Rules > Forwarding URL and set up the following Permanent Redirect Rule 301:

Matching URL:
```
www.davidtofan.com/*
```

Destination URL:
```
https://davidtofan.com/$1
```

_Note: the DNS records need to be configured properly for this to work._

Then, I activated the DNSSEC function to add an extra layer of protection to my domain.

### Step 3: Workers

Now on to Workers – it's simply amazing! You can deploy serverless code instantly across the globe.

I used this JavaScript template to create HTTP Security Headers for my website by using Workers:
```
let securityHeaders = {
    "Content-Security-Policy": "default-src 'self'; upgrade-insecure-requests; script-src 'self' https://static.cloudflareinsights.com; img-src 'self'; object-src 'none'; form-action 'none'; base-uri 'self'; worker-src 'none'; connect-src 'self' https://static.cloudflareinsights.com/ https://cloudflareinsights.com/; child-src 'none'; frame-src 'none'; frame-ancestors 'none';",
    "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
    "X-XSS-Protection": "1; mode=block",
    "X-Frame-Options": "DENY",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "no-referrer",
    "Permissions-Policy": "fullscreen=(self), autoplay=(), geolocation=(), microphone=(), camera=(), payment=(), interest-cohort=()",
    "Access-Control-Allow-Origin": "https://cloudflareinsights.com/"
}
let sanitiseHeaders = {
    Server: "My new server header"
}
let removeHeaders = [
    "Public-Key-Pins",
    "X-Powered-By",
    "X-AspNet-Version"
]

addEventListener('fetch', event => {
	event.respondWith(addHeaders(event.request))
})

async function addHeaders(req) {
	let response = await fetch(req)
	let newHdrs = new Headers(response.headers)

	if (newHdrs.has("Content-Type") && !newHdrs.get("Content-Type").includes("text/html")) {
        return new Response(response.body , {
            status: response.status,
            statusText: response.statusText,
            headers: newHdrs
        })
	}

	Object.keys(securityHeaders).map(function(name, index) {
		newHdrs.set(name, securityHeaders[name]);
	})

	Object.keys(sanitiseHeaders).map(function(name, index) {
		newHdrs.set(name, sanitiseHeaders[name]);
	})

	removeHeaders.forEach(function(name){
		newHdrs.delete(name)
	})

	return new Response(response.body , {
		status: response.status,
		statusText: response.statusText,
		headers: newHdrs
	})
}
```

Don't forget to add ```https://static.cloudflareinsights.com``` to your ```script-src``` directive and ```https://cloudflareinsights.com``` to your ```connect-src``` directive, in order to make [Web Analytics](https://www.cloudflare.com/web-analytics/) work on Cloudflare.

Feel free to change any details and adapt it to your needs. If you need help with the Content Security Policy (CSP), then check out my other [article](/post/website-security/).

_Code source: [The brand new Security Headers Cloudflare Worker](https://scotthelme.co.uk/security-headers-cloudflare-worker/)_
_Alternative code: [Set security headers - Workers](https://developers.cloudflare.com/workers/examples/security-headers)_

### Step 4: Firewall

Now we set up a Firewall Rule on the Firewall Tab > Firewall Rules, such as for example to block some python requests on my website:
```
(http.user_agent contains "python")
```

There are some interesting examples on [Runcloud Blog](https://blog.runcloud.io/cloudflare-firewall-rules/).

### Step 5: Results

Finally, we analyze our website and check what has changed or improved:

-   [Cloudflare Diagnostic Center](https://www.cloudflare.com/diagnostic-center/?url=davidtofan.com)
-   [Security Headers](https://securityheaders.com/?q=https%3A%2F%2Fdavidtofan.com%2F&hide=on&followRedirects=on)
-   [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fdavidtofan.com%2F)
-   [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly?id=BucltckOIIJdgi9CnUc4Uw)
-   [Web Page Test](https://www.webpagetest.org/)
-   [DNSViz DNSSEC](https://dnsviz.net/d/davidtofan.com/dnssec/)
-   [DNSSEC Analyzer](https://dnssec-analyzer.verisignlabs.com/davidtofan.com)

## Conclusion

Coming soon! Still working on some stuff...
