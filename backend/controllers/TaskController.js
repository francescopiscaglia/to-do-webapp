const connection = require("../database/connection.js")

// index
const index = async (req, res) => {

    try {
        // query
        const sql = `SELECT * FROM categories`;
        const [results] = await connection.query(sql);

        if (results.length === 0) {
            return res.status(404).json({ message: "No categories found" });
        };

        res.status(200).json(results);

    } catch (err) {
        next(err);
    };
};

// show
const show = async (req, res) => {

    try {

        const { category_id } = req.params;

        // query
        const sql = `SELECT * FROM tasks WHERE category_id = ?`;

        const [results] = await connection.query(sql, [category_id]);

        // error
        if (results.length === 0) {
            return res.status(404).json({ message: "No task found" });
        };

        // success
        res.status(200).json(results);

    } catch (err) {
        next(err);
    };

};

// create
const create = async (req, res) => {

    try {

        const { category_id } = req.params;
        const { title, description, due_date } = req.body;

        // validation
        if (!title) {
            return res.status(400).json({ message: "Title required" });
        };

        if (isNaN(category_id) || !category_id) {
            return res.status(404).json({ error: "Invalid Category_id" });
        };

        // query
        const sql = `INSERT INTO tasks SET category_id = ?, title = ?, description = ?, due_date = ?`;

        const [results] = await connection.query(sql, [category_id, title, description, due_date]);

        if (results.affectedRows == 0) {
            return res.status(404).json({ message: "Task not found" });
        };

        // success
        res.status(201).json({
            message: "Task added successfuly"
        });

    } catch (err) {
        next(err);
    };
};

// update
const update = async (req, res) => {

    try {

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

        const [results] = await connection.query(sql, [title, description, due_date || null, completed || 0, taskID]);

        if (results.affectedRows == 0) {
            return res.status(404).json({ message: "Task not found" });
        };

        // success
        res.status(200).json({
            message: "Task update successfully",
            task: results
        });

    } catch (err) {
        next(err);
    };
};

// destroy
const destroy = async (req, res) => {

    try {
        const { taskID } = req.params;

        // validation
        if (isNaN(taskID)) {
            return res.status(400).json({ message: "Invalid Task ID" });
        };

        // query
        const sql = `DELETE FROM tasks WHERE id = ?`;

        const [results] = await connection.query(sql, [taskID]);

        if (results.affectedRows === 0) {
            return res.status(404).json({ message: "Task not found" });
        };

        // success
        res.status(200).json({ message: "Task delete successfully" });

    } catch (err) {
        next(err);
    };
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy
};