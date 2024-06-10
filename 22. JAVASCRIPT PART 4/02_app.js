let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == num) {
    arr.splice(i, 1);
  }
}
console.log(arr);

let number = 287152;
let copy = number;
let count = 0;

while (copy > 0) {
  count++;
  copy = Math.floor(copy / 10);
}
console.log(count);

let number1 = 287152;
let sum = 0;
let copy1 = number1;

while (copy1 > 0) {
  let rem = copy1 % 10;
  sum += rem;
  copy1 = Math.floor(copy1 / 10);
}
console.log(sum);

let num1 = 5;
let factorial = 1;
let i = 1;
while (i <= num1) {
  factorial *= i;
  i++;
}
console.log(`factorial of ${num1} is ${factorial}.`);

let arr1 = [2, 5, 10, 4, 2, 7, 1, 9];
let max = 0;
let j = 0;
while (j <= arr1.length) {
  if (arr1[j] > max) {
    max = arr1[j];
  }
  j++;
}
console.log(max);
