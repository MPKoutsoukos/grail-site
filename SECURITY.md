# Security

## Reporting a problem

Please don't open a public issue for a security problem. Instead:

- use GitHub's **private vulnerability reporting**: the **Security** tab of this repository → **Report a
  vulnerability**, or
- write to **hello@grailnotebook.com** with "security" in the subject.

Say what you found, how to reproduce it, and which version you used. You'll get an answer within a week, and a
fix or a plan as soon as the problem is understood. Credit in the release notes if you'd like it.

## Supported versions

Only the latest release gets security fixes: the live site at https://grailnotebook.com.

## What's in scope

The website at https://grailnotebook.com and its privacy page.

grail keeps notes on the user's own device and has no server or account, so most issues will be about the app
itself: reading or changing files it shouldn't, running code from a note's content, or leaking anything over the
network beyond the link previews the user asked for.

## How grail is kept safe

- No secrets in the code: signing keys and deploy keys live only in GitHub Actions secrets, and GitHub's secret
  scanning with push protection is on.
- Dependabot alerts and security updates are on.