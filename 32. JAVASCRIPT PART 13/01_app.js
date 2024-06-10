let url = "https://dog.ceo/api/breeds/image/random";

async function getImg() {
  try {
    let res = await axios.get(url);
    console.log(res.data.message); //remove parsing step
  } catch (err) {
    console.log("Encountered an error: ", err);
  }
}
getImg();

let btn = document.querySelector("#generate");
let img = document.querySelector("img");
btn.addEventListener("click", async () => {
  try {
    let res = await axios.get(url);
    let link = res.data.message;
    img.setAttribute("src", link);
  } catch (err) {
    console.log("Encountered an error: ", err);
  }
});

let url2 = "https://catfact.ninja/fact";
let p = document.querySelector("#fact_para");
let factBtn = document.querySelector("#fact_btn");
factBtn.addEventListener("click", async () => {
  try {
    let res = await axios.get(url2);
    let fact = res.data.fact;
    p.innerText = fact;
  } catch (err) {
    console.log("Encountered an error: ", err);
  }
});

// async function getFact() {
//   try {
//     let res = await axios.get(url2);
//     let fact = res.data.fact;
//     return fact;
//   } catch (err) {
//     console.log("Encountered an error: ", err);
//   }
// }

// factBtn.addEventListener("click", async () => {
//   let fact = await getFact();
//   p.innerText = fact;
// });

//Sending headers with API requests
let jokeUrl = "https://icanhazdadjoke.com/";

async function getJokes() {
  try {
    let config = { headers: { Accept: "application/json" } };
    let res = await axios.get(jokeUrl, config);
    console.log(res.data.joke);
  } catch (err) {
    console.log("Encountered an error: ", err);
  }
}
getJokes();

// Axios
// Updating Query Strings

let uniApi = "http://universities.hipolabs.com/search?name=";
let input = document.querySelector("#country");
let uniBtn = document.querySelector("#uni_btn");

uniBtn.addEventListener("click", async () => {
  let country = input.value;
  let res = await getUni(country);
  //   console.log(res);
  showUni(res);
});

function showUni(res) {
  let list = document.querySelector("#list");
  list.innerText = "";
  for (uni of res) {
    // console.log(uni.name);

    let li = document.createElement("li");
    li.innerText = uni.name;
    list.appendChild(li);
  }
}

async function getUni(country) {
  try {
    let res = await axios.get(`${uniApi}${country}`); //uniApi+country
    return res.data;
  } catch (err) {
    console.log("Encountered an error: ", err);
  }
}
