/*
문제
수직선 위에 N개의 좌표 X1, X2, ..., XN이 있다. 이 좌표에 좌표 압축을 적용하려고 한다.

Xi를 좌표 압축한 결과 X'i의 값은 Xi > Xj를 만족하는 서로 다른 좌표 Xj의 개수와 같아야 한다.

X1, X2, ..., XN에 좌표 압축을 적용한 결과 X'1, X'2, ..., X'N를 출력해보자.

입력
첫째 줄에 N이 주어진다.

둘째 줄에는 공백 한 칸으로 구분된 X1, X2, ..., XN이 주어진다.

출력
첫째 줄에 X'1, X'2, ..., X'N을 공백 한 칸으로 구분해서 출력한다.

제한
1 ≤ N ≤ 1,000,000
-109 ≤ Xi ≤ 109


5
2 4 -10 4 -9
2 3 0 3 1


6
1000 999 1000 999 1000 999
1 0 1 0 1 0

*/

/* 

const fs = require("fs");
const input = fs
  .readFileSync("./files/input.txt", "utf-8")
  .toString()
  .split("\n");

console.log(input);
// [ '5\r', '2 4 -10 4 -9' ]

let arr = [...new Set(input[1].split(" ").map((item) => parseInt(item, 10)))];

console.log(arr);
// [ -10, -9, 2, 4 ]

const compare = (a, b) => {
  if (a !== b) {
    return a - b;
  }
};

arr.sort(compare);
console.log(arr);
// [ -10, -9, 2, 4 ]

let obj = {};

arr.forEach((item, index) => (obj[item] = index.toString()));

console.log(obj);
// { '2': '2', '4': '3', '-10': '0', '-9': '1' }

let result = "";

arr.forEach((item, index) => {
  console.log(item);
  console.log(obj[item.toString()]);
  result += obj[item.toString()] + " ";
});

console.log(result);
*/

// 해설
const fs = require("fs");
const input = fs
  .readFileSync("./files/input.txt", "utf-8")
  .toString()
  .split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let uniqueArr = [...new Set(arr)];
uniqueArr.sort((a, b) => a - b);

let testMap = new Map();

for (let i = 0; i < uniqueArr.length; i++) {
  testMap.set(uniqueArr[i], i);
}

answer = "";
for (x of arr) {
  answer += testMap.get(x) + " ";
}

console.log(answer);
