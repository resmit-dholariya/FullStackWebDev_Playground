console.log("Hello world!");
console.log("apna college");
let a = 10;
let b = 5;
console.log("Final sum is", a + b);

let pencilPrice = 10;
let eraserPrice = 5;
let output1 = "The total cost is " + (pencilPrice + eraserPrice) + " rupees.";
let output = `The total cost is ${pencilPrice + eraserPrice} rupees.`;
console.log("The total cost is", pencilPrice + eraserPrice, "rupees.");
console.log(output);
console.log(output1);

let c = 10;
let d = 6;
console.log(c + d);
console.log(c - d);
console.log(c * d);
console.log(c / d);
console.log(c % d);
console.log(c ** d);

console.log(c++);
console.log(++c);
console.log(d--);
console.log(--d);

console.log((c += d));
console.log((c -= d));
console.log((c *= d));
console.log((c /= d));
console.log((c %= d));

let age = 23;
console.log(age > 18);
console.log(age >= 18);
console.log(age < 18);
console.log(age <= 18);
console.log(age == 18);
console.log(age != 18);

console.log("Before my if statement");
let ageInYear = 23;
if (ageInYear >= 18) {
  console.log("You can vote");
  console.log("You can drive");
  let num = 5;
  console.log(num ** 2);
} else {
  console.log("You cannot vote");
  console.log("You cannot drive");
  console.log(5);
}
if (age > 20 && age < 30) {
  console.log("You are in your 20s");
}
let firstName = "Resmit";
if (firstName == "Resmit") {
  console.log(`welcome ${firstName}`);
}
console.log("After my if statement");

//Traffic light system
let color = "Yellow ";
if (color === "Red") {
  console.log(`Stop: Light color is ${color}`);
}
if (color === "Yellow") {
  console.log(`Slow Down: Light color is ${color}`);
}
if (color === "Green") {
  console.log(`Go: Light color is ${color}`);
}

let myClass = 9;
if (myClass > 10) {
  console.log("You have to study very hard.");
} else if (myClass > 8) {
  console.log("I have to prepare my self fot further classes");
} else if (myClass < 8) {
  console.log("I am in a chilling class");
}

let size = "M";
if (size === "XL") {
  console.log(`Price is Rs. 250 on size ${size}`);
} else if (size === "L") {
  console.log(`Price is Rs. 200 on size ${size}`);
} else if (size === "M") {
  console.log(`Price is Rs. 100 on size ${size}`);
} else if (size === "S") {
  console.log(`Price is Rs. 50 on size ${size}`);
} else {
  console.log(`Invalid size ${size}`);
}

let marks = 81;
if (marks >= 33) {
  console.log("Pass");
  if (marks >= 80) {
    console.log("Grade: O");
  } else {
    console.log("Grade: A");
  }
} else {
  console.log("Better luck next time.");
}

let marks1 = 75;
if ((marks1 > 33 && marks <= 80) || !false) {
  console.log("Pass");
}

let str = "abcde";
if (str.length > 3 && str[0] === "a") {
  console.log("It's a good string.");
} else {
  console.log("It's not a good string.");
}

let num1 = 12;
if (num1 % 3 === 0 && (num1 + 1 === 15 || num1 - 1 === 11)) {
  console.log("Safe");
} else {
  console.log("Unsafe");
}

if (0 && -0 && 0n && "" && null && undefined && NaN) {
  console.log("True");
} else {
  console.log("False");
}

if (1 && -1 && 1n && " " && "121b") {
  console.log("True");
} else {
  console.log("False");
}

let signal = "yellow";
switch (signal) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Slow Down");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Light is broken.");
}

let day = 5;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid input");
}

alert("Proceeding further leads to DANGER");
console.log("This is a simple message.");
console.error("This is an error message.");
console.warn("This is an warning message.");

let firstName1 = prompt("Enter your first name:");
let lastName1 = prompt("Enter your last name:");
console.log(`Welcome ${firstName1 + " " + lastName1}!`);
alert(`Welcome ${firstName1 + " " + lastName1}!`)