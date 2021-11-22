// const router = require("express").Router();
// const User = require("../models/User.model");

// router.get("/all-ent", (req, res) => {
//   Ent.find()
//   .then((ents) => res.render("entertainment/all-ent", { ents }));
// });

// router.get("/create", (req, res) => {
//   Ent.find().then((ents) => {
//     res.render("entertainment/new-ent", { ents });
//   });
// });

// router.post("/create", (req, res) => {
//   // res.json(req.body)
//   const { name, type, music, musicType, price, review, location, webSite, openingTime, closingTime } = req.body;

//   Ent.create({ name, type, music, musicType, price, review, location, webSite, openingTime, closingTime })
//     .then(() => {
//       res.redirect("/ent/all-ent");
//     })
//     .catch((err) => console.log(err));
// });

// router.get("/details/:id", (req, res) => {
//   const { id } = req.params;

//   Ent.findById(id).then((ent) => res.render("entertainment/details", ent));
// });

// router.get("/edit/:id", (req, res) => {
//   const { id } = req.params;

//   Ent.findById(id)
//     .then((editEnt) => {
//       res.render("entertainment/edit", { editEnt });
//     })
//     .catch((err) => console.log(err));
// });

// router.post("/edit/:id", (req, res) => {
//   const { id } = req.params;
//   const { name, type, music, musicType, price, review, location, webSite, openingTime, closingTime } = req.body;

//   Ent.findByIdAndUpdate(id, { name, type, music, musicType, price, review, location, webSite, openingTime, closingTime }).then(
//     () => res.redirect("/ent/all-ent")
//   );
// });

// router.get("/:id/delete", (req, res) => {
//   const { id } = req.params;

//   Ent.findByIdAndRemove(id).then(() => res.redirect("/ent/all-ent"));
// });

// module.exports = router;
