const sql = require("mysql");

const db = sql.createConnection({
    host:"localhost",
    user:"root",
    password:"root123123123",
    database:"summa"
})
db.connect((err)=>{
    if (err)console.log(err);
    else{
        console.log("DB connected");
    }
})
module.exports = db;