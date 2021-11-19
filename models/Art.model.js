const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artSchema = new Schema(
  {
    name: String,
    descriptions: String,
    creationDate: Date,
    type: {
        type: String,
        enum: ["Monument", "Museum", "Theater"]
    },
    image: String,
    owner: String,
    capacity: String,
    location: {
        type: {
          type: String,
        },
        coords: [Number],
      },
      review: { type: Schema.Types.ObjectId, ref: "Review" },
      webSite: String,
      openingTime: String,
      closingTime: String,
  },

  {timestamps: true }
);

const Art = mongoose.model('Art', artechema);

module.exports = Art;
