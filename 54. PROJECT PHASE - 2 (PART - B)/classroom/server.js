const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const cookieParser = require("cookie-parser");

app.use(cookieParser("secretCode"));

app.get("/getsignedcookie", (req, res) => {
  res.cookie("madeIn", "India", { signed: true });
  res.send("Signed cookie sent!");
});

app.get("/verify", (req, res) => {
  console.log(req.signedCookies);
  res.send("verified!");
});

app.get("/getcookies", (req, res) => {
  res.cookie("greet", "Namaste");
  res.cookie("madeIn", "India");
  res.send("Sent you some cookies!");
});

app.get("/greet", (req, res) => {
  let { name = "Anonymous" } = req.cookies;
  res.send(`Hi, ${name}`);
});

app.get("/", (req, res) => {
  console.dir(req.cookies);
  res.send("Hello, i am root.");
});

app.use("/users", users);
app.use("/posts", posts);

app.listen(3000, () => {
  console.log("app is listening to port 3000");
});
