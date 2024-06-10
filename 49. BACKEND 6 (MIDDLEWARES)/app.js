const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

// app.use((req, res) => {
//   let { query } = req.query;
//   console.log(query);
//   console.log("Hello, i am a middleware");
//   res.send("middleware finished");
// });

app.use((req, res, next) => {
  console.log("Hello, i am first middleware.");
  return next(); //execution stops here
});
app.use((req, res, next) => {
  console.log("Hello, i am second middleware.");
  next(); //execution countinues -- but try to avoid this technique to write code after next()
  console.log("This is after next().");
});

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveAccess") {
    return next();
  } else {
    res.send("ACCESS DENIED!");
    // throw new Error("ACCESS DENIED!"); //throwing custom error
  }
};

app.get("/api", checkToken, (req, res) => {
  //passing middleware as function
  res.send("data");
});

//logger - morgan
app.use("/", (req, res, next) => {
  req.time = new Date(Date.now()).toString();
  console.log(req.method, req.hostname, req.path, req.time);
  return next();
});

app.use("/something", (req, res, next) => {
  console.log("i am only for something route.");
  return next();
});

app.get("/", (req, res) => {
  res.send("Hi, i am root");
});

app.get("/random", (req, res) => {
  res.send("This is a random page");
});

//404
app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(8080, () => {
  console.log("Listing to port 8080");
});
