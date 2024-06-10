const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOptions = {
  secret: "mysupersecretstring",
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next) => {
  res.locals.successMsg = req.flash("success");
  res.locals.errorMsg = req.flash("error");
  next();
});

app.get("/register", (req, res) => {
  let { name = "Anonymous" } = req.query;
  req.session.name = name;
  if (name === "Anonymous") {
    req.flash("error", "User not registered.");
  } else {
    req.flash("success", "User registered successfully.");
  }
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  res.locals.name = req.session.name;
  res.render("page.ejs");
});

app.get("/reqcount", (req, res) => {
  if (req.session.count) {
    req.session.count++;
  } else {
    req.session.count = 1;
  }
  res.send(`You sent request ${req.session.count} times. `);
});

app.get("/test", (req, res) => {
  res.send("Test Successfull!");
});

app.listen(3000, () => {
  console.log("app is listening to port 3000");
});
