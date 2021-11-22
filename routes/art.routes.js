const router = require("express").Router();
const User = require("../models/User.model");
const Interest = require("../models/Interest.model");

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
  const { name, description, creationDate, type, owner, capacity, location, review, webSite, openingTime, closingTime } =
    req.body;
  //console.log("Req body", req.body.image);

  Interest.create({
    name,
    description,
    creationDate,
    type,
    owner,
    capacity,
    location,
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

router.get("/details/:id", (req, res) => {
  const { id } = req.params;

  Interest.findById(id).then((art) => res.render("art/details", { art }));
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
  const { name, description, creationDate, type, image, owner, capacity, location, review, webSite, openingTime, closingTime } =
    req.body;

  Interest.findByIdAndUpdate(id, {
    name,
    description,
    creationDate,
    type,
    image,
    owner,
    capacity,
    location,
    review,
    webSite,
    openingTime,
    closingTime,
  }).then(() => res.redirect("/arts/all-arts"));
});

router.get("/:id/delete", (req, res) => {
  const { id } = req.params;

  Interest.findByIdAndRemove(id).then(() => res.redirect("/arts/all-arts"));
});

module.exports = router;
