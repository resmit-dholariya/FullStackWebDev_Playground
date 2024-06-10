const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    filename: {
      type: String,
    },
    url: {
      type: String,
      default:
        "https://unsplash.com/photos/house-on-grass-field-near-trees-and-body-of-water-ZkNzOybkp7o",
      set: (V) =>
        V === ""
          ? "https://unsplash.com/photos/house-on-grass-field-near-trees-and-body-of-water-ZkNzOybkp7o"
          : V,
    },
  },
  price: {
    type: Number,
  },
  location: {
    type: String,
  },
  country: {
    type: String,
  },
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
