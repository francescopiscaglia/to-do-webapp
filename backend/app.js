const express = require("express");
const app = express();
const CategoriesRouter = require("./routes/categories.js");
const NotFound = require("./middleware/NotFound.js");

const PORT = process.env.PORT;
const HOST = process.env.HOST;

// body parse middleware
app.use(express.json());

// use router
app.use("/categories", CategoriesRouter);

// not found middleware
app.use(NotFound);

// start the server
app.listen(PORT, () => {
    console.log(`Server is running at ${HOST}:${PORT}`);
});

