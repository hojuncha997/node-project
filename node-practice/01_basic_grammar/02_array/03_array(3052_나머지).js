// 두 자연수 A와 B가 있을 때, A%B는 A를 B로 나눈 나머지 이다. 예를 들어, 7, 14, 27, 38을 3으로 나눈 나머지는 1, 2, 0, 2이다.
// 수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다. 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.

// 중복을 허용하지 않는 집합을 사용

const fs = require("fs");
const input = fs.readFileSync("./files/03_input.txt").toString().split("\n");

// 수로 바꿔준다
let data = input.map(Number);
// 집합 선언
let mySet = new Set();

for (let i = 0; i < 10; i++) {
  // 집합에 추가. 지울 때는 delete(원소"값")을 쓴다.
  mySet.add(data[i] % 42);
}

console.log(mySet.size);

// 아래와 같이 할 수도 있다.
// // 42로 나눈 나머지를 계산
// const remainders = input.map(number => number % 42);

// // 중복을 제거한 나머지의 배열을 생성
// const uniqueRemainders = [...new Set(remainders)];

// // 서로 다른 나머지의 개수를 출력
// console.log(uniqueRemainders.length);
