// N개의 수가 주어졌을 때 오름차순으로 정렬하는 프로그램 작성

// 입력:
// 첫 째 줄에 수의 개수 N( 1 <= N <= 1000 )이 주어진다.
// 둘 째 줄부터 N개의 줄에는 수가 주어진다. 이 수는 절댓값이 1000보다 작거나 같은 정수이다. 수는 중복되지 않는다.

// 출력:
// 첫 째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.

const fs = require("fs");
const input = fs
  .readFileSync("./files/input.txt", "utf-8")
  .toString()
  .split("\n");

console.log(input);

let result = "";
for (let i = 0; i < input.length; i += 1) {
  result = result + i + " ";
}

console.log(result);
