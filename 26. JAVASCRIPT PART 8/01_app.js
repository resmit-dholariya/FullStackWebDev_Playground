let arr = [1, 2, 3, 4, 5];

arr.forEach(function (el) {
  console.log(el);
});
arr.forEach((el) => {
  console.log(el);
});
let print = function (el) {
  console.log(el);
};
arr.forEach(print);

for (let ele of arr) {
  console.log(ele);
}

let arr1 = [
  {
    name: "shradhha",
    marks: 95,
  },
  {
    name: "aman",
    marks: 94,
  },
  {
    name: "rajat",
    marks: 100,
  },
];
arr1.forEach((student) => {
  console.log(student.marks);
});

arr1.forEach(function (student) {
  console.log(student.marks);
});

let num = [1, 2, 3, 4];
let double = num.map((el) => {
  return el * el;
});
console.log(double);

let arr2 = [
  {
    name: "shradhha",
    marks: 95,
  },
  {
    name: "aman",
    marks: 94,
  },
  {
    name: "rajat",
    marks: 100,
  },
];
let gpa = arr2.map((ele) => {
  return ele.marks / 10;
});
console.log(gpa);

let num1 = [1, 2, 3, 6, 7, 8, 1, 11, 3];
let odd = num1.filter((ele) => {
  return ele % 2 != 0;
});
console.log(odd);

let greaterThan5 = num1.filter((ele) => {
  return ele > 5;
});
console.log(greaterThan5);

// Every
// Returns true if every element of array gives true for some function. Else returns false.

let num2 = [1, 3, 5, 7, 2, 9];
console.log(
  num2.every((ele) => {
    return ele % 2 != 0;
  })
);

// Some
// Returns true if some elements of array give true for some function. Else returns false.
let num3 = [1, 3, 5, 7];
console.log(
  num3.some((ele) => {
    return ele % 2 == 0;
  })
);

// Reduce
// Reduces the array to a single value
// arr.reduce( reducer function with 2 variables for (accumulator, element) );

let arr3 = [1, 2, 3, 4];
console.log(
  arr3.reduce((result, element) => {
    // console.log(result + element);
    return (result += element);
  })
);

let num4 = [1, 22, 33, 12, 444, 99, 45, 66, 89];
console.log(
  num4.reduce((max, element) => {
    if (max < element) {
      return element;
    } else {
      return max;
    }
  })
);

//practice question
let arr4 = [10, 20, 20, 30, 40];
console.log(
  arr4.every((ele) => {
    return ele % 10 == 0;
  })
);

let arr5 = [12, 33, 5, 32, 77];
console.log(
  arr5.reduce((min, ele) => {
    if (ele < min) {
      return ele;
    } else {
      return min;
    }
  })
);

function getMin(arr) {
  let min = arr.reduce((min, ele) => {
    if (ele < min) {
      return ele;
    } else {
      return min;
    }
  });
  return min;
}
console.log(getMin([12, 22, 43, 33]));

// Default Parameters
// Giving a default value to the arguments

function sum(a, b = 2) {
  //first arguement cannot be default setted and others to be used from arguement provided
  return a + b;
}
console.log(sum(1, 33));
console.log(sum(23));

// Spread
// Expands an iterable into multiple values
let arr6 = [1, 2, 3, 5, 66, 0, -1, -2, 9];
console.log(...arr6); //spreading

console.log(Math.min(1, 2, 3, -1, -2, -3, 5));
console.log(Math.max(...arr6)); //providing input by spreading

console.log("ApnaCollege");
console.log(..."ApnaCollege");

let arr7 = [1, 2, 3, 4, 5];
let newArr7 = [...arr7];
console.log(arr7);
console.log(newArr7);
newArr7.push(100);
console.log(arr7);
console.log(newArr7);

let chars = [..."hello"];
console.log(chars);

let odd1 = [1, 3, 5, 7, 9];
let even1 = [2, 4, 6, 8, 10];
let odd1Even1 = [...odd1, ...even1];
console.log(odd1Even1);
let even1Odd1 = [...even1, ...odd1];
console.log(even1Odd1);

const data = [
  {
    email: "ironman@gmail.com",
    password: "abcd",
  },
  {
    email: "ironman2@gmail.com",
    password: "abcd",
  },
  {
    email: "ironman3@gmail.com",
    password: "abcd",
  },
];

const dataCopy = { ...data, id: 123, country: "India" };
console.log(dataCopy);

let arr9 = [1, 2, 3, 4, 5];
let obj = { ...arr9 }; //object -- key:value --> index:value
console.log(obj);

let obj2 = { ..."hello" };
console.log(obj2);

// Rest
// Allows a function to take an indefinite number of arguments and bundle them in an array

function sum(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log("You gave us:", args[i]);
  }
}
sum(1, 2, 3, 4);

function min(a, b, c, d) {
  console.log(arguments);
  console.log(arguments.length);
  //   arguments.push(10); --it's a collection not an array
}
min(1, 2, 3, 4);

function sum1(...args) {
  return args.reduce((sum, ele) => sum + ele);
}
console.log(sum1(1, 2, 3, 4));

function min1(...args) {
  return args.reduce((min, ele) => {
    if (min < ele) {
      return min;
    } else {
      return ele;
    }
  });
}
console.log(min1(1, 2, 3, 4));

function max1(msg, ...args) {
  //other arguements are always written first than args
  console.log(msg);
  return args.reduce((max, ele) => {
    if (max > ele) {
      return max;
    } else {
      return ele;
    }
  });
}
console.log(max1(10, 1, 21, 3, 4));
console.log(max1("MSG", 11, 2, 3, 4));

// Destructuring
// Storing values of array into multiple variables

let names = ["tony", "bruce", "peter", "steve", "thor", "thanos"];
// let winner = names[0];
// let runnerUp = names[1];
// let SecondRunnerUp = names[2];
let [winner, runnerUp, SecondRunnerUp, ...others] = names;
console.log(winner, runnerUp, SecondRunnerUp);
console.log(others);

let student = {
  name: "karan",
  age: 14,
  class: 9,
  subjects: ["hindi", "english", "math", "science"],
  username: "karan_123",
  password: "abcd123",
  city: "Delhi",
};

// let username = student.username;
// let password = student.password;
let { name, age } = student; //matching key should be same
console.log(name, age);

let { username: user, password: pass, city = "Mumbai" } = student; //matching key: Desired key //if city is not there then default, if exists then perticular info
// console.log(username, password); -- throws error
console.log(user, pass, city);
