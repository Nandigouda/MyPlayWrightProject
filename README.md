# 🎯 Trello End-to-End Automation with Playwright & Jenkins

[![Playwright](https://img.shields.io/badge/Playwright-Testing-brightgreen?logo=playwright)](https://playwright.dev/)
[![Jenkins](https://img.shields.io/badge/Jenkins-CI-blue?logo=jenkins)](https://www.jenkins.io/)
[![Allure](https://img.shields.io/badge/Allure-Reports-orange)](https://docs.qameta.io/allure/)

This project is a **complete end-to-end automation testing framework** for Trello, built using **Playwright (JavaScript)** and integrated with **Jenkins CI** and **Allure Reports**.  
It demonstrates automation design using **Page Object Model (POM)**, secure config handling, and CI/CD integration.

---

## 🔧 Tech Stack & Tools
- ✅ [Playwright](https://playwright.dev/) – Browser automation
- ✅ JavaScript (Node.js)
- ✅ Page Object Model (POM) – Scalable, reusable architecture
- ✅ `.env` – Secure environment-based config
- ✅ `.properties` – Externalized test data
- ✅ [Jenkins](https://www.jenkins.io/) – Continuous integration
- ✅ [Allure Reports](https://docs.qameta.io/allure/) – Test reporting

---

## 📐 Project Design
- **Page Object Model (POM):** Each page has its own locators & actions.  
- **Custom Fixtures:** Login/Logout flows handled with Playwright fixtures.  
- **Config & Test Data:**  
  - `.env` → stores sensitive credentials  
  - `test-data/*.properties` → externalized test data  

---

## 🗂️ Project Structure

project-root/
│── src/               # Page Objects & Utilities
│── tests/             # Playwright test specs
│── test-data/         # Properties & sample data
│── configs/           # Environment configs
│── docs/              # Documentation
│── README.md          # Project documentation



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
npm install   # For JS/TS projects
# OR
mvn install   # For Java Maven projects
# OR
pip install -r requirements.txt   # For Python projects


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

🔮 Roadmap / Future Enhancements

 Add CI/CD integration
 Extend test coverage
 Add API testing
 Containerize with Docker

🤝 Contributors
Nikhil Nandigoud – Self-initiated project for upskilling in Playwright with JS, CI/CD, and reporting.

🔐 Security Notice
.env and test-data/ folders are excluded via .gitignore to avoid exposing sensitive credentials.
If you clone this repo, create your own local config files as described above.
