let n = 5;

for (let i = 0; i < n; i++) {
  console.log("hello0 ", i);
}
console.log("bye!");

//it is used to provide addition arguments by the node window to use them into program
let args = process.argv;
for (let i = 2; i < args.length; i++) {
  //first two are executable path and file location
  console.log("hello, ", args[i]);
}

const math = require("./02_math");
console.log(math);
console.log(math.sum(1, 2));
console.log(math.g);
console.log(math.mul(10, 15));
console.log(math.PI);

const info = require("./Fruits");
console.log(info);
console.log(info[0].name);

const figlet = require("figlet");

figlet("Resmit", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

