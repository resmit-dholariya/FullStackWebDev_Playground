//Trimming
let msg = "   hel  lo  "; //removes whitespace from around
console.log(msg.trim());
//strings are immutable in JS

let password = prompt("Enter your password");
let newpass = password.trim();
console.log("Password:", password);
console.log("New Password:", newpass);

//Uppercase & Lowercase Conversions
let name = "Resmit Dholariya";
console.log(name.toUpperCase()); //use camelcase function naming technique
console.log(name.toLowerCase());

//Index of technique to find substring in a string
let msg1 = "ILoveCoding";
console.log(msg1.indexOf("Love"));
console.log(msg1.indexOf("love"));
console.log(msg1.indexOf("o"));
console.log(msg1.indexOf("z"));

//Method Chaining
let msg2 = "  hell o  ";
// let newMsg = msg2.trim();
// console.log("After trimming:", newMsg);
// newMsg = newMsg. toUpperCase();
// console.log("After Uppercase:", newMsg);
console.log(msg2.trim().toUpperCase()); // execution starts from left to right

//Slice - Part of original string
let str = "IloveCoding";
console.log(str.slice(5)); // "Coding" - starting index 5 then upto length
console.log(str.slice(1, 5)); // "love"
// str.slice(-num) = str.slice(length-num)
console.log(str.slice(-3));

// replace -- Searches a value in the string & returns a new string with the value replaced.
let str2 = "lloveCoding";
console.log(str2.replace("love", "do")); // "IdoCoding"
console.log(str2.replace("o", "x")); // "llxveCoding" -- first occurence

//repeat -- Returns a string with the number of copies of a string
let str3 = "Mango";
console.log(str3.repeat(3)); // "MangoMangoMango"

//practice Questions
let msg3 = "help!";
console.log(msg3.trim().toUpperCase());

let str4 = "ApnaCollege";
console.log(str4.slice(4, 9)); //output - upto-1
console.log(str4.indexOf("na"));
console.log(str4.replace("Apna", "Our"));
// console.log(str4.slice(4).replace("l", "t")); //method chaining
let newStr4 = str4.slice(4, 11);
console.log(newStr4);
console.log(newStr4.replace("l", "t"));

