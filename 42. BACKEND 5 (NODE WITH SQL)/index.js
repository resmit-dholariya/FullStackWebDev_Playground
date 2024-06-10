const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
//mysql -u root -p -- to run sql in terminal
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
const { v4: uuidv4 } = require("uuid");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "1313",
});

// let q = "insert into user(id, username, email, password) values (?,?,?,?)"; -- to insert single row
let q = "insert into user(id, username, email, password) values ?"; // to insert multiple rows at a time
let users = [
  ["123", "123_user", "123@gmail.com", "123"],
  ["1232", "123_user2", "1232@gmail.com", "1232"],
  ["12323", "123_user23", "12323@gmail.com", "12323"],
];

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// let data = [];
// for (let i = 1; i <= 100; i++) {
//   data.push(getRandomUser());
// }

// try {
//   connection.query(q, [data], (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// } catch (err) {
//   console.log(err);
// }
// connection.end();

//home route
app.get("/", (req, res) => {
  let q = `select count(*) from user;`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});

//show route
app.get("/user", (req, res) => {
  let q = `select * from user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let users = result;
      res.render("showusers.ejs", { users });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});

//edit route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `select * from user where id="${id}"`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      console.log(result);
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});

//update route
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formpass, username: newUsername } = req.body;
  let q = `select * from user where id="${id}"`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (formpass != user.PASSWORD) {
        res.send("wrong password");
      } else {
        let q2 = `update user set username="${newUsername}" where id="${id}"`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});

//delete route
app.get("/user/:id/delete", (req, res) => {
  let { id } = req.params;
  let q = `select * from user where id="${id}"`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      console.log(result);
      res.render("deleteForm.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});
app.delete("/user/:id", (req, res) => {
  let { id } = req.params;
  let { email, password } = req.body;
  let q = `select * from user where id="${id}"`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (email == user.EMAIL && password == user.PASSWORD) {
        let q2 = `delete from user where id="${id}"`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          console.log(result);
          res.redirect("/user");
        });
      } else {
        res.send("Invalis Email or Password");
      }
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});

//add route
app.get("/user/new", (req, res) => {
  res.render("newUser.ejs");
});

app.post("/user", (req, res) => {
  let id = uuidv4();
  let { username, email, password } = req.body;
  let newUser = [id, username, email, password];
  let q = "insert into user(id, username, email, password) values (?,?,?,?)";
  try {
    connection.query(q, newUser, (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  } catch (err) {
    console.log(err);
  }
  res.redirect("/user");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
