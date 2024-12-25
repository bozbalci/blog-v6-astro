---
title: "Colophon"
permalink: "/colophon"
layout: "@layouts/ContentLayout.astro"
created: 2024-08-04
modified: 2024-12-19
---

_How this site was made._

## Hosting

This site is hosted on [Cloudflare Pages](http://pages.dev). Images are hosted on [Amazon S3](https://aws.amazon.com/s3/).

The domain is currently registered with Cloudflare. Previously, it was registered with Google Domains until the service was [killed by Google](https://killedbygoogle.com) and sold to Squarespace.

## Technology

This site is powered by [Astro](https://astro.build). Pages are written in [MDX](https://mdxjs.com) and TypeScript, and styling is written in [SCSS](https://sass-lang.com).

Content is handled in two ways: pages like this one and other blog posts are written in Markdown; and the music collection and photo gallery pages are powered by a custom content management system I’ve written in Python that I’ve decided to call “NotCMS”.[^1]

NotCMS is not a content management system as much as it is a simple [Django](https://www.djangoproject.com) app. It consists of two main parts:

1. The Django admin interface is where I upload new photos, post book reviews, and so on.
2. A simple REST API, built using [Django Ninja](https://django-ninja.dev) powering the Astro frontend.

Images and other assets are uploaded to an S3 bucket, relational data is held in a SQLite database.

### Photos

The [photo gallery](/gallery) is powered by a JavaScript library called [lightGallery](https://www.lightgalleryjs.com). EXIF metadata is handled by the Django backend automatically on upload.

### Music collection

The [music collection](/music-collection) page’s design was inspired by [Andy Bell’s website](https://bell.bz/music-collection/). He is the co-creator of [Every Layout](https://every-layout.dev), a book that taught me a lot about CSS and web design principles.

## Typography

This site uses three fonts:

1. Headings, captions, and various UI elements are set in [Inter](https://rsms.me/inter/).
2. Body text is set in [Charter](https://practicaltypography.com/charter.html).
3. Monospace font (code blocks, metadata, ...) is set in [MonoLisa](https://www.monolisa.dev/).

### Fluid type scale

This site was designed using a [fluid type scale](https://utopia.fyi/blog/designing-with-fluid-type-scales/) by [Utopia](https://utopia.fyi/). Font sizes are calculated in CSS, interpolating between mobile and desktop sizes depending on the current browser width.

## Authoring

Posts are written with [iA Writer](https://ia.net/writer), in Markdown.

iA Writer automatically handles [smart quotes](https://practicaltypography.com/straight-and-curly-quotes.html), [ellipses](https://practicaltypography.com/ellipses.html) and other typographic concerns. It also helps me focus when writing.

## Accessibility

This site aims to conform to the Level AA accessibility standards outlined in the [WCAG 2.2 specification](https://www.w3.org/TR/WCAG22/). _Aims_ is the key word here, I’m still reading through the specs and making small tweaks every day.

## Privacy

This site does not collect or retain any data at all, ever.

[^1]: This was before I discovered that [another project with the same name](https://www.notcms.com) existed, but I don’t plan to release mine anyhow, therefore it shouldn’t be an issue.
