const router = require("express").Router();
const User = require("../models/User.model");
const Interest = require("../models/Interest.model");
const { isLoggedIn } = require("../middlewares");
const Review = require("../models/Review.model");

const { formatDate, isAdmin, isOwner } = require("../utils");



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
      .then(() => { 
      Interest.findById(ref)
      .then(interest => {
        if(interest.type == "Restaurant" || interest.type == "Bar" ){
           res.redirect(`/gastronomy/details/${ref }`);
        } else if(interest.type == "Museum" || interest.type == "Theater" || interest.type == "Monument" ){
          res.redirect(`/arts/details/${ref}`);
        } else if(interest.type == "Disco" || interest.type == "Pub" || interest.type == "Outdoor" ){
          res.redirect(`/ent/details/${ref}`);
        }
      })
    })
      .catch((err) => console.log(err));
})


router.get("/delete/:id/:interestId", (req, res) => {
  const { id, interestId } = req.params;

  Review.findByIdAndRemove(id).then(() =>{ 
    Interest.findById(interestId)
    .then(interest => {
      if(interest.type == "Restaurant" || interest.type == "Bar" ){
         res.redirect(`/gastronomy/details/${interestId}`);
      } else if(interest.type == "Museum" || interest.type == "Theater" || interest.type == "Monument" ){
        res.redirect(`/arts/details/${interestId}`);
      } else if(interest.type == "Disco" || interest.type == "Pub" || interest.type == "Outdoor" ){
        res.redirect(`/ent/details/${interestId}`);
      }
      
      

    })
    
    
});
});


module.exports = router;