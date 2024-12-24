const express = require("express");
const router = express.Router();
const CategoriesController = require("../controllers/CategoriesController.js")

router.get("/", CategoriesController.index);

module.exports = router