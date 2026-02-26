// playwright.config.js
const { defineConfig, devices } = require('@playwright/test');
require('dotenv').config();

module.exports = defineConfig({
  testDir: './tests',

  globalSetup: './tests/setup/global-setup.js',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',


  use: {
    baseURL: 'https://dev.vsendocs.com/',

    video: 'retain-on-failure',
    storageState: 'storageState.json',
    headless: false,
    trace: 'on-first-retry',
  },

  timeout: 60000,
  projects: [
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
  ],
});
