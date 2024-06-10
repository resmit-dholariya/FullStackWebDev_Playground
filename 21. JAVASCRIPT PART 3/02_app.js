// let student1 = "resmit";
// let student2 = "shraddha";
// let student3 = "aman";

//typeof arr in JS is object

let students = ["resmit", "shraddha", "aman"];
let nums = [21, 4, 6, 8];
console.log(nums[2]);
console.log(nums.length);

let info = ["resmit", 20, 93.2]; //mixed array
let emptyArr = [];
console.log([info[0][0]]); //first letter of first element in info
console.log(info[0].length);

let fruits = ["Mango", "Apple", "Litchi"];
fruits[0] = "Banana";
fruits[10] = "Papaya";
console.log(fruits);

// Array Methods
// Push : add to end
// Pop : delete from end & returns it
// Unshift : add to start
// Shift : delete from start & returns it

let cars = ["audi", "bmw", "xuv", "toyota"];
cars.push("maruti");
console.log(cars);
cars.push("ferrari");
console.log(cars);
console.log(cars.pop());
console.log(cars.pop());
console.log(cars);
cars.unshift("toyota");
console.log(cars);
cars.unshift("ferrari");
console.log(cars);
console.log(cars.shift());
console.log(cars.shift());

//instagram blocking technique
let followers = ["a", "b", "c"];
let blocked = followers.shift();
console.log(followers);
console.log(blocked);

//practice question
let months = ["january", "july", "march", "august"];
months.shift();
months.shift();
months.unshift("june");
months.unshift("july");
console.log(months);

//indexOf : returns index of something
//includes : search for a value
let primary = ["red", "yellow", "blue"];
console.log(primary.indexOf("yellow"));
console.log(primary.indexOf("green"));
console.log(primary.indexOf("Yellow"));

console.log(primary.includes("red"));
console.log(primary.includes("green"));

// concat: merge 2 arrays
// reverse : reverse an array

let primary1 = ["red", "yellow", "blue"];
let secondary = ["orange", "green", "violet"];

console.log(primary1.concat(secondary)); //new array formed
console.log(secondary.concat(primary1));
primary1.reverse();
console.log(primary1); //origial array changes

// slice : copies a portion of an array
let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
console.log(colors.slice());
console.log(colors.slice(2));
console.log(colors.slice(2, 3));
console.log(colors.slice(-2));
console.log(colors.slice(10)); //empty array

// splice: removes / replaces / add elements in place
// splice(start, deleteCount, item0...itemN)

let colors1 = ["red", "yellow", "blue", "orange", "pink", "white"];
//changes done to original array
colors1.splice(4); //keeps the 4 elements from front & removes remaining
console.log(colors1);

colors1.splice(0, 1); //move to pos 0 and delete 1 element
console.log(colors1);

colors1.push("magenta");
colors1.push("maroon");
console.log(colors1);

colors1.splice(1, 2);
console.log(colors1);

colors1.splice(0, 0, "magenta", "maroon", "black"); //move to pos 0, delete 0, add elements from pos 0 and shift others
console.log(colors1);

colors1.splice(1, 0, "purple");
console.log(colors1);

colors1.splice(1, 1, "indigo"); //move to pos 1, delete 1 element, insert at 1 position -- it works as a replace function
console.log(colors1);

// sort : sorts an array
let days = ["monday", "tuesday", "sunday", "friday"];
days.sort();
console.log(days);

let squares = [4, 16, 25, 1, 36]; //converts to string then sort hence sorting occurs on the basis of first digit
console.log(squares.sort());

//practice questions
let arr = ["january", "july", "march", "august"];
// arr.splice(0, 1);
// arr.splice(1, 0, "june");
arr.splice(0, 2, "july", "june");
console.log(arr);

let techStack = [
  "c",
  "c++",
  "html",
  "javascript",
  "python",
  "java",
  "c#",
  "sql",
];
console.log(techStack.reverse().indexOf("javascript"));

//array references
console.log("name" == "name"); //strings comparison
console.log("name" === "name");
console.log([1] == [1]);
// console.log([1] === [1]); -- always returns false as JS compares objects not values

let arr1 = ["a", "b"];
let arrCopy = arr1; //both arr points to same address hence changes made in any reflects in both

console.log(arrCopy);
arrCopy.push("c", "d");
console.log(arrCopy);
console.log(arr1);

arr1.pop();
console.log(arrCopy);
console.log(arr1);

console.log(arr1 == arrCopy);
console.log(arr1 === arrCopy);

let arr2 = ["a", "b", "c"];
let arr3 = ["a", "b", "c"]; //here both arrays contains same elements but they points to different addresses
arr2.push("d");
console.log(arr2);
console.log(arr3); //changes does not made in both

console.log(arr2 == arr3);
console.log(arr2 === arr3);

//constant arrays4
const arr4 = [2, 3, 5, 6]; //changes into this array is possible but changing whole array is not possible.
arr4.push(9);
console.log(arr4);
arr4.pop();
arr4.pop();
// arr4.splice(0, 3); //also can be made empty but fully assigning new arr is not possible
console.log(arr4);
//arr4 = [1, 2, 3, 4]; //cannot be done

//nested arrays
let arr5 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(arr5);
console.log(arr5[2][0]); //row-column
console.log(arr5.length);
console.log(arr5[1].length);

let arr6 = [
  [1, 2, 3],
  [3, 4],
  [5, 6, 7, 8],
];
console.log(arr6);
console.log(arr6[2][3]);
console.log(arr6.length);
console.log(arr6[2].length);
console.log(arr6[1].length);

let arr7 = [
  [
    [1, 2],
    [2, 3],
    [4, 5],
  ],
  [
    [3, 4],
    [7, 8],
  ],
  [
    [5, 6],
    [9, 1],
  ],
];
console.log(arr7);
console.log(arr7[2][0]); //x-y
console.log(arr7[2][0][1]); //x-y-z
console.log(arr7.length);
console.log(arr7[1].length);

//practice question
let ticTacToe = [
  ["X", " ", "O"],
  [" ", "X", " "],
  ["O", " ", "X"],
]; //we can also place null at " "
console.log(ticTacToe);

//bonus question
ticTacToe[0][1] = "O";
console.log(ticTacToe);
