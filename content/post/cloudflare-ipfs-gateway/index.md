---
title: Cloudflare IPFS Gateway
summary: ABC
date: 2021-12-10T10:22:53.306Z
draft: false
featured: true
tags:
  - Blockchain
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

With [Cloudflare Distributed Web Gateway](https://www.cloudflare.com/distributed-web-gateway/) one can easily, quickly, and securely access both the Ethereum network and the InterPlanetary File System (IPFS).

IPFS allows us to serve content from a custom domain over HTTPs, and browser files stored on IPFS, while Cloudflare's gateway allows one to browse any file stored on the public IPFS network by going to `cloudflare-ipfs.com/...`.

More information on the [Dev Docs](https://developers.cloudflare.com/distributed-web/ipfs-gateway).

{{% toc %}}

* * *
* * *

## index.html Example

See it in action on [Cloudflare Playground](https://www.cf-testing.com/ipfs-gateway.html).

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <link rel="icon" type="image/x-icon" href="https://davidjktofan.com/favicon.ico">
    <title>Hello to IPFS!</title>
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
        <h1>Hello! <br>This website is hosted on IPFS and accessed via Cloudflare's gateway.</h1><br>
        <p>More information on <a rel="noreferrer external" href="https://developers.cloudflare.com/distributed-web/ipfs-gateway" target="_blank">IPFS Gateway</a> or on <a rel="noreferrer external" href="https://www.cf-testing.com/ipfs-gateway.html" target="_blank">CF Playground</a></p>
    </div>
</body>
</html>
```

* * *

## Disclaimer

Educational purposes only, and this blog post does not necessarily reflect the opinions of Cloudflare. There are many more aspects to Cloudflare and its products and services – this is merely a brief educational intro. Properly inform yourself, keep learning, keep testing, and feel free to share your learnings and experiences as I do. Hope it was helpful! Images are online and publicly accessible.
