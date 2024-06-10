const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

// app.use((req, res) => {
//   console.log("request recieved");
//   //   res.send("This is the basic response");
//   //   res.send({
//   //     name: "apple",
//   //     color: "red",
//   //   });
//   let code = "<h1>Fruits</h1><ul><li>Apple</li><li>Mango</li></ul>";
//   res.send(code);
// });

app.get("/", (req, res) => {
  res.send("hello, i am root.");
});
app.get("/apple", (req, res) => {
  res.send("You contacted apple path");
});
app.get("/mango", (req, res) => {
  res.send("You contacted mango path");
});
// app.get("*", (req, res) => {
//   res.send("This path doesnt exist");
// });

app.post("/", (req, res) => {
  res.send("You sent a post request to root");
});

//path parametres
app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  let htmlstr = `<h1>welcome to the page of @${username}!</h1>`;
  res.send(htmlstr);
});

//query strings
app.get("/search", (req, res) => {
  //localhost:8080/search?q=apple&color=green
  let { q } = req.query;
  if (!q) {
    res.send("<h1>Nothing searched</h1>");
  }
  let htmlres = `<h1>search results for query: ${q}</h1>`;
  res.send(htmlres);
});
