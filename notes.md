- [x] choose tester:
  - selenium is java based
  - puppeteer is chrome only
  - cypress is complex and has a gui
  - playwright looks good - js. cross browser. headless.
- [x] make article outline
- [x] make test repo
- [ ] run an lxc container with demo rust app, fa, and test login with gui tester (selenium, playwright, the thing i used for ekaya)
- [ ] do the same thing in a github action
- [ ] learn about github actions marketplace
- [ ] decide what the marketplace action should do (all 3 os?)
- [ ] write and deploy the action
- [ ] write the article

## Introduction

Things users want to automate deployment of:
- When pushing to main branch, deploy their app and FusionAuth to AWS, Azure, Digital Ocean, or a custom server.
- Test that login works through terminal.
- Test login works from their app. A web page GUI tester.
- Upgrade FusionAuth to a new version.
- Leave FusionAuth untouched on server if no changes have been made to kickstart files or FusionAuth version.
- Set up CD functionality through a GitHub marketplace action.

- Testing login works should be done in the action. The final test of logging to the deployed app can be done by hand when checking the site is actually up.

## How to upgrade FusionAuth

https://fusionauth.io/docs/get-started/download-and-install/docker#upgrading
https://hub.docker.com/r/fusionauth/fusionauth-app/tags

## Did

```bash
npm init playwright;

app$ npm init playwright
Need to install the following packages:
create-playwright@1.17.131
Ok to proceed? (y) y
Getting started with writing end-to-end tests with Playwright:
Initializing project in '.'
✔ Do you want to use TypeScript or JavaScript? · JavaScript
✔ Where to put your end-to-end tests? · tests
✔ Add a GitHub Actions workflow? (y/N) · true
✔ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true
✔ Install Playwright operating system dependencies (requires sudo / root - can be done manually via 'sudo npx playwright install-deps')? (y/N) · false

npx playwright install-deps;
```

## How To Run

In a terminal run the following to start FusionAuth.

```shell
docker-compose up;
```

In another terminal start the app.

```shell
cd complete-application
npm install
npm run start
```

In another terminal test the app.

```shell
clear; npx playwright test --project=chromium;
echo $?; # 0 if success
# clear; npx playwright test --project=chromium --ui; # to watch the test and see where it fails
```

Browse to the app at http://localhost:3000.