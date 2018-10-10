const express = require("express");
const app = express();;
const methodOverride = require('method-override');
const bodyParser = require('body-parser')
// controller
const robotController = require("./controllers/robots")

// middleware
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", robotController);

app.listen(3000, ()=>{
    console.log("server is running zoooooom");
})

module.exports = app;