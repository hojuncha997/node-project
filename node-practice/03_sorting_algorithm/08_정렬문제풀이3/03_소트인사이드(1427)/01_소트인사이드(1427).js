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
*/

let fs = require("fs");
let input = fs
  .readFileSync("./files/input.txt", "utf-8")
  .toString()
  .split("")
  .map(Number);

// console.log(input);

const compare = (a, b) => {
  if (a !== b) {
    return b - a;
  }
};

input.sort(compare);

// console.log(input);

let answer = "";

input.forEach((item) => {
  answer += item.toString();
});

console.log(answer);

// //////////////// ide에서는 맞았지만 백준에서는 틀렸음

// 그리고 아래는 해설

/* 

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin", "utf-8").trim();

// 문자열을 배열로 변환하고 내림차순으로 정렬한 다음 다시 문자열로 변환
let sortedInput = input.split("").sort((a, b) => b - a).join("");

console.log(sortedInput);


*/
