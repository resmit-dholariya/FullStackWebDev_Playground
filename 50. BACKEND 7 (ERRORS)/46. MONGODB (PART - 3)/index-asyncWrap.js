const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
const ExpressError = require("./ExpressError");

main()
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => {
    console.log(err);
  });

let chat1 = new Chat({
  from: "neha",
  to: "priya",
  msg: "send me your exam sheets",
  created_at: new Date(),
});

// chat1.save().then((res) => {
//   console.log(res);
// });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

app.listen(8080, () => {
  console.log("server is listening on port 8080");
});

app.get("/", (req, res) => {
  res.send("You are on home page.");
});

//index route
app.get(
  "/chats",
  asyncWrap(async (req, res, next) => {
    try {
      let chats = await Chat.find();
      // console.log(chats);
      res.render("index.ejs", { chats });
    } catch (error) {
      next(error);
    }
  })
);

//new route
app.get("/chats/new", (req, res) => {
  // throw new ExpressError(401, "internal server error");
  res.render("new.ejs");
});

//create route
app.post(
  "/chats",
  asyncWrap(async (req, res, next) => {
    let { from, msg, to } = req.body;
    let newChat = new Chat({
      from: from,
      to: to,
      msg: msg,
      created_at: new Date(),
    });
    // newChat
    //   .save()
    //   .then((res) => {
    //     console.log("Chat was saved");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    await newChat.save();
    res.redirect("/chats");
  })
);

function asyncWrap(fn) {
  return function (req, res, next) {
    // fn(req, res, next).catch((error) =>
    //   next(new ExpressError(500, "some error occurred"))
    // );
    fn(req, res, next).catch(next);
  };
}

//new-show route
app.get(
  "/chats/:id",
  asyncWrap(async (req, res, next) => {
    // let { id } = req.params;
    // let chat = await Chat.findById(id);
    // if (!chat) {
    //   return next(new ExpressError(404, "chat not found"));
    // }
    // res.render("edit.ejs", { chat });

    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
  })
);

//edit route
app.get(
  "/chats/:id/edit",
  asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
  })
);

//update route
app.put(
  "/chats/:id",
  asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
      id,
      { msg: newMsg, created_at: new Date() },
      { runValidators: true, new: true }
    );
    // console.log(updatedChat);
    res.redirect("/chats");
  })
);

//destroy route
app.delete(
  "/chats/:id",
  asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
  })
);

// Function to handle validation errors
const handleValidationErr = (err) => {
  console.log("This was a validation error. Please follow rules");
  console.dir(err.message);
  return err;
};

//error handling for mongoose errors
app.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name === "ValidationError") {
    err = handleValidationErr(err);
  }
  next(err);
});

//error handling middleware
app.use((err, req, res, next) => {
  let { status = 500, message = "some error occured" } = err;
  res.status(status).send(message);
});
