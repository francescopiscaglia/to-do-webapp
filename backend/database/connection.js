const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "todo_manager"
});

connection.connect(err => {
    if (err) throw err;
    console.log("DB connect");
})

module.exports = connection