const router = require("express").Router();
const User = require("../models/User.model");
const Interest = require("../models/Interest.model");
const Review = require("../models/Review.model");

const { isLoggedIn } = require("../middlewares")

const { isAdmin, isOwner } = require("../utils");

const fileUploader = require("../config/cloudinary.config");

router.get("/all-arts", (req, res) => {
 
  Interest.find({ $or: [{ type: "Museum" }, { type: "Monument" }, { type: "Theater" }] }).then((arts) =>
    res.render("art/all-arts", { arts })
  );
});

router.get("/create", (req, res) => {
  Interest.find().then((interests) => {
    res.render("art/new-art", { interests });
  });
});

router.post("/create", fileUploader.single("image"), (req, res) => {

  let image = req.file?.path || "https://www.kenyons.com/wp-content/uploads/2017/04/default-image-620x600.jpg";

  const {
    name,
    description,
    creationDate,
    price,
    type,
    owner,
    capacity,
    lat,
    lng,
    review,
    webSite,
    openingTime,
    closingTime,
    
  } = req.body;

  let location = { 
    type: "Point",
    coords: [lat, lng],
  };

  Interest.create({
    name,
    description,
    creationDate,
    type,
    owner,
    capacity,
    location,
    price,
    review,
    webSite,
    openingTime,
    closingTime,
    image
  })
    .then(() => {
      res.redirect("/arts/all-arts");
    })
    .catch((err) => console.log(err));
});

router.get("/details/:id",isLoggedIn, (req, res) => {
  const { id } = req.params;
 
  user = req.session.currentUser;

  Interest.findById(id)
    .then((art) => { 
      Review.find({ ref: art.id })
      .populate("creator")
      .populate("ref")
      .then((reviews) => {
        console.log(reviews)
        res.render("art/details", { art,reviews, isAdmin: isAdmin(user), isOwner: isOwner(user._id, art) })}
  );
});
});

router.get("/edit/:id", (req, res) => {
  const { id } = req.params;

  Interest.findById(id)
    .then((editArt) => {
      res.render("art/edit", { editArt });
    })
    .catch((err) => console.log(err));
});

router.post("/edit/:id", fileUploader.single("uploadedImage"), (req, res) => {
  const { id } = req.params;
  const { name, description, type, lat, lng, webSite, openingTime, closingTime, creationDate, owner, price,image } = req.body;
   let imageChosen = req.file?.path || image;

    let location = {
      type: "Point",
      coords: [lat, lng],
    };

  Interest.findByIdAndUpdate(id, {
    name,
    description,
    type,
    location,
    price,
    webSite,
    openingTime,
    closingTime,
    image: imageChosen ,

    caracteristics: { creationDate, owner },
  }).then(() => res.redirect("/arts/all-arts"));
});

router.get("/:id/delete", (req, res) => {
  const { id } = req.params;

  Interest.findByIdAndRemove(id).then(() => res.redirect("/arts/all-arts"));
});

module.exports = router;
