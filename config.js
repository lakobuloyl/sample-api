const mysql = require("mysql2");

const mysqlConnection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database:"toda_db"
})

mysqlConnection.query("select * from tbl_toda")

module.exports = mysqlConnection.promise();
