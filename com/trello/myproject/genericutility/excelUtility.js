const xlsx = require('xlsx');
const path = require('path');

class ExcelUtility {
  constructor() {
    // Path to your Excel file in test-data folder
    this.filePath = path.join(__dirname, '..', 'test-data', 'dropdown1.xlsx');
  }

  readStringDataFromExcel(sheetName, rowIndex, cellIndex) {
    const workbook = xlsx.readFile(this.filePath);
    const sheet = workbook.Sheets[sheetName];
    const cellAddress = xlsx.utils.encode_cell({ r: rowIndex, c: cellIndex });
    const cell = sheet[cellAddress];

    return cell && cell.t === 's' ? cell.v : '';
  }

  readNumericDataFromExcel(sheetName, rowIndex, cellIndex) {
    const workbook = xlsx.readFile(this.filePath);
    const sheet = workbook.Sheets[sheetName];
    const cellAddress = xlsx.utils.encode_cell({ r: rowIndex, c: cellIndex });
    const cell = sheet[cellAddress];

    return cell && cell.t === 'n' ? cell.v : NaN;
  }

  setExcelData(sheetName, rowIndex, cellIndex, data) {
    const workbook = xlsx.readFile(this.filePath);
    const sheet = workbook.Sheets[sheetName];
    const cellAddress = xlsx.utils.encode_cell({ r: rowIndex, c: cellIndex });

    // Create cell if missing
    if (!sheet[cellAddress]) {
      sheet[cellAddress] = { t: 's', v: data };
    } else {
      sheet[cellAddress].v = data;
    }

    xlsx.writeFile(workbook, this.filePath);
  }
}

module.exports = { ExcelUtility };
