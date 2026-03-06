// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

  testDir: './tests',

  timeout: 30000,

  use: {
    baseURL: 'https://www.saucedemo.com/',
    headless: false,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry'
  },

});