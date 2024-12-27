const express = require("express");
const app = express();
const cors = require("cors");
const CategoriesRouter = require("./routes/categories.js");
const NotFound = require("./middleware/NotFound.js");
const InternalServerError = require("./middleware/InternalServerError.js");

const PORT = process.env.PORT;
const HOST = process.env.HOST;

// cors 
app.use(cors())

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

// server middleware
app.use(InternalServerError);

