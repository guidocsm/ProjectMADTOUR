const router = require("express").Router();
const User = require("../models/User.model");
const Interest = require("../models/Interest.model");
const Review = require("../models/Review.model");
const { isAdmin, isOwner , formatDate} = require("../utils");
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
  const { name, type, description, price, food, lat,lng, webSite, openingTime, closingTime } = req.body;
  let image = req.file?.path || "https://www.kenyons.com/wp-content/uploads/2017/04/default-image-620x600.jpg";

  let location = {
    type: "Point",
    coords: [lat, lng],
  };
  Interest.create({
    name,
    type,
    description,
    price,
    location,
    webSite,
    openingTime,
    closingTime,
    image,
    caracteristics: { food },
  })
    .then(() => {
      res.redirect("/gastronomy/all-gastronomy");
    })
    .catch((err) => console.log(err));
});

router.get("/details/:id", (req, res) => {
  const { id } = req.params;
  const user = req.session.currentUser
  
  Interest.findById(id)
    .then((gastronomy) => {
    Review.find({ ref: gastronomy.id })
      .populate("creator")
      .populate("ref")
      .lean()
      .then((reviews) => {
        reviews.forEach((review) => {
          if (review.date) review.formatDate = formatDate(review);
        });
        console.log(reviews);
        res.render("gastronomy/details", { gastronomy, reviews, isAdmin: isAdmin(user), isOwner: isOwner(user._id, gastronomy) });
      });
  });
});

router.get("/edit/:id", (req, res) => {
  const { id } = req.params;

  Interest.findById(id)
    .then((editGastronomy) => {
      res.render("gastronomy/edit", { editGastronomy });
    })
    .catch((err) => console.log(err));
});

router.post("/edit/:id", fileUploader.single("uploadedImage"), (req, res) => {
  const { id } = req.params;
  const { name, type, description, price, food, lat, lng, review, webSite, openingTime, closingTime , image} = req.body;
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
    image: imageChosen,

    caracteristics: { food },
  }).then(() => res.redirect("/gastronomy/all-gastronomy"));
});

router.get("/:id/delete", (req, res) => {
  const { id } = req.params;
  Interest.findByIdAndRemove(id).then(() => res.redirect("/gastronomy/all-gastronomy"));
});

module.exports = router;
