// utils/allureHelper.js

const {allure} = require('allure-playwright');




function label(name, value) {
  allure.label(name, value);
}

async function step(name, body) {
  await allure.step(name, body);
}

function attachText(name, text) {
  allure.attachment(name, text, 'text/plain');
}

function attachScreenshot(name, buffer) {
  allure.attachment(name, buffer, 'image/png');
}

module.exports = {
  label,
  step,
  attachText,
  attachScreenshot
};
