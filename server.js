const express = require("express");
const app = express();;
const methodOverride = require('method-override');
const bodyParser = require('body-parser')
// controller
const Controller = require("./controllers/controller")

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use("/", Controller);

app.listen(3000, ()=>{
    console.log("server is running zoooooom");
})

module.exports = app;