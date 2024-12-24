const connection = require("../database/connection.js")

// index
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

// show
const show = (req, res) => {

    const { category_id } = req.params;

    const sql = `SELECT * FROM tasks WHERE category_id = ?`;

    connection.query(sql, [category_id], (err, results) => {

        // error
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Internal Server Error" });
        };

        if (results.length === 0) {
            return res.status(404).json({ message: "No task found" });
        };

        // success
        res.status(200).json(results);
    });
};

module.exports = {
    index,
    show
};