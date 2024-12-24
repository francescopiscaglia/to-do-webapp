const connection = require("../database/connection.js")

const index = (req, res) => {

    // query
    const sql = `SELECT * FROM categories`;

    connection.query(sql, (err, results) => {

        // error
        if (err) {
            console.error("DB Error:", err);
            return res.status(500).json({ err: "Internal Server Error" });
        };

        if (results.length === 0) {
            return res.status(404).json({ message: "No categories found" });
        };

        // success
        res.status(200).json(results);
    });
};

module.exports = {
    index
};