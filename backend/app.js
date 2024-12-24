const express = require("express");
const app = express();
const connection = require("./database/connection.js");
const CategoriesRouter = require("./routes/categories.js")

const PORT = process.env.PORT;
const HOST = process.env.HOST;

// body parse middleware
app.use(express.json());

// use router
app.use("/categories", CategoriesRouter);

// start the server
app.listen(PORT, () => {
    console.log(`Server is running at ${HOST}:${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Hello world")
})