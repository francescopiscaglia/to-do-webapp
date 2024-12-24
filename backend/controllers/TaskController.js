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

// create
const create = (req, res) => {

    const { category_id } = req.params;
    const { title, description, due_date } = req.body;

    // query
    const sql = `INSERt INTO tasks SET category_id = ?, title = ?, description = ?, due_date = ?`;

    connection.query(sql, [category_id, title, description, due_date], (err, results) => {

        // error
        if (isNaN(category_id)) {
            return res.status(404).json({ error: "Category_id required" });
        };

        if (!title) {
            return res.status(400).json({ message: "Title required" });
        };

        // success
        res.status(200).json({
            message: "Task added successfuly"
        });
    });
};

// update
const update = (req, res) => {

    const { taskID } = req.params;
    const { title, description, due_date, completed } = req.body;

    // validation
    if (isNaN(taskID)) {
        return res.status(404).json({ message: "Invalid Task ID" });
    };

    if (!title) {
        return res.status(400).json({ message: "Title is required" });
    };

    // query
    const sql = `UPDATE tasks SET title = ?, description = ?, due_date = ?, completed = ? WHERE id = ?`;

    connection.query(sql, [title, description, due_date, completed, taskID], (err, results) => {

        // error handling
        if (err) {
            console.error("DB Error:", err);
            return res.status(500).json({
                message: "Internal Server Error"
            });
        };

        if (results.affectedRows == 0) {
            return res.status(404).json({ message: "Task not found" });
        };

        // success
        res.status(200).json({
            message: "Task update successfully",
            task: results
        });
    });
};

// destroy
const destroy = (req, res) => {

    const { taskID } = req.params;

    // validation
    if (isNaN(taskID)) {
        return res.status(400).json({ message: "Invalid Task ID" });
    };

    // query
    const sql = `DELETE FROM tasks WHERE id = ?`;

    connection.query(sql, [taskID], (err, res) => {

        // error
        if (err) {
            console.error("DB Error:", err);
            return res.status(500).json({ message: "Internal Server Error" });
        };

        if (results.affectedRows === 0) {
            return res.status(404).json({ message: "Task not found" });
        };

        // success
        res.status(200).json({ message: "Task delete successfully" });
    });
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy
};