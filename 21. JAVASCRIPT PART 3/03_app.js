let arr = [7, 9, 0, -2];
console.log(arr.slice(0, 3));
arr.splice(3);
console.log(arr);

let arr1 = [7, 9, 0, -2];
console.log(arr1.slice(1, 4));
console.log(arr1.slice(-3));
console.log(arr1.slice(arr1.length - 3));
arr1.splice(0, 1);
console.log(arr1);

let str1 = prompt("Enter a string for Qs3");
if (str1.length == 0) {
  console.log("String is empty.");
} else {
  console.log("String is not empty");
}

let string = "StRiNg";
let index = 1;

if (string[index] == string[index].toLowerCase()) {
  // if (string[index] >= "a" && string[index] <= "z") {
  console.log("character is lowercase");
} else {
  console.log("character is not lowercase");
}

let str2 = prompt("Enter another string for Qs5");
console.log(`Original string = ${str2}`);
console.log(`String after trimming = ${str2.trim()}`);

let arr2 = [1, 2, "hello", 2.44, "string"];
let item = 99;
if (arr2.indexOf(item) != -1) {
  console.log(`Item is present at index ${arr2.indexOf(item)}`);
} else {
  console.log("Item is not present.");
}
