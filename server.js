const express = require("express");
const app = express();
const Data = require("./models/data");


app.listen(3000, ()=>{
    console.log("server is running zoooooom");
})

module.exports = app;