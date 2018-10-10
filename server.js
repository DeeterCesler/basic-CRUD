const express = require("express");
const app = express();
const Data = require("./models/data");
const methodOverride = require('method-override');
const bodyParser = require('body-parser')

// middleware
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.get("/", (req, res) => {
    res.render("index.ejs", {
        data: Data
    });
})

app.delete("/:id/delete", (req, res) => {
    Data.splice([req.params.id],1);
    res.redirect("/");
})

app.listen(3000, ()=>{
    console.log("server is running zoooooom");
})

module.exports = app;