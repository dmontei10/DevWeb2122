const database = require("nedb");
const db = new database("database.db");
db.loadDatabase();
module.exports = db;