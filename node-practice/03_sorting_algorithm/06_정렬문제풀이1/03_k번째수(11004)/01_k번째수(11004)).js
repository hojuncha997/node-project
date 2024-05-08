// 수 N개 A1, A2, ... AN이 주어진다. 오름차순 정렬했을 때 앞에서부터 K번째 있는 수를 구하는 프로그램

// 입력: 첫 째 줄에 N(1 <= N <= 5,000,000 )과 K (1 <= K <= N )가 주어진다.
// 출력: A를 정렬했을 때 앞에서부터 K번째 있는 수를 출력

const fs = require("fs");
const input = fs
  .readFileSync("./files/input.txt", "utf-8")
  .toString()
  .split("\n");
// .map(Number);

const firstRowArr = input[0].split(" ").map(Number);
const index = firstRowArr[1];
const secondRowArr = input[1].split(" ").map(Number);

console.log(input);
console.log(firstRowArr);
console.log(secondRowArr);

secondRowArr.sort(function (a, b) {
  return a - b;
});

console.log(secondRowArr);
console.log(secondRowArr[index - 1]);

// 제출용

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin", "utf-8").toString().split("\n");
// // .map(Number);

// const firstRowArr = input[0].split(" ").map(Number);
// const index = firstRowArr[1];
// const secondRowArr = input[1].split(" ").map(Number);

// secondRowArr.sort(function (a, b) {
//   return a - b;
// });

// console.log(secondRowArr[index - 1]);
