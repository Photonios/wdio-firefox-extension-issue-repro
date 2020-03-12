# wdio-firefox-extension-issue-repro

This reproduces an issue with `@wdio/firefox-profile-service` where its unable to load web-extensions.

The example case tries to load the the most recent version of AdBlock Plus.

## How to run
1. `yarn install` or `npm install`
2. `yarn test`

Firefox will open and select the extension page. Observe the AdBlock plus extension not showing up as installed.
