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
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);
// const Employee = mongoose.model("Employee", userSchema);

// const user1 = new User({
//   name: "adam",
//   email: "adam@yahoo.in",
//   age: 58,
// });
// user1.save();

// const user2 = new User({
//   name: "eve",
//   email: "eve@yahoo.in",
//   age: 38,
// });
// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.insertMany([
//   { name: "tony", email: "tony@gmail.com", age: 50 },
//   { name: "peter", email: "peter@gmail.com", age: 36 },
//   { name: "bruce", email: "bruce@gmail.com", age: 23 },
// ]).then((res) => {
//   console.log(res);
// });

// User.find({ age: { $gt: 45 } })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findOne({ age: { $gt: 50 } })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findById("65e312b04d27b9db09f16935") //commonly used
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.updateOne({ name: "tony" }, { age: 45 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.updateMany({ age: { $gt: 40 } }, { age: 55 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findOneAndUpdate({ name: "bruce" }, { age: 42 }, { new: true })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findByIdAndUpdate("65e312b04d27b9db09f16935", { age: 65 }, { new: true })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.deleteOne({ name: "bruce" }).then((res) => {
//   console.log(res);
// });

// User.deleteMany({ age: { $gt: 50 } })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findByIdAndDelete("65eb546796224cecd5143b3f") //no need to write new:true here by default it returns what is deleted
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findOneAndDelete({ email: "renish@gmail.com" }) //no need to write new:true here by default it returns what is deleted
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
