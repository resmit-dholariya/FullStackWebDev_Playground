let num = 23;
if (num % 10 == 0) {
  console.log("Good");
} else {
  console.log("Bad");
}

let name = prompt("Enter your name");
let age = prompt("Enter your age");
console.log(`${name} is ${age} years old.`);

let quarter = 2;
switch (quarter) {
  case 1:
    console.log("January, February, March");
    break;
  case 2:
    console.log("April, May, June");
    break;
  case 3:
    console.log("July, August, September");
    break;
  case 4:
    console.log("October, November, December");
    break;
  default:
    console.log("Wrong quarter number provided.");
}

let str = "apples";
if ((str[0] == "a" || str[0] == "A") && str.length > 5) {
  console.log("Golden String");
} else {
  console.log("Not a Golden String");
}

let a = 2;
let b = 3;
let c = 4;
if (a > b) {
  if (a > c) {
    console.log(`${a} is largest among ${a}, ${b}, ${c}`);
  } else {
    console.log(`${c} is largest among ${a}, ${b}, ${c}`);
  }
} else {
  if (b > c) {
    console.log(`${b} is largest among ${a}, ${b}, ${c}`);
  } else {
    console.log(`${c} is largest among ${a}, ${b}, ${c}`);
  }
}

let num1 = 32;
let num2 = 47852;
if (num1 % 10 == num2 % 10) {
  console.log("Numbers have the same last digit which is", num1 % 10);
} else {
  console.log("Numbers don't have the same last digit");
}
