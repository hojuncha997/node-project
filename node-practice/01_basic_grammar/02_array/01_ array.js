// const fs = require("fs");
// const input = fs
//   .readFileSync("./files/01_input.txt", "utf-8")
//   .toString()
//   .split("\n");

// // const input = fs.readFileSync("./input.txt", "utf-8").toString().split("\n");

// let array = input[1].split(" ");

// let theBiggest = Number(array[0]);
// let theSmallest = Number(array[0]);

// for (i = 0; i < array.length; i++) {
//   Number(array[i]) > theBiggest ? (theBiggest = Number(array[i])) : theBiggest;
//   Number(array[i]) < theSmallest
//     ? (theSmallest = Number(array[i]))
//     : theSmallest;
// }

// console.log(theSmallest, theBiggest);

// 리듀서 사용

const fs = require("fs");
const input = fs
  .readFileSync("./files/01_input.txt", "utf-8")
  .toString()
  .split("\n");

let n = Number(input[0]);
let data = input[1].split(" ").map((x) => Number(x));

let minValue = data.reduce((a, b) => Math.min(a, b));
let maxValue = data.reduce((a, b) => Math.max(a, b));

console.log(minValue + " " + maxValue);
