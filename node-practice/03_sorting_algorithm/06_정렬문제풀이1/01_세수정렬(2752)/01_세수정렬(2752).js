// 세 정수를 오름차순 정렬
// 정수 세 개가 주어졌을 때. 가장 작은 수, 그 다음 수, 가장 큰 수를 출력하는 프로그램

// 정수 3개가 주어진다. 이 수는 1보다 크거나 같고 1,000,000보다 작거나 같다. 이 수는 모두 다르다.

const fs = require("fs");

const input = fs
  .readFileSync("./files/input.txt", "utf-8")
  .toString()
  .split(" ")
  .map(Number);

input.sort(function (a, b) {
  return a - b;
});

let answer = "";
for (let i = 0; i < input.length; i++) {
  answer += input[i] + " ";
}

console.log(answer);

////////////////////////////////////////////////

// 제출용  답01: sort()사용

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// let arr = input[0].split(" ").map(Number);
// // 오름차순 정렬 수행
// arr.sort(function (a, b) {
//   return a - b;
// });

// let answer = "";
// for (let i = 0; i < arr.length; i++) {
//   answer += arr[i] + " ";
// }

// console.log(answer);

////////////////////////////////////////////////

// 제출용  답02 : 선택 정렬 사용. 매 단계마다 가장 작은 원소를 선택해서 해당 원소를 가장 앞으로 보냄.
// 데이터 개수가 많을 때는 비효율적이지만 데이터 개수가 1000개 이하일 때는 빠르게 수행된다.

// function selectionSort(arr) {
//   // 선택정렬함수
//   for (let i = 0; i < arr.length; i++) {
//     let minIndex = i; // 가장 작은 원소의 인덱스
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[minIndex] > arr[j]) minIndex = j;
//     }

//     let temp = arr[i]; // swap
//     arr[i] = arr[minIndex];
//     arr[minIndex] = temp;
//   }
// }

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// let arr = input[0].split(" ").map(Number);
// selectionSort(arr);

// let answer = "";
// for (let i = 0; i < arr.length; i++) {
//   answer += arr[i] + " ";
// }

// console.log(answer);
