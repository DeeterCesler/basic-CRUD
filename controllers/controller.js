const express = require('express');
const router  = express.Router();

const Data = require("../models/data");
const Hobbies = require("../models/hobbies");


// the top 7 RESTful routes
router.get("/", (req, res) => {
    res.render("index.ejs", {
        data: Data,
        hobbies: Hobbies
    });
})

router.delete("/:id/delete", (req, res) => {
    Data.splice([req.params.id],1);
    res.redirect("/");
})

router.get("/:id/edit", (req, res) => {
    res.render("edit.ejs", {
        data: Data,
        hobbies: Hobbies,
        i: req.params.id
    });
})

router.put("/:id/edit", (req, res) => {
    Data[req.params.id] = req.body;
    res.redirect("/");
})

router.get("/new", (req, res) => {
    res.render("new.ejs", {
        data: Data,
        i: Data.length
    });
})

router.post("/:id/new", (req, res) => {
    Data[req.params.id] = req.body;
    res.redirect("/");
})

router.get("/:id/hobbies/:id", (req, res) => {
    res.render("hobbies.ejs", {
        data: Data,
        i: req.params.id,
        hobbies: Hobbies
    });
})

router.get("/:id", (req, res) => {
    res.render("show.ejs", {
        data: Data[req.params.id],
        i: req.params.id,
        random: Math.floor(Math.random()* Data[req.params.id].thoughts.length)
    });
})

// the thoughts routes

router.get("/:id/thoughts", (req, res) => {
    res.render("thoughts.ejs", {
        data: Data[req.params.id]
    })
})

router.get("/:id/thoughts/new", (req, res) => {
    res.render("newThought.ejs" , {
        data: Data[req.params.id],
        i: req.params.id
    })
})

router.post("/:id/thoughts/new", (req, res) =>{
    Data[req.params.id].thoughts.push(req.body.thot);
    res.redirect("/")
})

router.get("/:id/thoughts/:index", (req, res) => {
    res.render("thoughts.ejs", {
        data: Data[req.params.id],
        thoughtNumber: [req.params.index],
        id: req.params.id
    })
})


module.exports = router;