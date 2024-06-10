const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const g = 9.8;
const PI = 3.14;

// exports.sum = (a, b) => a + b;
// exports.mul = (a, b) => a * b;
// exports.g = 9.8;
// exports.PI = 3.14;

let obj = {
  sum: sum,
  mul: mul,
  g: g,
  PI: PI,
};

// module.exports = {
//   sum: sum,
//   mul: mul,
//   g: g,
//   PI: PI,
// };

module.exports = obj;

