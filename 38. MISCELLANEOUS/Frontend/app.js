const stud1 = {
  name: "adam",
  age: 25,
  marks: 95,
  getMarks: function () {
    return this.marks;
  },
};
const stud2 = {
  name: "eve",
  age: 25,
  marks: 91,
  getMarks: function () {
    return this.marks;
  },
};
const stud3 = {
  name: "casey",
  age: 23,
  marks: 85,
  getMarks: function () {
    return this.marks;
  },
};

let arr = [1, 2, 3];
let arr2 = [1, 2, 3];
arr.sayHello = () => {
  console.log("hello!, i am arr");
};
arr2.sayHello = () => {
  console.log("hello!, i am arr");
};

arr.__proto__.push = (num) => {
  console.log("pushing number : ", num);
}; //changing definition of inbuilt proto

console.log(Array.prototype);
console.log(String.prototype);

//user defined functions for different object uses memory for both
console.log(arr.sayHello === arr2.sayHello);
console.log("abc".toUpperCase === "xyz".toUpperCase); //here they are using proto functions hence they are same

//factory functions

function personMaker(name, age) {
  const person = {
    name: name,
    age: age,
    talk() {
      console.log(`Hi, My name is ${this.name}`);
    },
  };
  return person;
}

let p1 = personMaker("danny", 30); //creates a copy
console.log(p1);
let p2 = personMaker("dancy", 29); //creates a copy
console.log(p2);
console.log(p1.talk === p2.talk);

//constructors - doesnt return anything & starts with capital
function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log(this);
}

Person.prototype.talk = function () {
  console.log(`Hi, my name is ${this.name}.`);
};

let p3 = new Person("smith", 29);
let p4 = new Person("marry", 29);
console.log(p3.talk == p4.talk); //by using constructors

//class
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hi, my name is ${this.name}.`);
  }
}

let p5 = new PersonClass("carry", 29);
let p6 = new PersonClass("maeve", 24);
console.log(p5, p6);
console.log(p5.talk == p6.talk);

//inheritance
class PersonProp {
  constructor(name, age) {
    console.log("Person class contructor called");
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hi, I am ${this.name}`);
  }
}

class Student extends PersonProp {
  constructor(name, age, marks) {
    console.log("Student class contructor called");
    super(name, age);
    this.marks = marks;
  }
}

class Teacher extends PersonProp {
  constructor(name, age, subject) {
    console.log("Teacher class contructor called");
    super(name, age);
    this.subject = subject;
  }
}

let st1 = new Student("mark", 12, 99);
let t1 = new Teacher("july", 35, "english");
console.log(st1, t1);
console.log(st1.talk === t1.talk);

//example -2
class Mammals {
  constructor(name) {
    this.name = name;
    this.type = "warm-blooded";
  }
  eat() {
    console.log("I can eat");
  }
}

class Dog extends Mammals {
  constructor(name) {
    super(name);
  }
  bark() {
    console.log("woof...");
  }
  eat() {
    console.log("Dog can eat"); //Method overriding
  }
}

class Cat extends Mammals {
  constructor(name) {
    super(name);
  }
  meow() {
    console.log("Meow..");
  }
}

let dog1 = new Dog("tuffie");
console.log(dog1);
console.log(dog1.name, dog1.type);
console.log(dog1.eat());
