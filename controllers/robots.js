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

router.get("/:id/edit", (req, res) => {
    res.render("edit.ejs", {
        data: Data,
        i: req.params.id
    });
})

router.put("/:id/edit", (req, res) => {
    Data[req.params.id] = req.body;
    res.redirect("/");
})

module.exports = router;