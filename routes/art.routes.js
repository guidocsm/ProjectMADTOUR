const router = require("express").Router();
const User = require("../models/User.model");
const Interest = require("../models/Interest.model");
const { isLoggedIn } = require("../middlewares")

const { isAdmin, isOwner } = require("../utils");

const fileUploader = require("../config/cloudinary.config");

router.get("/all-arts", (req, res) => {
  console.log(res);
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
  const {
    name,
    description,
    creationDate,
    price,
    type,
    owner,
    capacity,
    location,
    review,
    webSite,
    openingTime,
    closingTime,
    image,
  } = req.body;

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
    image: req.file.path,
  })
    .then(() => {
      res.redirect("/arts/all-arts");
    })
    .catch((err) => console.log(err));
});

router.get("/details/:id",isLoggedIn, (req, res) => {
  const { id } = req.params;
  console.log(req.session.currentUser);
  user = req.session.currentUser;
  Interest.findById(id).then((art) =>
    res.render("art/details", { art, isAdmin: isAdmin(user), isOwner: isOwner(user._id, art) })
  );
});

router.get("/edit/:id", (req, res) => {
  const { id } = req.params;

  Interest.findById(id)
    .then((editArt) => {
      res.render("art/edit", { editArt });
    })
    .catch((err) => console.log(err));
});

router.post("/edit/:id", (req, res) => {
  const { id } = req.params;
  const { name, description, type, image, location, webSite, openingTime, closingTime, creationDate, owner } = req.body;

  Interest.findByIdAndUpdate(id, {
    name,
    description,
    type,
    location,
    price,
    webSite,
    openingTime,
    closingTime,
    image,

    caracteristics: { creationDate, owner },
  }).then(() => res.redirect("/arts/all-arts"));
});

router.get("/:id/delete", (req, res) => {
  const { id } = req.params;

  Interest.findByIdAndRemove(id).then(() => res.redirect("/arts/all-arts"));
});

module.exports = router;
