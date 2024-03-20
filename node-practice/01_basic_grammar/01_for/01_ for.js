const fs = require("fs");
const input = fs
  .readFileSync("./files/input.txt", "utf-8")
  .toString()
  .split("\n");

let testCase = Number(input[0]);
let answer = "";

for (let t = 1; t <= testCase; t++) {
  let data = input[t].split(" ");
  let a = Number(data[0]);
  let b = Number(data[1]);

  answer += a + b + "\n";
}
// 문자열로 담아 놓고 한 번에 출력하기
console.log(answer);
