const express = require("express");
const router = express.Router();
const CategoriesController = require("../controllers/CategoriesController.js")

// index
router.get("/", CategoriesController.index);

// show
router.get("/:category_id/tasks", CategoriesController.show);

module.exports = router