const express = require("express");
const app = express();
const connection = require("./database/connection.js");

const PORT = process.env.PORT;
const HOST = process.env.HOST;

// start the server
app.listen(PORT, () => {
    console.log(`Server is running at ${HOST}:${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Hello world")
})