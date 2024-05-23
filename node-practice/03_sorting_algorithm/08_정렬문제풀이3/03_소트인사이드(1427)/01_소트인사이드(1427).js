/*
문제
배열을 정렬하는 것은 쉽다. 수가 주어지면, 그 수의 각 자리수를 내림차순으로 정렬해보자.

입력
첫째 줄에 정렬하려고 하는 수 N이 주어진다. N은 1,000,000,000보다 작거나 같은 자연수이다.

출력
첫째 줄에 자리수를 내림차순으로 정렬한 수를 출력한다.

2143
==> 
4321

999998999
==> 
999999998

61423
==> 
64321

500613009
==> 
965310000


총 10개의 숫자가 존재
0부터 9까지 모든 숫자에 대하여 빈도수를 센다.
각 숫자를 내림차순으로 하나씩 확인하며 [빈도수만큼] 출력한다.


*/

// let fs = require("fs");
// let input = fs
//   .readFileSync("./files/input.txt", "utf-8")
//   .toString()
//   .split("")
//   .map(Number);

// // console.log(input);

// const compare = (a, b) => {
//   if (a !== b) {
//     return b - a;
//   }
// };

// input.sort(compare);

// // console.log(input);

// let answer = "";

// input.forEach((item) => {
//   answer += item.toString();
// });

// console.log(answer);

// //////////////// ide에서는 맞았지만 백준에서는 틀렸음

// 그리고 아래는 해설

/* 

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin", "utf-8").trim();

// 문자열을 배열로 변환하고 내림차순으로 정렬한 다음 다시 문자열로 변환
let sortedInput = input.split("").sort((a, b) => b - a).join("");

console.log(sortedInput);

백준에서는 통과


*/

/* 








*/

let fs = require("fs");
let input = fs.readFileSync("./files/input.txt", "utf-8").split("n");

let n = input[0]; //  수 입력받기
let cnt = Array(10).fill(0); // 초기 빈도 값은 0으로 초기화

for (let x of n) {
  // 한 자리씩 숫자(digit)를 확인하며
  cnt[Number(x)]++;
}

let answer = "";
for (let i = 9; i >= 0; i--) {
  for (let j = 0; j < cnt[i]; j++) {
    return (answer += i + "");
  }
}

console.log(answer);
