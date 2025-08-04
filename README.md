# 🎯 Trello End-to-End Automation with Playwright & Jenkins

This is a complete **end-to-end automation testing framework** for Trello, built using **Playwright JS** and integrated with **Jenkins CI** and **Allure Reports**.

---

## 🔧 Tech Stack & Tools

- ✅ [Playwright](https://playwright.dev/) – For browser automation
- ✅ JavaScript (Node.js)
- ✅ Page Object Model (POM) – For scalable and reusable test architecture
- ✅ `.env` – For secure environment-based config management
- ✅ `.properties` – For dynamic test data handling
- ✅ [Jenkins](https://www.jenkins.io/) – For CI integration
- ✅ [Allure Reports](https://docs.qameta.io/allure/) – For beautiful test reporting

---

## 📐 Project Design

- **Page Object Model (POM):** All page-related locators and actions are organized into individual page classes for reuse.
- **Custom Fixtures:** Login and logout flows are handled using Playwright fixtures.
- **Config & Data:**  
  - `.env` file stores sensitive credentials.  
  - `test-data/*.properties` holds externalized test data.

---

## 🗂️ Project Structure

```bash
MyPlayWrightProject/
│
├── com/
│   └── trello/
│       └── myproject/       # Page Object classes
│
├── tests/                   # Test specs using Playwright Test
│
├── test-data/               # Test data (excluded via .gitignore)
│   └── trellocommondata.properties
│
├── .env                     # Environment variables (excluded)
├── playwright.config.ts     # Playwright test config
├── .gitignore
├── README.md

Test Scenarios Covered
Login to Trello
Create a new board
Add cards to the board
Delete the created board
Logout and close the browser

How to Run
1. Clone the repo

git clone https://github.com/Nandigouda/MyPlayWrightProject.git
cd MyPlayWrightProject

2. Install dependencies
npm install

3. Setup environment files
These files are excluded from the repo for security.

Copy .env.example → .env

Copy test-data/trellocommondata.example.properties → test-data/trellocommondata.properties

Update the values accordingly.

4. Run the tests

npx playwright test
📊 Reporting
✅ Allure Report

To generate and view Allure report:

npx allure generate ./allure-results --clean -o ./allure-report
npx allure open ./allure-report
🛠 Jenkins Integration
The project is fully integrated with Jenkins.

Jenkins pipeline installs dependencies, runs tests, and publishes Allure reports.

CI is triggered via GitHub commits.

🤝 Contributors
Nikhil Nandigoud – Self-initiated project for upskilling in Playwright, CI/CD, and reporting.

🔐 Security Notice
.env and test-data/ folders are excluded via .gitignore to avoid exposing sensitive credentials.
If you clone this repo, create your own local config files as described above.
