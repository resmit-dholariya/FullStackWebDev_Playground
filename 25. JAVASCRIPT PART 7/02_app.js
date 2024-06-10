let arr = [1, 2, 3, 4, 5];
const arrayAverage = (arr) => {
  let sum = 0;
  for (let element of arr) {
    sum += element;
  }
  return sum / arr.length;
};
console.log(arrayAverage(arr));

let num = 11;
const isEven = (num) => {
  if (num % 2 == 0) {
    console.log("Even");
  } else if (!(num % 2 == 0)) {
    console.log("Odd");
  }
};
isEven(num);

const object = {
  message: "Hello, world!",

  logMessage() {
    console.log(this.message);
  },
};
// object.logMessage();
setTimeout(object.logMessage, 1000);

let length = 4;
function callback() {
  console.log(this.length);
}
callback();
const object1 = {
  length: 5,
  method(callback) {
    callback();
  },
};
console.log(object1.method(callback));
