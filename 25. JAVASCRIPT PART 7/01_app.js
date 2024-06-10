// this Keyword
// "This" keyword refers to an object that is executing the current piece of code.

const student = {
  name: "resmit",
  age: 20,
  eng: 95,
  math: 94,
  phy: 99,
  getavg() {
    console.log(this); //print student object literal
    let avg = (this.eng + this.math + this.phy) / 3;
    console.log(`${this.name} got avg marks ${avg}.`);
  },
};
student.getavg();

function getAvg() {
  console.log(this); //display window object
}
getAvg();

// try & catch
// The try statement allows you to define a block of code to be tested for errors while it
// is being executed.
// The catch statement allows you to define a block of code to be executed, if an error
// occurs in the try block.
console.log("hello");
console.log("hello");
// let a = 5;

try {
  console.log(a);
} catch (error) {
  console.log("caught an error.. a is not defined.");
  console.log(error);
}
console.log("hello2");
console.log("hello2");

//Miscellaneoud Topics

//arrow functions -- compact way of defining function
const sum = (a, b) => {
  console.log(a + b);
};
sum(2, 3);

const cube = (a) => {
  //const cube = a =>{
  return a ** 3;
};
console.log(cube(3));

const pow = (a, b) => {
  console.log(a ** b);
};
pow(2, 3);

const hello = () => {
  console.log("Hello World");
};
hello();

//implicit return in arrow function -- if arrow function only returns something
const mul = (a, b) => a * b;
console.log(mul(2, 3));

const cube1 = (a) => a * a * a;
console.log(cube1(2));

// Set Timeout
// set Timeout( function, timeout )
console.log("Hi there!");
setTimeout(() => {
  console.log("Apna College");
}, 40); //in milliseconds
console.log("Welcome to");

let id = setInterval(() => {
  console.log("Resmit");
}, 200);
let id1 = setInterval(() => {
  console.log("Dholariya");
}, 200);

setTimeout(() => {
  clearInterval(id);
  clearInterval(id1);
}, 2000);

//this with arrow objects
//normal functions -- uses function scope -- calling object
//arrow functions -- uses lexical scope -- who called -- scope of parent
const student1 = {
  name: "resmit",
  marks: 99,
  prop: this, //global scope(object's scope & this return in which this block of code is present)
  getName: function () {
    console.log(this);
    console.log(this.name);
  },
  getMarks: () => {
    console.log(this); //parent's scope -- window
    console.log(this.marks);
  },
  getInfo1: function () {
    setTimeout(() => {
      console.log(this); //student
    }, 2000);
  },
  getInfo2: function () {
    setTimeout(function () {
      console.log(this); //window
    }, 2000);
  },
};
student1.getName();
student1.getMarks();
student1.getInfo1();
student1.getInfo2();

//practice question
let square = (a) => a * a;
console.log(square(25));

let id3 = setInterval(() => {
  console.log("Hello World");
}, 2000);

setTimeout(() => {
  clearInterval(id3);
  console.log("Clear interval ran");
}, 10000);
