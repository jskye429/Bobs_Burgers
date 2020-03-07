var mysql = require("mysql");


var connection
if (process.env.mysql) {
    connection = mysql.createConnection(process.env.mysql);
} else {
    connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "Lena1006",
    database: "burgers_db"
    });
}
connection.connect(function(err){
    if (err){
        console.error("error" + err.stack)
    }
    console.log("mysql connection works" + connection.threadId)
})
module.exports = connection;