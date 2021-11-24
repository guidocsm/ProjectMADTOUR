const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    creator: { type: Schema.Types.ObjectId, ref: "User" },
    ref: { type: Schema.Types.ObjectId, ref: "Interest" },
    comment: String,
    date: { type: Date, default: Date.now() },
  },
  { timestamps: true }
);
const Review = model("Review", reviewSchema);
module.exports = Review;
