const router = require("express").Router();
const User = require("../models/User.model")
const Art = require("../models/Art.model")

const fileUploader = require('../config/cloudinary.config');

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

router.post("/create", fileUploader.single('image'), (req, res) => {
    const { name, description, creationDate, type, owner, capacity, location, review, webSite, openingTime, closingTime } = req.body;
   console.log(req.file)

    Art.create({ name, description, creationDate, type, owner, capacity, location, review, webSite, openingTime, closingTime, image: req.file.path })
      .then((art) => {
        res.redirect("/arts/all-arts");
      })
      .catch((err) => console.log(err));
});


router.get("/details/:id", (req, res) => {
    const { id } = req.params
    const user = User.find()
        console.log("La req session: ", req.session.currentUser)


    Art.findById(id)    
    .then( art => res.render("art/details", { art }))
})

router.get("/edit/:id", (req, res) => {
  const { id } = req.params
  
  Art.findById( id )
  .then((editArt) => {
      res.render("art/edit", {editArt})})
  .catch((err) => console.log(err))
})


router.post("/edit/:id", (req, res) => {
  const { id } = req.params
  const { name, description, creationDate, type, image, owner, capacity, location, review, webSite, openingTime, closingTime } = req.body

  Art.findByIdAndUpdate(id, { name, description, creationDate, type, image, owner, capacity, location, review, webSite, openingTime, closingTime})
  .then(() => res.redirect("/arts/all-arts"))
})

router.get("/:id/delete", (req, res) => {
    const { id } = req.params;

    Art.findByIdAndRemove(id)
    .then(() => res.redirect("/arts/all-arts"));
});






module.exports = router;