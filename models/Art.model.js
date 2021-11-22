const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artSchema = new Schema(
  {
    name: String,
    description: String,
    creationDate: Date,
    type: {
        type: String,
        enum: ["Monument", "Museum", "Theater"]
    },
 
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
      image: String,
  },

  {timestamps: true }
);

const Art = mongoose.model('Art', artSchema);

module.exports = Art;
