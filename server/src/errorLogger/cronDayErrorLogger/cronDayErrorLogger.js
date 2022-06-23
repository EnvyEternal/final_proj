const cron = require('node-cron');
const fs = require("fs");


module.exports.cronDayErrorLogger = cron.schedule('0 8 * * *', () => {
        const path = require('path');
        const date = new Date().getTime();
        const pathToFile = path.join(__dirname, '../../logOfError', 'errorLogger.json');
        const data = fs.readFileSync(pathToFile).toString();
        const pathToFileNew = path.join(__dirname, '../../logOfError/logOfDay', `errorLoggerDay${date}.json`);

        fs.writeFileSync(pathToFile, '');
        data.split('\n').forEach(line => {
                const data = JSON.parse(line)
                const newData = JSON.stringify({message: data.message, code: data.code, date: data.date})
                if(newData){
                        fs.appendFileSync(pathToFileNew, newData + '\n');
                }
            }
        )
    }
)
