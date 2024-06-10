let delhi = {
  latitude: "28.7041 N",
  longitude: "77.1025 E",
};

const student = {
  name: "resmit",
  age: 20,
  marks: 100,
  city: "Ahmedabad",
};

const item = {
  price: 100,
  discount: 50,
  colors: ["red", "pink"],
};

const post = {
  username: "@resmit_dholariya_",
  content: "This is my  #FirstPost",
  likes: 1000,
  reposts: 100,
  tags: ["coder", "developer", "designer"],
};

//Get values
const post1 = {
  username: "@resmit_dholariya_",
  content: "This is my  #FirstPost",
  likes: 1000,
  reposts: 100,
  tags: ["#coder", "#developer", "#designer"],
};

console.log(post1["username"]); //"" are mandatory
console.log(post1["likes"]);
console.log(post1.likes);
console.log(post1.tags);
console.log(post1.tags[0]);

let property = "reposts";
console.log(post1[property]);
console.log(post1.property); //undefined

const obj = {
  1: "a",
  2: "b",
  true: "c",
  null: "d",
  undefined: "e",
};

console.log(obj[1]);
console.log(obj["2"]);
console.log(obj[null]);
console.log(obj[true]);
console.log(obj[undefined]);
console.log(obj.null);
console.log(obj.undefined);
// console.log(obj.1);

//other cases are working due to they(numbers) are converted to string and then evaluated
const student1 = {
  name: "resmit",
  age: 20,
  marks: 100,
  city: "Ahmedabad",
};
//add/update values
student1.city = "Mumbai";
console.log(student1["city"]);

student1.gender = "male";
console.log(student1.gender);

student1.marks = "A";
console.log(student1["marks"]);

console.log(student1);

student1.marks = [90, 100, 99];
console.log(student1);

//delete valyes
delete student1.gender;
console.log(student1);

//object of objects
const classInfo = {
  aman: {
    grade: "A+",
    city: "Delhi",
  },
  shraddha: {
    grade: "A",
    city: "Pune",
  },
  karan: {
    grade: "o",
    city: "Mumbai",
  },
};

console.log(classInfo.aman);
console.log(classInfo.shraddha);
console.log(classInfo.aman.grade);
console.log(classInfo.shraddha.city);

classInfo.shraddha.city = "Ahmedabad";
console.log(classInfo.shraddha.city);
console.log(classInfo.shraddha);
console.log(classInfo);

//array of objects
const classInfo1 = [
  {
    name: "aman",
    grade: "A+",
    city: "Delhi",
  },
  {
    name: "shraddha",
    grade: "A",
    city: "Pune",
  },
  {
    name: "karan",
    grade: "o",
    city: "Mumbai",
  },
];

console.log(classInfo1);
console.log(classInfo1[1]);
console.log(classInfo1[2]);
console.log(classInfo1[2].name);
console.log(classInfo1[2].city);
classInfo1[2].city = "Ahmedabad";
console.log(classInfo1[2].city);
console.log(classInfo1[2]);

classInfo1[1].gender = "Female";
console.log(classInfo1[1].gender);
console.log(classInfo1[1]);

console.log(Math);

console.log(Math.PI);
console.log(Math.E);

console.log(Math.abs(12));
console.log(Math.abs(-12));
console.log(Math.abs(-12.5));

console.log(Math.pow(2, 4)); //2 ** 4
console.log(Math.pow(3, 5));

console.log(Math.floor(12));
console.log(Math.floor(12.5)); //equal to or less than that num provided use as rounding off
console.log(Math.floor(-12.5));
console.log(Math.floor(-5.99999999999999));
console.log(Math.floor(5.99999999999999));

console.log(Math.ceil(5)); //equal to or greater than that num provided use as rounding off
console.log(Math.ceil(5.5));
console.log(Math.ceil(5.0000001));
console.log(Math.ceil(-5));
console.log(Math.ceil(-5.001));

console.log(Math.random()); //o to 1, 1 is exclusive
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

//random number generation from 0 to 9;
let step1 = Math.random();
let step2 = step1 * 10; //to get random number in a range we have to multiply by that much
let step3 = Math.floor(step2);
console.log(step3);

//single line execution
let num = Math.floor(Math.random() * 10);
console.log(num);

//to get range from 1 to 10 w add 1
let num1 = Math.floor(Math.random() * 10) + 1;
console.log(num1);

//Practice Question (1 to 100)
let num2 = Math.floor(Math.random() * 100) + 1;
console.log(num2);

//(1 to 5)
let num3 = Math.floor(Math.random() * 5) + 1;
console.log(num3);

//(21 to 25)
let num4 = Math.floor(Math.random() * 5) + 21;
console.log(num4);

//guessing number game
const max = prompt("Enter the max number");
const random = Math.floor(Math.random() * max) + 1;
let attempts = 1;
console.log(random);

let guess = prompt("Guess the number");
while (true) {
  if (guess == "quit") {
    console.log("User Quit");
    break;
  } else if (guess == random) {
    console.log(
      `You guessed it right in ${attempts} attempts, the number is ${random}.`
    );
    break;
  } else if (guess < random) {
    guess = prompt("Hint: Your guess was smaller, Please try again");
    attempts++;
  } else {
    guess = prompt("Hint: Your guess was larger, Please try again");
    attempts++;
  }
}
