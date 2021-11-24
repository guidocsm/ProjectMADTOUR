const router = require("express").Router();
const User = require("../models/User.model");
const Interest = require("../models/Interest.model");
const { isLoggedIn } = require("../middlewares");
const Review = require("../models/Review.model");

const { isAdmin, isOwner } = require("../utils");



// router.get("/create/:id", (req, res) => {
//   const interest = Interest.findById(req.params)
//   const user = req.session.currentUser
//   console.log(user)

//   Review.find()
//         .then((review) => {
//            res.render("review/new-review", { interest, user });
//     });
// });

router.post("/create/:id", (req, res) => {
    
    const ref = req.params.id
    const creator = req.session.currentUser._id
    const {comment} = req.body

    Review.create({ creator, ref, comment }) 
           .then((review) => { res.redirect(`/arts/details/${ref}`)})
           .catch((err) => console.log(err));
})


router.get("/delete/:id/:artId", (req, res) => {
  const { id, artId } = req.params;

  Review.findByIdAndRemove(id).then(() => res.redirect(`/arts/details/${artId}`));
});




















module.exports = router;