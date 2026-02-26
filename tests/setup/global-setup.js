// globalSetup.js
const { request, chromium } = require('@playwright/test');
require('dotenv').config();
const path = require('path');

module.exports = async () => {

  console.log("🚀 Running Global Setup...");

  // -------------------------------
  // 1️⃣ Login via API
  // -------------------------------
  const requestContext = await request.newContext();

  const response = await requestContext.post(
    'https://devapi.vsendocs.com/api/auth/login',
    {
      data: {
        username: process.env.LOGIN_USERNAME,
        password: process.env.PASSWORD
      }
    }
  );

  if (!response.ok()) {
    throw new Error('❌ API Login Failed');
  }

  const responseBody = await response.json();
  const token = responseBody.token;

  if (!token) {
    throw new Error('❌ Token not received from API');
  }

  console.log("✅ Token received");

  // -------------------------------
  // 2️⃣ Launch Browser
  // -------------------------------
  const browser = await chromium.launch({ headless: true });

  const context = await browser.newContext();

  // IMPORTANT:
  // Instead of using page.evaluate(localStorage),
  // we inject token as a cookie (BEST PRACTICE)

  await context.addCookies([
    {
      name: 'token',
      value: token,
      domain: 'dev.vsendocs.com',
      path: '/',
      httpOnly: true,
      secure: true,
    }
  ]);

  // -------------------------------
  // 3️⃣ Visit App Once To Bind Auth
  // -------------------------------
  const page = await context.newPage();
  await page.goto('https://dev.vsendocs.com/dashboard', {
    waitUntil: 'domcontentloaded'
  });

  console.log("✅ Authenticated page loaded");

  // Optional: wait for dashboard to confirm login works
  try {
    await page.waitForSelector('body', { timeout: 5000 });
  } catch (err) {
    console.log("⚠ Dashboard selector not verified");
  }

  // -------------------------------
  // 4️⃣ Save Storage State
  // -------------------------------
  await context.storageState({
    path: path.resolve(__dirname, 'storageState.json')
  });

  await browser.close();

  console.log("✅ storageState.json saved successfully");
};