// 좌표 정렬하기11650

// 2차원 평면 위의 점 N개가 주어진다. 좌표를 X좌표가 증가하는 순으로,
// x좌표가 같으면 y좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램 작성

// 입력
// 첫 째 줄에 점의 개수 N(1 <= N <= 100000)이 주어진다. 둘 째 줄부터 N개의 줄에는 i번점의 위치 xi와 yi가 주어진다.
// (-100000 <= xi, yi <= 100000) 좌표는 항상 정수이고, 위치가 같은 두 점은 없다.

// 좌표를 객체로 표현할 수 있다.

const fs = require("fs");
const input = fs
  .readFileSync("./files/input.txt", "utf-8")
  .toString()
  .split("\n");
// .map(Number);

// console.log("input: ", input);

const arr = input.slice(1);
// console.log("arr :", arr);

const objectify = (item) => {
  const ran = item.split(" ").map(Number);
  const obj = { x: ran[0], y: ran[1] };
  return obj;
};

// const arr2 = arr.map((item) => item.split(" "));
const arr2 = arr.map((item) => objectify(item));
// console.log("arr2:", arr2);

const compare = (a, b) => {
  if (a.x > b.x) {
    return 1;
  } else if (a.x < b.x) {
    return -1;
  }
};

const compare2 = (a, b) => {
  if (a.y > b.y) {
    return 1;
  } else if (a.y < b.y) {
    return -1;
  }
};

const arr3 = arr2.sort(compare);

// console.log("arr3: ", arr3);

const arr4 = arr3.sort(compare2);

// console.log(arr4);

let word = "";
arr4.map((item) => {
  word = word + `${item.x} ${item.y}` + "\n";
});

console.log(word);
