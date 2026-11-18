# grail-site

The website for [grail](https://github.com/MPKoutsoukos/grail), at **https://grailnotebook.com**: the home page
(the grail method, its history, the app, downloads) and the privacy policy the apps link to. Static files only,
no build step, no cookies, no analytics and no third-party requests; published by GitHub Pages from `main`.

```
index.html           home page: one reading column (the idea, what it does, downloads, dated changes, colophon)
privacy/index.html   privacy policy  ->  https://grailnotebook.com/privacy/
style.css            the site's style: paper and ink, Newsreader for reading, Inter for small labels
fonts/               the app's own fonts, served from the site, with their SIL Open Font License texts
shots/               app screenshots (WebP)
icon.png, og.png     favicon and link preview
CNAME                the custom domain: grailnotebook.com
```

The download buttons point to the `releases/latest` pages of
[grail](https://github.com/MPKoutsoukos/grail/releases/latest) and
[grail-desktop](https://github.com/MPKoutsoukos/grail-desktop/releases/latest), so they never need updating.

## Hosting

GitHub Pages serves the site over HTTPS (enforced). The domain's DNS points at GitHub Pages: four `A` records
for the apex (`185.199.108.153` to `185.199.111.153`) and a `CNAME` for `www` to `mpkoutsoukos.github.io`.
Mail records for the domain are separate and unaffected.

## Changing the privacy policy

Edit `privacy/index.html`, give it a new effective date, and push: it's live within a minute. Keep the copy in
the grail repo (`store/privacy.html`) the same.

## Licence

The site's text and images: © 2026 MPKoutsoukos. The fonts keep their own licence (SIL Open Font License, see
`fonts/*-OFL.txt`).
