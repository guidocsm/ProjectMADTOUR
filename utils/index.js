const mongoose = require("mongoose");

module.exports = {
  formatDate: (review) => {

      let month = "" + (review.date.getMonth() + 1);
      let day = "" + review.date.getDate();
      let year = review.date.getFullYear();
      console.log(month, year, day)
      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;
      return [year, month, day].join("-");

   
  },

  isAdmin: (user) => user?.role === "ADMIN",
  isOwner: (user, interest) => interest.isOwner?.equals(user._id),
};
