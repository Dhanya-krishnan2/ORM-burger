// Connect Node to MySQL.
var mysql = require("mysql");
// here adding jaws db as a add on to enable deployment in heroku 
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Ahalyamol14*",
        database: "burgers_db"
    });
};
// for the local connection I am using my database details above.
// the connection is establishing from here and if its connect show the connected message with the id otherwise throw error
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export the connection.
module.exports = connection;
