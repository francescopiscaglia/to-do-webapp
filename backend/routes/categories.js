const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/TaskController.js")

// index
router.get("/", TaskController.index);

// show
router.get("/:category_id/tasks", TaskController.show);

// create
router.post("/:category_id/task", TaskController.create);

module.exports = router