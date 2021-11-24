const router = require("express").Router();
const User = require("../models/User.model");
const Interest = require("../models/Interest.model");
const Review = require("../models/Review.model");

const fileUploader = require("../config/cloudinary.config");

const { isAdmin, isOwner , formatDate} = require("../utils");

router.get("/all-ent", (req, res) => {
  Interest.find({ $or: [{ type: "Disco" }, { type: "Pub" }, { type: "Outdoor" }] }).then((ents) =>
    res.render("entertainment/all-ent", { ents })
  );
});

router.get("/create", (req, res) => {
  Interest.find().then((ents) => {
    res.render("entertainment/new-ent", { ents });
  });
});

router.post("/create", fileUploader.single("image"), (req, res) => {
  let image = req.file?.path || "https://www.kenyons.com/wp-content/uploads/2017/04/default-image-620x600.jpg";
  // res.json(req.body)
  const { name, type, musicType, price, lat,lng , webSite, openingTime, closingTime } = req.body;

   let location = {
     type: "Point",
     coords: [lat, lng],
   };

  Interest.create({ name, type, musicType, price, location, webSite, openingTime, closingTime, image })
    .then(() => {
      res.redirect("/ent/all-ent");
    })
    .catch((err) => console.log(err));
});

router.get("/details/:id", (req, res) => {
  const { id } = req.params;

  const user = req.session.currentUser;

   Interest.findById(id)
     .then((ent) => {
     Review.find({ ref: ent.id })
       .populate("creator")
       .populate("ref")
       .lean()
       .then((reviews) => {
         reviews.forEach((review) => {
           if (review.date) review.formatDate = formatDate(review);
         });
         console.log(reviews);
         res.render("entertainment/details", { ent, reviews, isAdmin: isAdmin(user), isOwner: isOwner(user._id, ent) });
       });
   });
});

router.get("/edit/:id", (req, res) => {
  const { id } = req.params;

  Interest.findById(id)
    .then((editEnt) => {
      res.render("entertainment/edit", { editEnt });
    })
    .catch((err) => console.log(err));
});

router.post("/edit/:id", fileUploader.single("uploadedImage"), (req, res) => {
  const { id } = req.params;
  const { name, type, musicType, price, lat, lng, webSite, openingTime, closingTime, image } = req.body;
  let imageChosen = req.file?.path || image;


    let location = {
      type: "Point",
      coords: [lat, lng],
    };

  Interest.findByIdAndUpdate(id, {
    name,
    type,
    location,
    price,
    webSite,
    openingTime,
    closingTime,
    image: imageChosen,

    caracteristics: { musicType },
  }).then(() => res.redirect("/ent/all-ent"));
});

router.get("/:id/delete", (req, res) => {
  const { id } = req.params;

  Interest.findByIdAndRemove(id).then(() => res.redirect("/ent/all-ent"));
});

module.exports = router;
