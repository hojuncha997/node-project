// 첫째 줄에는 테스트 케이스의 개수 C가 주어진다.
// 둘째 줄부터 각 테스트 케이스마다 학생의 수 N(1 ≤ N ≤ 1000, N은 정수)이 첫 수로 주어지고, 이어서 N명의 점수가 주어진다. 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.
// 각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력한다. 정답과 출력값의 절대/상대 오차는 10-3이하이면 정답이다.

const fs = require("fs");
const input = fs.readFileSync("./files/04_input.txt").toString().split("\n");

// console.log(input);

// 1. 0번 원소를 확인하여 총 테스트 개수를 확인
// 2. 1번 인덱스부터 시작하여 원소를 " " 단위로 split한다.
// 3. 쪼갠 원소의 0번은 총 인원이므로, 1번부터 끝번까지의 원소의 합을 구하여 0번 원소로 나눈다.
// 4. 출력한다.
// 5. 다음 인덱스로 넘어간다

const numOfCase = input[0];

for (let i = 1; i <= numOfCase; i++) {
  // 각 케이스별로 만들기
  let eachCaseArray = input[i].split(" ").map(Number);

  const numOfStudent = eachCaseArray[0];

  // 1번부터 그 뒤까지 얕은 복사
  eachCaseArray = eachCaseArray.slice(1);
  // console.log("eachCaseArray: ", eachCaseArray);

  let total = 0;

  for (let k = 0; k < eachCaseArray.length; k++) {
    total += eachCaseArray[k];
  }

  const avg = total / numOfStudent;

  // console.log(avg);

  // 배열을 돌면서, 평균보다 큰 값을 카운트한다. 그 값을 총 numOfStudent로 나눈다.
  let numOfOverAvgStudent = 0;
  eachCaseArray.forEach((score) =>
    score > avg ? numOfOverAvgStudent++ : numOfOverAvgStudent
  );
  const perOfOverAvgStud = (numOfOverAvgStudent / numOfStudent) * 100;
  console.log(`${perOfOverAvgStud.toFixed(3)}%`);
}

// 아래처럼도 가능

// const fs = require("fs");
// const input = fs.readFileSync("./files/04_input.txt").toString().split("\n");

// const numOfCases = Number(input[0]);

// for (let i = 1; i <= numOfCases; i++) {
//   const scores = input[i].split(" ").map(Number).slice(1);
//   const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
//   const percentageOfOverAvg = scores.filter(score => score > average).length / scores.length * 100;

//   console.log(`${percentageOfOverAvg.toFixed(3)}%`);
// }
