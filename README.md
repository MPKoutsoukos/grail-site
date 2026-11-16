# grail-site

The website for [grail](https://github.com/MPKoutsoukos/grail), at **https://grailnotebook.com**: the home page
with the downloads, and the privacy policy that the apps and Google Play link to. Static files only (no build
step), published by GitHub Pages from the `main` branch.

```
index.html          home page: what grail is, downloads (Android, Windows, Linux), why, open source
privacy/index.html  privacy policy  ->  https://grailnotebook.com/privacy/
style.css, fonts/   shared style; the app's own fonts (SIL Open Font License), no third-party requests
icon.png, og.png    favicon and link preview
CNAME               the custom domain: grailnotebook.com
```

The download buttons point to the `releases/latest` pages of
[grail](https://github.com/MPKoutsoukos/grail/releases/latest) and
[grail-desktop](https://github.com/MPKoutsoukos/grail-desktop/releases/latest), so they never need updating.

## The domain

`grailnotebook.com` is registered at papaki.gr. Its DNS points at GitHub Pages:

| Type | Name | Value |
|---|---|---|
| A | `@` (grailnotebook.com) | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `mpkoutsoukos.github.io` |

GitHub Pages then serves the site over HTTPS (Settings → Pages → Enforce HTTPS).

## Changing the privacy policy

Edit `privacy/index.html`, give it a new effective date, and push: it's live within a minute. Keep the copy in
the grail repo (`store/privacy.html`) the same.

## Licence

The site's text and images: © 2026 MPKoutsoukos. The fonts keep their own licence (SIL Open Font License).
