// DOM (Document Object Model)
// The DOM represents a document with a logical tree.
// It allows us to manipulatelchange webpage content(HTML elements).

// Selecting Elements
// document.getEIementById("id_name");
// Returns the Element as an object or null (if not found)
console.dir(document.getElementById("description"));

// Selecting Elements
// document.getEIementByClassName("class_name");
// Returns the Elements as an HTML Collection or empty collection (if not found)
let smallImages = document.getElementsByClassName("oldImg");
for (let i = 0; i < smallImages.length; i++) {
  console.dir(smallImages[i].src);
}
for (let i = 0; i < smallImages.length; i++) {
  smallImages[i].src = "Assets/Spider-Man.png";
  console.log(`value of image no. ${i} is changed.`);
}
for (let i = 0; i < smallImages.length; i++) {
  console.dir(smallImages[i].src);
}

// Selecting Elements
// document.getElementByTagName("tagName")
// Returns the Elements as an HTML Collection or empty collection (if not found)
console.dir(document.getElementsByTagName("p"));

// Query Selectors
// Allows us to use any CSS selector
//only returns the first match case in the doc neglecting others
console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#description"));
// let firstimg = document.querySelector(".oldImg");
// console.dir(firstimg);
// firstimg.src = "Assets/Man.png";
console.dir(document.querySelector(".oldImg"));
console.dir(document.querySelector("div ul li a"));
console.dir(document.querySelectorAll("div ul li a"));
console.dir(document.querySelectorAll("p"));

// Using Properties & Methods

// innerText
// Shows the visible text contained in a node

// textContent
// Shows all the full text

// innerHTML
// Shows the full markup

let para = document.querySelector("p");
console.dir(para);
console.log(para.innerText); //text displayed on screen
console.log(para.innerHTML); //text from HTML markup
console.log(para.textContent); //actual from HTML file
para.innerText = "Hi! I am peter parker!";
console.log(para.innerText); //text displayed on screen
para.innerHTML = "Hi! I am <b>peter parker!</b>"; //wont possible in inner text property
console.log(para.innerHTML); //text displayed on screen

let heading = document.querySelector("h1");
console.log(heading.innerText);
// heading.innerHTML = "<u>Spider Man</u>";
heading.innerHTML = `<u>${heading.innerText}</u>`;
console.log(heading.innerHTML);

// Manipulating Attributes
// obj.getAttribute( attr )
// obj.setAttribute( attr, val )
let img = document.querySelector("img");
console.log(img);
console.log(img.getAttribute("id"));
img.setAttribute("id", "spidermanImg"); //styling will be changes if applied
img.setAttribute("src", "Assets/Amazing_Fantasy.jpg");
console.log(img.getAttribute("class"));
img.setAttribute("class", "images");
console.log(img.getAttribute("class"));

// Manipulating Style
// style Property
// // obj.style
let heading1 = document.querySelector("h1");
console.log(heading1.style);
heading1.style.color = "white";
heading1.style.backgroundColor = "black"; //background-color is changed to camelcase here
console.log(heading1.style);

let links = document.querySelectorAll(".pubInfo a");
for (link of links) {
  link.style.color = "red"; //inline css
}

// Manipulating Style
// using classList
// obj.classList
// classList.add( ) to add new classes
// classList.remove( ) to remove classes
// classList.contains( ) to check if class exists
// classList.toggle( ) to toggle between add & remove
let heading2 = document.querySelector("h2");
console.log(heading2.classList);
heading2.classList.add("green");
heading2.classList.add("underline");
console.log(heading2.classList);
heading2.classList.remove("green");
console.log(heading2.classList);
console.log(heading2.classList.contains("green"));
heading2.classList.toggle("green"); //if not then applied
heading2.classList.toggle("underline"); //if applied then removed
console.log(heading2.classList);

let box = document.querySelector(".pubInfo");
box.classList.toggle("yellowBg");
console.log(box.classList);

// Navigation
// parentElement
// children
// previousElementSibling / nextElementSibling
let h4 = document.querySelector("h4");
console.log(h4.parentElement);
console.log(h4.childElementCount);

let box1 = document.querySelector(".pubInfo");
console.log(box1.parentElement);
console.log(box1.childElementCount);
console.log(box1.children);

let ul = document.querySelector("ul");
console.log(ul.parentElement);
console.log(ul.childElementCount);
console.log(ul.children);
console.log(ul.children[0]);
console.log(ul.children[1]);
console.log(ul.children[2]);
console.log(ul.children[2].previousElementSibling);
console.log(ul.children[1].previousElementSibling);
console.log(ul.children[1].nextElementSibling);

let img1 = document.querySelector("#spidermanImg");
console.log(img1);
console.log(img1.previousElementSibling.style);
img1.previousElementSibling.style.color = "red";

// Adding Elements
// document.createElement('p')
// • appendChild( element )
// append( element )
// prepend( element )
// insertAdjacent( where, element)
let newPara = document.createElement("p");
newPara.innerText = "Hi, I am a new p.";

let body = document.querySelector("body");
body.appendChild(newPara); //add in a element
newPara.append("This is a new text"); //change the element self by append

let box2 = document.querySelector(".pubInfo");
// console.log(box2);
box2.appendChild(newPara);

let btn = document.createElement("button");
btn.innerText = "click me!";
// box2.appendChild(btn);
newPara.append(" ", btn, " Do not click this Button");

let prependEle = document.createElement("p");
prependEle = "I am prepended element.";
box2.prepend(prependEle);

let btn2 = document.createElement("button");
btn2.innerHTML = "New Button!!";
let para1 = document.querySelector("#description");

// para1.insertAdjacentElement("beforebegin", btn2);
// para1.insertAdjacentElement("afterbegin", btn2);
// para1.insertAdjacentElement("beforeend", btn2);
para1.insertAdjacentElement("afterend", btn2);

// Removing Elements
// • removeChild( element )
// • remove( element )
let parent = document.querySelector(".creationDev");
console.log(parent);
parent.removeChild(btn2);
// btn2.remove();

// para.remove();
// body.remove();

//practice question
let para2 = document.createElement("p");
para2.innerText = "Hey I'm Red!";
document.querySelector("body").appendChild(para2);
// para2.style.color = "red";
para2.classList.add("red");

let h3 = document.createElement("h3");
h3.innerText = "I'm blue h3!";
document.querySelector("body").append(h3);
// h3.style.color = "blue";
h3.classList.add("blue");

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para3 = document.createElement("p");

h1.innerText = "I'm in a div!";
para3.innerText = "ME TOO!";

div.appendChild(h1);
div.appendChild(para3);
document.querySelector("body").append(div);
div.classList.add("div");
