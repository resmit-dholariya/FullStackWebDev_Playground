// DOM Events
// Events are signals that something has occurred. (user inputs I actions)

// DOM Events
// onclick (when an element is clicked)
// onmouseenter (when mouse enters an element)
let btn = document.querySelector("body button");
console.dir(btn);

btn.onclick = function () {
  console.log("Button was clicked!");
  alert("Button was clicked!");
};

let sayHello = () => {
  console.log("Hello!");
};

let btns = document.querySelectorAll("div button");
for (btn of btns) {
  btn.onclick = sayHello; //do not use () cause this calls this function without click
  btn.onmouseenter = function () {
    console.log("You entered a button.");
  };
}

let sayName = () => {
  console.log("Apna College");
};
// Event Listener
// addEventListener
// element.addEventListener( event, callback )
// perform multple function on click, hover etc
// we cannot give multiple values to onclick function and hence this got eliminated by eventlistener
let eventListnerButtons = document.querySelectorAll(".EventListenerBtn button");
for (btns of eventListnerButtons) {
  btns.addEventListener("click", sayHello);
  btns.addEventListener("click", sayName);
  btns.addEventListener(
    "dblclick",
    (dbl = () => {
      console.log("You double clicked me");
    })
  );
}

let eventBtn = document.querySelector(".genRanClr button");
eventBtn.addEventListener("click", function () {
  let h3 = document.querySelector("h3");
  let randomColor = getRandomColor();
  h3.innerText = randomColor;

  let div = document.querySelector(".div4");
  div.style.backgroundColor = randomColor;
  console.log("Color updated");
});

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `RGB(${red},${green},${blue})`;
  return color;
}

let p = document.querySelector("p");
p.addEventListener(
  "click",
  (clk = () => {
    console.log("Para was clicked.");
  })
);

let box = document.querySelector(".box");
box.addEventListener("mouseenter", function () {
  console.log("You enterd in the box region.");
});

// this in Event Listeners
// When 'this' is used in a callback of event handler of something, it refers to that something.
let thisEle = document.querySelectorAll(".this");
for (ele of thisEle) {
  ele.addEventListener("click", function (e) {
    //by default it is considered which has the value of which event has been triggered
    console.log(e);
    console.log(this);
    console.log(this.innerText);
    console.dir(this);
    this.style.backgroundColor = "black";
    this.style.color = "white";
  });
}

//keyboard events
let inp = document.querySelector("input");
inp.addEventListener("keydown", function (event) {
  console.log(event);
  console.log("key: ", event.key);
  console.log("code: ", event.code);
  console.log("key was pressed.");
});
inp.addEventListener("keyup", function () {
  console.log("key was raised.");
});

let charMove = document.querySelector("#charMove");
charMove.addEventListener("keydown", function (event) {
  console.log("code: ", event.code); //ArrowUp, ArrowDown, ArrowLeft, ArrowRight
  if (event.code == "ArrowUp") {
    console.log("character moves forward");
  } else if (event.code == "ArrowDown") {
    console.log("character moves back");
  } else if (event.code == "ArrowLeft") {
    console.log("character moves left");
  } else if (event.code == "ArrowRight") {
    console.log("character moves right");
  }
});

//form events
let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault(); //prevents redirecting to action page
  alert("Form submitted successfully..!");
});

//extracting from form
let form1 = document.querySelector("form");
form1.addEventListener("submit", function (event) {
  event.preventDefault();
  console.dir(form);
  let user = this.elements[0]; //form.elements[0]; //document.querySelector("#username");
  let pass = this.elements[1]; //form.elements[1]; //document.querySelector("#pass");
  console.log(user.value);
  console.log(pass.value);
  alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});

// More Events

// change event
// The change event occurs when the value of an element has been changed (only works on <input>, <textarea>
// and elements).

// input event
// The input event fires when the value of an <input> , <select> , or <textarea> element has been changed.
let form2 = document.querySelector("form");
form2.addEventListener("submit", function (event) {
  event.preventDefault();
});
let usr = document.querySelector("#username");
usr.addEventListener("change", function () {
  console.log("change event"); //detects change in initial value and final value
  console.log("final value: ", usr.value);
});
usr.addEventListener("input", function () {
  console.log("input event"); //detects even minor changes like char to char
  console.log("final value: ", usr.value);
});

let input = document.querySelector("#text");
let textPara = document.querySelector("#textPara");
input.addEventListener("input", function () {
  console.log(input.value);
  textPara.innerText = input.value;
});
