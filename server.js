const express = require("express");
const app = express();
const Data = require("./models/data");

app.get("/", (req, res) => {
    res.render("index.ejs", {
        data: Data
    });
})

app.listen(3000, ()=>{
    console.log("server is running zoooooom");
})

module.exports = app;