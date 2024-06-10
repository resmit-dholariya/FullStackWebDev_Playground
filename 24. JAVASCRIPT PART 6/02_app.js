let arr = [10, 12, 3, 7, 5, 3, 8, 8, 9];
let num = 4;

function getLeargerElemenets(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      console.log(arr[i]);
    }
  }
}
getLeargerElemenets(arr, num);

let str = "abcdabcdefgggh";

function uniqueStr(str) {
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    if (ans.indexOf(str[i]) == -1) {
      ans += str[i];
    }
  }
  return ans;
}
console.log(uniqueStr(str));

let countryList = ["Australia", "Genmany", "United States of America"];

function longestName(list) {
  let ans = "";
  for (let i = 0; i < list.length; i++) {
    if (list[i].length > ans.length) {
      ans = list[i];
    }
  }
  return ans;
}
console.log(longestName(countryList));

let str1 = "apnacollege";

function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      //   str.charAt(i) == "a" ||
      //   str.charAt(i) == "e" ||
      //   str.charAt(i) == "i" ||
      //   str.charAt(i) == "o" ||
      //   str.charAt(i) == "u"
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      count++;
    }
  }
  return count;
}
console.log(countVowels(str1));

let start = 100;
let end = 200;

function generateRandom(start, end) {
  let diff = end - start;
  return Math.floor(Math.random() * diff) + start;
}
console.log(generateRandom(start, end));
