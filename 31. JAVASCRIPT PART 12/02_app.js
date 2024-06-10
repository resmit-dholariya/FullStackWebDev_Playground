// API
// Application Programming Interface

// API
// Some Random APIs
// https://catfact.ninja/fact (sends random cat facts)
// https://www.boredapi.com/api/activity (sends an activity to do when bored)
// https://dog.ceo/api/breeds/image/random (sends cute dog pictures)

// JSON
// JavaScript Object Notation www.json.org

// accessing data
// • JSON.parse( data ) Method
// To parse a string data into a JS object
// • JSON.stringify( json ) Method
// To parse a JS object data into JSON

let jsonRes =
  '{"fact":"Ancient Egyptian family members shaved their eyebrows in mourning when the family cat died.","length":91}';

console.log(jsonRes);
let validRes = JSON.parse(jsonRes);
console.log(validRes);
console.log(validRes.fact);

let student = {
  name: "Resmit",
  marks: 91,
};
console.log(JSON.stringify(student));

// Testing API requests
// Tools
// • Hoppscoth
// • Postman

// Ajax
// Asynchronous JavaScript and XML

// Http Verbs
// Examples :
// • GET
// • POST
// • DELETE

// Status Codes
// Examples :
// • 200 - 0K
// • 404 - Not Found
// • 400 - Bad Request
// 500 - Internal Server Error

// Add Information in URLs
// Query Strings
// https://www.google.com/search?q=harry+porter
// ?name=shradha&marks=95

// https://api.potterdb.com
// https://api.potterdb.com/v1/movies
// https://api.potterdb.com/v1/movies:id -- used below
// https://api.potterdb.com/v1/movies/e80d5a37-620e-4be2-92b9-fb1f5262494f

// Our First Request
// using Fetch

let url = "https://catfact.ninja/fact";
console.log(fetch(url));
fetch(url)
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log("Data1: ", data.fact);
    return fetch(url);
  })
  .then((res) => {
    return res.json();
  })
  .then((data2) => {
    console.log("Data2: ", data2.fact);
  })
  .catch((err) => {
    console.log("ERROR: ", err);
  });

console.log(
  "Response will be later on displayed on console first i will be exexuted although i am written below"
);

let awaitUrl = "https://dog.ceo/api/breeds/image/random";

async function getFacts() {
  try {
    let res = await fetch(awaitUrl);
    let data = await res.json();
      console.log(data.message);
      
    let res2 = await fetch(awaitUrl);
    let data2 = await res2.json();
    console.log(data2.message);
  } catch (err) {
    console.log("Caught an error: ", err);
  }
}
getFacts();
