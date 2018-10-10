const express = require('express');
const router  = express.Router();


const Data = require("../models/data");


// routes
router.get("/", (req, res) => {
    res.render("index.ejs", {
        data: Data
    });
})

router.delete("/:id/delete", (req, res) => {
    Data.splice([req.params.id],1);
    res.redirect("/");
})

module.exports = router;