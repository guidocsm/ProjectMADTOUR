const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entSchema = new Schema(
  {
    name: String,
    type: {
      type: String,
      enum: ["Disco", "Pub", "Outdoor"],
    },
    music: Boolean,
    musicType: String,
    price: {
      type: String,
      enum: ["Economic", "Normal", "Expensive"]
    },
    review: { type: Schema.Types.ObjectId, ref: "Review" },
    webSite: String,
    openingTime: String,
    closingTime: String
  },

  {timestamps: true }
);

const Ent = mongoose.model('Entertaiment', entSchema);

module.exports = Ent;
