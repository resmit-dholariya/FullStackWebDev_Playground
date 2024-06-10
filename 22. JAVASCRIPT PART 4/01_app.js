console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

console.log("*************");

for (let i = 1; i <= 10; i++) {
  //variable i is limitd to loop only
  console.log(i);
}

console.log("backward");

for (let j = 10; j >= 1; j -= 3) {
  console.log(j);
}

console.log("*************");

// for (let i = 1; i <= 15; i++) {
for (let i = 1; i <= 15; i += 2) {
  //   if (i % 2 != 0) {
  console.log(i);
  //   }
}

console.log("backward");

for (let i = 15; i >= 1; i -= 2) {
  console.log(i);
}

console.log("*************");

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

console.log("backward");
for (let i = 10; i >= 2; i -= 2) {
  console.log(i);
}

console.log("*************");

let n = prompt("Enter a number to print table");
n = parseInt(n); //by default prompt is a string to convert into int we use this

for (let i = n; i <= n * 10; i += n) {
  console.log(i);
}

console.log("*************");

for (let i = 1; i <= 10; i++) {
  console.log(`${n} X ${i} = ${n * i}`);
}

console.log("*************");

for (let i = 1; i <= 3; i++) {
  console.log(`Outer Loop ${i}`);
  for (let j = 1; j <= 3; j++) {
    console.log(j);
  }
}

console.log("*************");

let a = 1;
while (a <= 5) {
  console.log(a);
  a++;
}

console.log("*************");
let b = 5;
while (b >= 1) {
  console.log(b);
  b--;
}

console.log("*************");
let c = 0; //or 1 for odd
while (c <= 20) {
  console.log(c);
  c += 2;
}

console.log("*************");
let favourite = "krish 3";
let guess = prompt("Guess for favourite movie");
let attempt = 1;
while (guess != favourite) {
  if (guess == "quit") {
    console.log("you quit");
    break;
  }
  guess = prompt("wrong guess. Please try agaiin!");
  attempt++;
}

if (guess == favourite) {
  console.log(`Congrats! You guessed favourite movie in ${attempt} attempts.`);
}

console.log("*************");

let num = 1;
while (num <= 5) {
  if (num == 3) {
    break;
  }
  console.log(num);
  num++;
}
console.log("we used break at 3.");

console.log("*************");

let fruits = ["mango", "apple", "banana", "litchi", "orange"];
fruits.push("pineapple");
for (let i = 1; i <= fruits.length; i++) {
  console.log(i, fruits[i - 1]);
}
console.log("*************");

for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(i + 1, fruits[i]);
}

console.log("*************");
let heroes = [
  ["ironman", "spiderman", "thor"],
  ["superman", "wonder woman", "flash"],
];
for (let i = 0; i < heroes.length; i++) {
  console.log(`List ${i + 1}`);
  for (let j = 0; j < heroes[i].length; j++) {
    console.log(j + 1, heroes[i][j]);
  }
}

console.log("*************");

let students = [
  ["aman", 95],
  ["shraddha", 94.4],
  ["karan", 100],
];
for (let i = 0; i < students.length; i++) {
  console.log(`info of student #${i + 1}`);
  for (let j = 0; j < students[i].length; j++) {
    console.log(students[i][j]);
  }
}
console.log("*************");

let fruits1 = ["mango", "apple", "banana", "orange", "litchi"];
for (fruit of fruits) {
  console.log(fruit);
}

for (char of "Apna College") {
  console.log(char);
}
console.log("*************");

let heroes1 = [
  ["ironman", "captain america", "spiderman", "thor"],
  ["superman", "wonder woman", "flash", "batman"],
];
for (list of heroes1) {
  for (heroes of list) {
    console.log(heroes);
  }
}

console.log("*************");

let todo = [];
let request = prompt("Enter your request");

while (true) {
  if (request == "quit") {
    console.log("quitting app");
    break;
  } else if (request == "list") {
    console.log("------------");
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log("------------");
  } else if (request == "add") {
    let task = prompt("Enter task to add in todo");
    todo.push(task);
    console.log("Task added successfully.");
  } else if (request == "delete") {
    let idx = prompt("Enter index of task to delete");
    todo.splice(idx, 1);
    console.log("Task deleted successfully.");
  } else {
    console.log("Wrong request provided.");
  }
  request = prompt("Enter your request");
}
