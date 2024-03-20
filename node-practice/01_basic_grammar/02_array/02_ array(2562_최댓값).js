// const fs = require("fs");
// const input = fs
//   .readFileSync("./files/02_input.txt", "utf-8")
//   .toString()
//   .split("\n");

// let maxValue = Number(input[0]);
// console.log(input.length);

// let i = 0;

// for (i = 0; i < input.length; i++) {
//   if (Number(input[i]) > maxValue) {
//     maxValue = Number(input[i]);
//   }
// }

// console.log(maxValue + "\n" + i);

const fs = require("fs");
const input = fs
  .readFileSync("./files/02_input.txt", "utf-8")
  .toString()
  .split("\n");

let maxValue = 0;
let maxIndex = 0;

for (let i = 0; i < 9; i++) {
  let data = Number(input[i]);
  if (maxValue < data) {
    maxValue = data;
    maxIndex = i;
  }
}
console.log(maxValue + "\n" + (maxIndex + 1));

/* 주어진 수 가운데 최댓값을 찾고 몇 번째 수인지 구하는 프로그램
:
아래와 같이 i를 직접 출력하게 되면 전체 반복횟수가 나올 수밖에 없다.
반복 중간에 maxValue에 기록하는 것을 잊으면 안 된다.

 console.log(maxValue + "\n" + i);


 아래와 같이 reduce함수를 사용할 수도 있다.

 let data = input.map((x) => Number(x));
 let max = Math.max(...data);

 console.log(max);
 console.log(input.indexOf(max) + 1);
 
 */
