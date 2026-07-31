const fs = require("fs");
const path = require("path");

const accountsPath = path.join(__dirname, "../database/accounts.json");

function getAccounts() {
    return JSON.parse(fs.readFileSync(accountsPath, "utf8"));
}

function saveAccounts(accounts) {
    fs.writeFileSync(accountsPath, JSON.stringify(accounts, null, 4));
}

module.exports = {
    getAccounts,
    saveAccounts
};
