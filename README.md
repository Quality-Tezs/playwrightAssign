# Playwright Automation Test – SauceDemo

This project contains automated test scripts built using **Playwright Test Runner (JavaScript)** to validate the core functionality of the SauceDemo demo e-commerce application.

Application Under Test: https://www.saucedemo.com/

---

## 🚀 Project Overview

The automation suite verifies critical user workflows such as:

* User login
* Adding products to cart
* Checkout process
* Order completion validation

The project follows **best automation practices** including:

* Playwright Test Runner
* Page Object Model (POM)
* Proper locators
* Assertions
* Screenshot capture on failure
* Clean project structure

---

## 🧱 Tech Stack

* Playwright
* JavaScript
* Node.js
* Playwright Test Runner

---

## 📁 Project Structure

```
PlaywrightAssignment
│
├── pages
│   ├── loginPage.js
│   ├── inventoryPage.js
│   └── checkoutPage.js
│
├── tests
│   ├── login.spec.js
│   └── checkout.spec.js
│
├── playwright.config.js
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```
git clone https://github.com/Quality-Tezs/playwrightAssign.git
```

### 2️⃣ Navigate to the project

```
cd playwrightAssign
```

### 3️⃣ Install dependencies

```
npm install
```

### 4️⃣ Install Playwright browsers

```
npx playwright install
```

---

## ▶️ Running the Tests

Run all tests:

```
npx playwright test
```

Run tests in headed mode:

```
npx playwright test --headed
```

Run a specific test file:

```
npx playwright test tests/login.spec.js
```

---

## ✅ Test Scenarios

### 1. Login Test

Steps:

* Navigate to the application
* Login with credentials

  * Username: standard_user
  * Password: secret_sauce
* Verify successful login
* Validate page title contains **Products**

---

### 2. Add to Cart & Checkout Test

Steps:

* Login to application
* Add two products to cart
* Verify cart badge count
* Navigate to cart page
* Proceed through checkout
* Fill user information
* Complete the order
* Verify success message:

```
Thank you for your order!
```

---

## 📸 Failure Handling

Screenshots are automatically captured when a test fails to help with debugging.

---

## 📊 Best Practices Used

* Avoided unnecessary XPath
* Used Playwright locators
* Avoided hard waits
* Used assertions for validation
* Clean test structure

---

## 📌 Author

Automation Framework created as part of a Playwright test automation assignment.

---
