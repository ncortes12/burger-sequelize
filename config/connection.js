var mysql = require("mysql");

var connection;

//setting up the connection to mySQL database for use on either a local host or on heroku using a JAWSDB

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "sleepy12",
        database: "burger_db"
    });

}
//launching my connection

connection.connect(function (err) {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId)
});

//exporting connection to use in other files

module.exports = connection;