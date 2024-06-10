function hello() {
  console.log("hello");
}
hello();

function printName() {
  hello();
  console.log("Apna College");
  console.log("Resmit");
}
printName();

function print1to5() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}
print1to5();

let age = 18;
function isAdult() {
  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Not Adult");
  }
}
isAdult();

function printPoem() {
  console.log("Twinkle twinkle, little star");
  console.log("How i wonder what you are");
}
printPoem();

function rollDice() {
  let num = Math.floor(Math.random() * 6) + 1;
  console.log(num);
}
rollDice();

function printInfo(name, age) {
  console.log(`${name}'s age is ${age}.`);
}
printInfo("resmit", 20);
printInfo("aman", 23);
printInfo("shraddha"); //age will be undefined and cannot provide first arguement as null and other providing
printInfo();

function sum(num1, num2) {
  console.log(num1 + num2);
}
sum(1, 2);
sum(2, 3);
sum(23872, 2782);

function calcAvg(num1, num2, num3) {
  console.log((num1 + num2 + num3) / 3);
}
calcAvg(1, 2, 3);
calcAvg(98, 99, 100);
calcAvg(1, 9, 10);

function printTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} X ${i} = ${num * i}`);
  }
  for (let j = num; j <= num * 10; j += num) {
    console.log(j);
  }
}
printTable(10);
printTable(199);

function sum1(a, b) {
  console.log("hello");
  console.log("hello");
  return a + b;
  console.log("hello"); //this code wont execute beacuse of return statement
  console.log("hello");
}
console.log(sum1(sum1(1, 2), 3));

function isAdult1(age) {
  if (age >= 18) {
    return "adult";
  } else {
    return "Not adult";
  }
  console.log("bye Bye"); //wont execute
}
console.log(isAdult1(20));

// let sum = 54; //global scope
function sum1ton(num) {
  let sum = 0; //function scope
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(sum1ton(10));

let str = ["hi", "hello", "bye", "!"];
function concat(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i];
  }
  return result;
}
console.log(concat(str));

{
  let a = 10; //block scope
  const b = 20; //block scope
  var c = 30; //not applicable on var declared variables
}
// console.log(a);
// console.log(b);
console.log(c);

//lexical scope -- outer function variable can be used in inner function and opposite is not true
function outerFunc() {
  function innerFunc() {
    console.log(x); //hoisting: variable can be used before declaration
    console.log(y);
  }
  let x = 5;
  let y = 6;
  innerFunc();
  function innerFunc1() {
    console.log(x);
    console.log(y);
  }
  innerFunc1();
}
console.log(outerFunc());

//practice Question
let greet = "hello"; //global scope
function changeGreet() {
  let greet = "namaste"; //function scope
  console.log(greet);
  function innerGreet() {
    console.log(greet); //lexical scope
  }
  innerGreet();
}
console.log(greet);
console.log(changeGreet());

//function expressios
let sum2 = function (a, b) {
  return a + b;
};

let hello1 = function () {
  console.log("Hello");
};

hello1 = function () {
  console.log("Namaste");
};
hello1();
console.log(sum2(10, 19));

//  Higher Order Functions
// A function that does one or both :
// • takes one or multiple functions as arguments
// • returns a function

function multipleGreet(func, n) {
  //  Higher Order Function
  for (let i = 0; i < n; i++) {
    func();
  }
}

let greet1 = function () {
  console.log("Hello");
};
multipleGreet(greet1, 10); //do not use greet1() here while passing function as a arguement
multipleGreet(function () {
  //creating function to pass as arguement
  console.log("Namaste");
}, 10);

let odd = function (n) {
  console.log(!(n % 2 == 0));
};
let even = function (n) {
  console.log(n % 2 == 0);
};

function oddOrEvenFactory(request) {
  //  Higher Order Function
  if (request == "odd") {
    return function (n) {
      console.log(!(n % 2 == 0));
    };
  } else if (request == "even") {
    return function (n) {
      console.log(n % 2 == 0);
    };
    return even;
  } else {
    console.log("Wrong Request");
  }
}
let request = "odd";
let funcForOdd = oddOrEvenFactory(request);
console.log(funcForOdd(3));
console.log(funcForOdd(30));

let request1 = "even";
let funcForEven = oddOrEvenFactory(request1);
console.log(funcForEven(3));
console.log(funcForEven(30));

// Methods
// Actions that can be performed on an object.

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiplication: function (a, b) {
    return a * b;
  },
  division: function (a, b) {
    return a / b;
  },
};
console.log(calculator.add(3, 2));
console.log(calculator.subtract(2, 3));
console.log(calculator.multiplication(3, 2));
console.log(calculator.division(3, 2));

//method shorthand
const calculator1 = {
  pow(a, b) {
    return a ** b;
  },
  rem(a, b) {
    return a % b;
  },
};
console.log(calculator1.pow(2, 3));
console.log(calculator1.rem(2, 3));
