/*
문제
온라인 저지에 가입한 사람들의 나이와 이름이 가입한 순서대로 주어진다. 이때, 회원들을 나이가 증가하는 순으로, 나이가 같으면 먼저 가입한 사람이 앞에 오는 순서로 정렬하는 프로그램을 작성하시오.

입력
첫째 줄에 온라인 저지 회원의 수 N이 주어진다. (1 ≤ N ≤ 100,000)

둘째 줄부터 N개의 줄에는 각 회원의 나이와 이름이 공백으로 구분되어 주어진다. 나이는 1보다 크거나 같으며, 200보다 작거나 같은 정수이고, 이름은 알파벳 대소문자로 이루어져 있고, 길이가 100보다 작거나 같은 문자열이다. 입력은 가입한 순서로 주어진다.

출력
첫째 줄부터 총 N개의 줄에 걸쳐 온라인 저지 회원을 나이 순, 나이가 같으면 가입한 순으로 한 줄에 한 명씩 나이와 이름을 공백으로 구분해 출력한다.


3
21 Junkyu
21 Dohyun
20 Sunyoung

==> 

20 Sunyoung
21 Junkyu
21 Dohyun


*/

// const fs = require("fs");
// const input = fs
//   .readFileSync("./files/input.txt", "utf-8")
//   .toString()
//   .split("\n");

// // console.log(input);

// const n = Number(input[0]);

// let arr = [];

// for (let i = 1; i <= n; i += 1) {
//   const [a, b] = input[i].split(" ");
//   arr.push({ seq: i - 1, age: Number(a), name: b });
// }

// // console.log(arr);

// const compare = (a, b) => {
//   if (a !== b) {
//     return a.age - b.age;
//   } else {
//     return a.seq - b.seq;
//   }
// };

// arr.sort(compare);
// // console.log(arr);

// let result = "";

// arr.forEach((item) => {
//   result += `${item.age} ${item.name}\n`;
// });

// console.log(result); 맞음

////////////////////해설

let fs = require("fs");
let input = fs
  .readFileSync("./files/input.txt", "utf-8")
  .toString()
  .split("\n");

let n = Number(input[0]);
let arr = [];

for (let i = 1; i <= n; i++) {
  let age = Number(input[i].split(" ")[0]);
  let name = input[i].split(" ")[1];
  arr.push([age, name]);
}

arr.sort((a, b) => a[0] - b[0]); // Node.js의 정렬은 기본적으로 stable

let answer = "";
for (let x of arr) answer += x[0] + " " + x[1] + "\n";
console.log(answer);
