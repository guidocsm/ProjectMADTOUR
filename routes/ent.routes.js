const router = require("express").Router();
const User = require("../models/User.model")
const Ent = require("../models/Ent.model")

router.get("/all-ent", (req, res) => {
    Ent.find()

    .then( ents => res.render("entertainment/all-ent", { ents }))
})

router.get("/create", (req, res) => {

    Ent.find()
    .then((ents) => {
      res.render("entertainment/new-ent", { ents });
    });
});

router.post("/create", (req, res) => {
    const { name, type, music, musicType, price, review, location, webSite, openingTime, closingTime } = req.body;
   
    Ent.create({ name, type, music, musicType, price, review, location, webSite, openingTime, closingTime })
      .then(() => {
        res.redirect("/entertainment/all-ent");
      })
      .catch((err) => console.log(err));
});



module.exports = router;