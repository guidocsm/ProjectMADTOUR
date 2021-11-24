const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const interestSchema = new Schema(
  {
    name: String,
    description: String,

    type: {
      type: String,
      enum: ["Monument", "Museum", "Theater", "Restaurant", "Bar", "Disco", "Pub", "Outdoor"],
    },
    location: {
      type: {
        type: String,
      },
      coords: [Number],
    },
    price: {
      type: String,
      enum: ["Economic", "Normal", "Expensive"],
    },
    webSite: String,
    openingTime: String,
    closingTime: String,
    image: String,

    caracteristics: {
      
      musicType: String,
      food: String,
    },
  },

  { timestamps: true }
);

const Interest = mongoose.model("Interest", interestSchema);

module.exports = Interest;
