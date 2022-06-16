const fs = require('fs')

module.exports.errorLogger = async(err) => {
  const date = new Date().getTime();
    const path = require('path');
    let pathToFile = path.join(__dirname,'../logOfError', 'errorLogger.json');
    const error = {
        date: date,
        code: err.code,
        message: err.message,
        stack: err.stack,
    };
    const errorString = JSON.stringify(error);
    fs.appendFileSync(pathToFile, errorString + '\n');
}