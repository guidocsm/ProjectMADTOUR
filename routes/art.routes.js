const router = require("express").Router();
const User = require("../models/User.model")
const Art = require("../models/Art.model")

router.get("/all-arts", (req, res) => {
    console.log(res)
    Art.find()
    
    .then( arts => res.render("art/all-arts", { arts }))
})

router.get("/create", (req, res) => {

    Art.find()
    .then((arts) => {
      res.render("art/new-art", { arts });
    });
});

router.post("/create", (req, res) => {
    const { name, description, creationDate, type, image, owner, capacity, location, review, webSite, openingTime, closingTime } = req.body;
   
    Art.create(  {name, description, creationDate, type, image, owner, capacity, location, review, webSite, openingTime, closingTime} )
      .then((art) => {
        res.redirect("/arts/all-arts");
      })
      .catch((err) => console.log(err));
});


router.get("/details/:id", (req, res) => {
    const { id } = req.params

    Art.findById(id)    
    .then( art => res.render("art/details", { art }))
})

router.get("/:id/delete", (req, res) => {
    const { id } = req.params;

    Art.findByIdAndRemove(id)
    .then(() => res.redirect("/arts/all-arts"));
});






module.exports = router;