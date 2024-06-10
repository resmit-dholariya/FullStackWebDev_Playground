let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(
//   arr.reduce((sum, ele) => {
//     return (sum += ele ** 2);
//   })
// );
let square = arr.map((ele) => ele * ele);
console.log("squares:", square);

let sum = square.reduce((sum, ele) => (sum += ele));
console.log("sum:", sum);

let avg = sum / arr.length;
console.log("avg:", avg);

let arr2 = [1, 2, 3, 4, 5];
console.log(arr2.map((ele) => ele + 5));

let strings = ["adam", "bob", "catlyn", "donald", "eve"];
console.log(strings.map((ele) => ele.toUpperCase()));

let arr3 = [1, 2, 3, 4, 5];
let args = [6, 7, 8, 9, 10];
function doubleAndReturnArgs(arr3, ...args) {
  return [...arr3, ...args.map((ele) => ele * 2)];
}

const doubleAndReturnArgs1 = (arr3, ...args) => [
  ...arr3,
  ...args.map((ele) => ele * 2),
];

console.log(doubleAndReturnArgs(arr3, ...args));
console.log(doubleAndReturnArgs1(arr3, ...args));
console.log(doubleAndReturnArgs1([11, 12, 13], 2, 3));

let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = {
  c: 3,
  d: 4,
};

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
console.log(mergeObjects(obj1, obj2));
