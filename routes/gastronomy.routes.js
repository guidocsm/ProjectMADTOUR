const router = require("express").Router();
const User = require("../models/User.model");
const Interest = require("../models/Interest.model");
const fileUploader = require("../config/cloudinary.config");
router.get("/all-gastronomy", (req, res) => {
  Interest.find({ $or: [{ type: "Restaurant" }, { type: "Bar" }] }).then((gasts) =>
    res.render("gastronomy/all-gastronomy", { gasts })
  );
});

router.get("/create", (req, res) => {
  Interest.find().then((gasts) => {
    res.render("gastronomy/new-gastronomy", { gasts });
  });
});

router.post("/create", fileUploader.single("image"), (req, res) => {
  const { name, type, description, price, food, location, webSite, openingTime, closingTime } = req.body;

  Interest.create({
    name,
    type,
    description,
    price,
    location,
    webSite,
    openingTime,
    closingTime,
    image: req.file.path,
    caracteristics: { food },
  })
    .then(() => {
      res.redirect("/gastronomy/all-gastronomy");
    })
    .catch((err) => console.log(err));
});

router.get("/details/:id", (req, res) => {
  const { id } = req.params;
  Interest.findById(id).then((gast) => res.render("gastronomy/details", gast));
});

router.get("/edit/:id", (req, res) => {
  const { id } = req.params;

  Interest.findById(id)
    .then((editGastronomy) => {
      res.render("gastronomy/edit", { editGastronomy });
    })
    .catch((err) => console.log(err));
});

router.post("/edit/:id", (req, res) => {
  const { id } = req.params;
  const { name, type, description, price, food, location, review, webSite, openingTime, closingTime } = req.body;

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

    caracteristics: { food },
  }).then(() => res.redirect("/gastronomy/all-gastronomy"));
});

router.get("/:id/delete", (req, res) => {
  const { id } = req.params;
  Interest.findByIdAndRemove(id).then(() => res.redirect("/gastronomy/all-gastronomy"));
});

module.exports = router;
