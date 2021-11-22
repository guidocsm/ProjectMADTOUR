// const router = require("express").Router();
// const User = require("../models/User.model");
// const Gastronomy = require("../models/Gastronomy.model");

// router.get("/all-gastronomy", (req, res) => {
//   Gastronomy.find().then((gasts) => res.render("gastronomy/all-gastronomy", { gasts }));
// });

// router.get("/create", (req, res) => {
//   Gastronomy.find().then((gasts) => {
//     res.render("gastronomy/new-gastronomy", { gasts });
//   });
// });

// router.post("/create", (req, res) => {
//   const { name, type, description, price, food, location, review, webSite, openingTime, closingTime } = req.body;

//   Gastronomy.create({ name, type, description, price, food, location, review, webSite, openingTime, closingTime })
//     .then(() => {
//       res.redirect("/gastronomy/all-gastronomy");
//     })
//     .catch((err) => console.log(err));
// });

// router.get("/details/:id", (req, res) => {
//   const { id } = req.params;
//   Gastronomy.findById(id).then((gast) => res.render("gastronomy/details", gast));
// });

// router.get("/edit/:id", (req, res) => {
//   const { id } = req.params

//   Gastronomy.findById( id )
//   .then((editGastronomy) => {
//       res.render("gastronomy/edit", {editGastronomy})})
//   .catch((err) => console.log(err))
// })

// router.post("/edit/:id", (req, res) => {
//   const { id } = req.params
//   const { name, type, description, price, food, location, review, webSite, openingTime, closingTime } = req.body

//   Gastronomy.findByIdAndUpdate(id, { name, type, description, price, food, location, review, webSite, openingTime, closingTime })
//   .then(() => res.redirect("/gastronomy/all-gastronomy"))
// })

// router.get("/:id/delete", (req, res) => {
//   const { id } = req.params;
//   Gastronomy.findByIdAndRemove(id).then(() => res.redirect("/gastronomy/all-gastronomy"));
// });

// module.exports = router;
