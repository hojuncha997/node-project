// 문제
// 그룹 단어란 단어에 존재하는 모든 문자에 대해서, 각 문자가 연속해서 나타나는 경우만을 말한다.
// 예를 들면, ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고, kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만,
// aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다.

// 단어 N개를 입력으로 받아 그룹 단어의 개수를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 단어의 개수 N이 들어온다. N은 100보다 작거나 같은 자연수이다. 둘째 줄부터 N개의 줄에 단어가 들어온다.
// 단어는 알파벳 소문자로만 되어있고 중복되지 않으며, 길이는 최대 100이다.

const fs = require("fs");
const input = fs
  .readFileSync("./files/04_input.txt")
  .toString()
  .split("\n")
  .map((line) => line.trim());

let n = Number(input[0]);
let summary = 0;

for (let i = 1; i <= n; i++) {
  let data = input[i];
  if (check(data)) {
    summary += 1;
  }
}

console.log(summary);

// 그룹단어 체크 함수
function check(data) {
  let setData = new Set(data[0]);
  for (let i = 0; i < data.length - 1; i++) {
    // 오른쪽 단어와 다르다면
    if (data[i] != data[i + 1]) {
      // 이미 등장한 알파벳이라면
      if (setData.has(data[i + 1])) {
        // 그룹단어가 아니다
        return false;
      }
    } else {
      setData.add(data[i + 1]);
    }
  }
  return true;
}
