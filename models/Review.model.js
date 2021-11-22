const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    creator: { type: Schema.Types.ObjectId, ref: "User" },
    comment: String,
    rate: {
      type: Number,
    },
  },
  { timestamps: true }
);
const Review = model("Place", reviewSchema);
module.exports = Review;
