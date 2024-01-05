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

- make .gtihub/workflows/test.yaml
- secrets instead of .env

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