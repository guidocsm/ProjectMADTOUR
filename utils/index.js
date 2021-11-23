const mongoose = require("mongoose");

module.exports = {
  isAdmin: (user) => user?.role === "ADMIN",
  isOwner: (user, interest) => interest.isOwner?.equals(user._id),
};
