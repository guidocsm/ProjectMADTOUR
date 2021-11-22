const { Schema, model } = require("mongoose");

const gastronomySchema = new Schema(
  {
    name: String,
    type: {
      type: String,
      enum: ["Restaurant", "Bar"],
    },
    description: String,
    price: {
      type: String,
      enum: ["Economic", "Normal", "Expensive"],
    },
    food: String,
    location: {
      type: {
        type: String,
      },
      coordinates: [Number],
    },
    review: { type: Schema.Types.ObjectId, ref: "Review" },
    webSite: String,
    openingTime: String,
    closingTime: String,
    image: String,
  },
  { timestamps: true }
);
const Gastronomy = model("Gastronomy", gastronomySchema);
module.exports = Gastronomy;