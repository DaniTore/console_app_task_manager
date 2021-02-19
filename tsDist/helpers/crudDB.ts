const fs = require('fs')

const saveIntoDB = ( dbPath: string ,data: object[]) => {
    fs.writeFileSync(dbPath, JSON.stringify(data))
}

const readDB = (dbPath: string) => {  
    if(!fs.existsSync(dbPath)) {
        return null;
    } else {
        const infoDB = fs.readFileSync(dbPath, {encoding: 'utf-8'});
        const infoDBparse = JSON.parse(infoDB);
        return infoDBparse;
    }
}

module.exports = {
    saveIntoDB,
    readDB
}