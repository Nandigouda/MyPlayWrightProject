const fs = require('fs');
const path = require('path');

/**
 * Reads a property value from the trellocommondata.properties file
 * @param {string} key
 * @returns {Promise<string>}
 */
async function readPropertyFile(key) {
  // Fix: Use absolute path from project root
  const filePath = path.resolve(__dirname, '../test-data/trellocommondata.properties');

  if (!fs.existsSync(filePath)) {
    throw new Error(`Properties file not found at: ${filePath}`);
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const lines = fileContent.split('\n');

  for (const line of lines) {
    if (line.trim().startsWith('#') || !line.includes('=')) continue;
    const [k, v] = line.split('=');
    if (k.trim() === key) return v.trim();
  }

  throw new Error(`Key '${key}' not found in properties file.`);
}

module.exports = { readPropertyFile };
