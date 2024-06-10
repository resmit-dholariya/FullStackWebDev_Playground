let input = document.createElement("input");
let btn = document.createElement("button");
btn.innerText = "Click me";

let body = document.querySelector("body");
body.append(input);
body.append(btn);

// input.placeholder = "username";
// btn.id = "btn";

btn.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

let btn1 = document.querySelector("#btn");
btn.classList.add("btnStyle");

let h1 = document.createElement("h1");
// h1.innerHTML = "<u>DOM Practice</u>";
h1.innerText = "DOM Practice";
body.append(h1);
h1.classList.add("h1");

let para = document.createElement("p");
para.innerHTML = "Apna College <b>Delta</b> Practice";
body.append(para);
