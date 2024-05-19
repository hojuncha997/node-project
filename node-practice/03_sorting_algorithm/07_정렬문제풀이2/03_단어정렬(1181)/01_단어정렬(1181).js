/* 
알파벳 소문자로 이루어진 N개의 단어가 들어오면 아래와 같은 조건에 따라 정렬
  1. 길이가 짧은 것부터 
  2. 길이가 같으면 사전 순으로

  입력:
  
  첫 째 줄에 단어의 개수 N이 주어진다. (1 <= N <= 20000) 
  둘 째 줄부터 N개의 줄에 걸쳐 알파벳 소문자로 이뤄진 단어가 한줄에 하나씩 주어진다.
  주어지는 문자열의 길이는 50을 넘지 않는다.

  출력:
  조건에 따라 정렬하여 단어들을 출력한다. 단, 같은 단어가 여러 번 입력된 경우에는 한 번씩만 출력한다.


1. 반복문 사용하여 0번 인덱스를 제외한 요소들을 배열에 집어 넣는다.
2. 비교 함수를 만든다.
3. 비교함수는 a,b를 인수로 받으며, a.length -1 !== b.legnth -1이 다를 경우 a.length - b.length를 반환한다.
    만약 a.length === b.length라면, a-b를 반환한다.
4. 이 함수를 배열.sort()의 인수로 넣는다.
5. 배열을 집합으로 변경하여 중복된 값을 제거한다.
6. 빈 문자열 변수를 선언한다.
7. 집합을 순회하여 원소를 빈 문자열 변수에 붙여 넣고 출력한다.




////해설

- 먼저! !! 중복을 제거한다(집합 사용)



  */

// const fs = require("fs");
// const input = fs
//   .readFileSync("./files/input.txt", "utf-8")
//   .toString()
//   .split("\n");

// let arr = [];
// for (let i = 1; i <= Number(input[0]); i += 1) {
//   arr.push(input[i]);
// }

// // console.log(arr);

// const compare = (a, b) => {
//   if (a.length !== b.length) {
//     return a.length - b.length;
//   } else {
//     return a.toString - b.toString;
//   }
// };

// arr.sort(compare);

// console.log(arr);

// const testSet = new Set(arr);

// console.log(testSet);

// let result = "";

// testSet.forEach((item) => {
//   result += item + "\n";
// });

// console.log(result);

// 일단 함수 선언에서 틀렸음

///////////// 해설

let fs = require("fs");

const input = fs
  .readFileSync("./files/input.txt", "utf-8")
  .toString()
  .split("\n");

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i]);
}

//  집합을 사용해서 중복 없애고 다시 배열로 되돌리기
arr = [...new Set(arr)];

arr.sort((a, b) => {
  if (a.length != b.length) return a.length - b.length;
  else {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  }
});

arr.forEach((item) => {
  console.log(item);
});
