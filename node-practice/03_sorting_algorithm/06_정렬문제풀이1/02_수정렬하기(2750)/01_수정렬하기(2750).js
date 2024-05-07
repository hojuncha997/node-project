// N개의 수가 주어졌을 때 오름차순으로 정렬하는 프로그램 작성

// 입력:
// 첫 째 줄에 수의 개수 N( 1 <= N <= 1000 )이 주어진다.
// 둘 째 줄부터 N개의 줄에는 수가 주어진다. 이 수는 절댓값이 1000보다 작거나 같은 정수이다. 수는 중복되지 않는다.

// 출력:
// 첫 째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.

// 내 풀이
// const fs = require("fs");
// const input = fs
//   .readFileSync("./files/input.txt", "utf-8")
//   .toString()
//   .split("\n");

// console.log(input);

// let n = input[0];

// function compare(a, b) {
//   return a - b;
// }

// input.splice(0, 1);
// input.sort(compare);

// console.log(input);
// let result = "";
// for (let i = 0; i < input.length; i += 1) {
//   result += input[i] + "\n";
// }

// console.log(result);

////////////////////////////////////////////////////////////

// 제출풀이: 여기서는 sort를 사용했지만 선택정렬을 사용할 수도 있음

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin", "utf-8").toString().split("\n");

let n = Number(input[0]);
let arr = [];

for (let i = 1; i <= n; i += 1) {
  arr.push(Number(input[i]));
}

arr.sort(function (a, b) {
  return a - b;
});

let answer = "";
for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + "\n";
}

console.log(answer);
