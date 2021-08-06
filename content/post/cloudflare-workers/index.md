---
title: Intro to Cloudflare Workers
summary: Deploy serverless code instantly across the globe to give it exceptional performance, reliability, and scale.
date: 2021-08-02T10:22:53.306Z
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

Welcome to a brief introduction to [Cloudflare Workers](https://workers.cloudflare.com/).

## What is Cloudflare Workers

_Cloudflare Workers is a serverless application platform running on Cloudflare's global cloud network in over 200 cities around the world, offering both free and paid plans._

Developer Docs: https://developers.cloudflare.com/workers/

Some of the advantages of Cloudflare Workers are:

- Dynamically respond to requests without needing to connect to an origin server at all
- Perform data sanitization and validation before sending a request to your origin
- Generate parallel requests to different services and combine the responses
- Your code runs within milliseconds of your users worldwide
- Say goodbye to cold starts—support for 0ms worldwide

However, convince yourself of it's power and usefulness by trying it out yourself...

{{% toc %}}

* * *

## Our First Project

We will create a Cloudflare Workers which returns/renders a dynamic HTML response/page based on where the user visiting our site is in the world.

Here the final [GitHub Repository](https://github.com/DavidJKTofan/html-my-project) of our first project.
And below, the steps to follow:

### Setup

Install and/or update `npm` on your computer:
```
npm install -g npm
```    

Install Cloudflare Command-line (Wrangler):
```
npm install -g @cloudflare/wrangler
```

Check if Wrangler has been installed and it is the latest version:
```
wrangler --version
```

Connect Wrangler with your Cloudflare account (option 1):
```
wrangler login
```

_NOTE: if you don't have a Cloudflare account yet, [click here](https://dash.cloudflare.com/sign-up) – it's FREE!_

If the login process does not proceed as intended, you can manually add your API Token here (option 2):
```
wrangler config
```

Alternatively, go into the Wrangler CONFIG file and add your `account_id` (option 3):
```
cd PROJECT_NAME
sudo nano wrangler.toml
```

_NOTE: you can find your API Tokens and Keys [here](https://support.cloudflare.com/hc/en-us/articles/200167836-Managing-API-Tokens-and-Keys)._

Make sure you are logged in:
```
wrangler whoami
```

### Generate Project

Generate first project (which will generate a folder with some files inside):
```
wrangler generate PROJECT_NAME
```

Now the fun part is that we will create a [`template.js`](https://github.com/DavidJKTofan/html-my-project/blob/master/template.js) file with some code for a landing page.

In the main `index.js` file we will have to call `import template from './template'` – in order to call our `template.js` –, as well as set `template(request.cf)` as the new Response body. Additionally, change the `content-type` to `text/html;charset=UTF-8`.

The `index.js` file should look like this:
```
import template from './template'

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  return new Response(template(request.cf), {        // body
    headers: { 'content-type': 'text/html;charset=UTF-8' },  // init
  })
}
```

Allow import other modules and `npm` packages on Workers by changing the type in the `wrangler.toml` file:
```
type = "webpack"
```

In order to use country code emojis, install this package:
```
npm i country-code-emoji
```

The `template.js` file should look like this:
```
import flag from 'country-code-emoji'

const template = cf => {
    const emoji = flag(cf.country) || "👋🏻"

    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta http-equiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Hello!</title>
          <link rel="stylesheet" href="https://unpkg.com/modern-css-reset/dist/reset.min.css" />
          <style>
            body {
              background: #eee;
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              font-family: sans-serif;
            }
            div.container {
              background: #fff;
              border-radius: 1rem;
              padding: 4rem;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Hello there! You're connecting from ${cf.city} in ${cf.country} ${emoji}</h1>
          </div>
        </body>
      </html>
      `
  }

export default template
```

_NOTE: you can choose different [IncomingRequestCfProperties](https://developers.cloudflare.com/workers/runtime-apis/request#incomingrequestcfproperties) instead of `cf.country`, such as `cf.colo` or `cf.city`._

Preview the project:
```
wrangler preview
```

Production:
```
wrangler dev
```

Publish our project to Cloudflare:
```
wrangler publish
```

### Result

The final result can be found [here](https://html-my-project.davidtofan.workers.dev), including the [GitHub Repository](https://github.com/DavidJKTofan/html-my-project).

* * *

## Use Cases

The amount of Use Cases and applications for Cloudflare Workers are only limited by your imagination and time! It's a powerful and amazing tool.

Some examples of Use Cases are:

- [Localize a website with HTMLRewriter](https://developers.cloudflare.com/workers/tutorials/localize-a-website)
- [A/B testing](https://developers.cloudflare.com/workers/examples/ab-testing)
- [Country code redirect](https://developers.cloudflare.com/workers/examples/country-code-redirect)
- [Set HTTP security headers](https://developers.cloudflare.com/workers/examples/security-headers)
- [Data loss prevention](https://developers.cloudflare.com/workers/examples/data-loss-prevention)
- ...

Discover more [Case Studies with Workers](https://www.cloudflare.com/case-studies/?product=Workers), and check out the [Built With](https://workers.cloudflare.com/built-with) section to also learn more and get inspired by other projects.

* * * * *

## Disclaimer

I want to thank the [Introduction to Cloudflare Workers by Kristian Freeman](https://egghead.io/courses/introduction-to-cloudflare-workers-5aa3) Course.

Educational purposes only, and this blog post does not necessarily reflect the opinions of Cloudflare.

* * * *

## More on Cloudflare

- [Introducing Cloudflare](https://davidtofan.com/post/cloudflare-security/)
- [Migrating to Cloudflare](https://davidtofan.com/post/migrating-to-cloudflare/)
- [Cloudflare for Teams](https://davidtofan.com/post/cloudflare-for-teams/)
