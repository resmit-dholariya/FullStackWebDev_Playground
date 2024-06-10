const mongoose = require("mongoose");

main()
  .then((res) => {
    // console.log(res);
    console.log("connection successfull");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 30,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min: [1, "Price is too low to sell on amazon"],
  },
  discount: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction"],
  },
  genre: {
    type: [String],
  },
});

const Book = mongoose.model("Book", bookSchema);
// let book1 = new Book({
//   title: "Mathematics Class XII",
//   author: "R D Sharma",
//   price: 1200,
// });
// book1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let book2 = new Book({
//   title: "Mathematics Class X",
//   price: 1200,
// });
// book2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let book3 = new Book({
//   title: "Gone Girl",
//   price: "399",
// });
// book3
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let book4 = new Book({
//   title: "Marvel Comics",
//   price: 1200,
//   category: "fiction",
// });
// book4
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let book5 = new Book({
//   title: "Marvel Comics v2",
//   price: 1500,
//   category: "fiction",
//   genre: ["comics", "superheroes", "fiction"],
// });
// book5
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Book.findByIdAndUpdate(
//   "65eb5bc06cb85ff40d44d9e2",
//   { price: -600 },
//   { runValidators: true }
// )
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err.errors.price.properties.message);
//   });

const shoeSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
  },
  price: {
    type: Number,
  },
});

const Shoe = mongoose.model("Shoe", shoeSchema);
// let shoe1 = new Shoe({
//   brand: "adidas",
//   size: "10", //will be converted to number while inseting
//   price: 1999.99,
// });
// shoe1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
