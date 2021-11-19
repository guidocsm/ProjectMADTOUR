const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    creator: String,
    type: String,
    comment: String,
    rate: {
      type: Number,
    },
  },
  { timestamps: true }
);
const Review = model("Place", reviewSchema);
module.exports = Review;