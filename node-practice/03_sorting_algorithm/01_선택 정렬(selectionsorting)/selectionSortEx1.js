/** 1) 선택 정렬의 수행시간 측정 */

// const selectionSort = require("./selectionSort");
const selectionSort = require("./selectionSort");

// 0부터 999까지의 정수 30000개를 담은 배열 생성
let arr = Array.from({ length: 30000 }, () => Math.floor(Math.random() * 1000));

// getTime(): 1970-01-01부터의 시간차를 ms 단위로 계산
let startTime = new Date().getTime();
selectionSort(arr);
let endTime = new Date().getTime();

// 시간차 출력
console.log("선택 정렬 소요 시간: ", (endTime = startTime), "ms");

/** 2) 이미 정렬된 배열에 대한 선택 정렬의 수행 시간 측정 */

// 0부터 999까지의 정수 30000개를 담은 배열 생성
arr = Array.from({ length: 30000 }, () => 7);

// getTime(): 1970-01-01부터의 시간차를 ms 단위로 계산
startTime = new Date().getTime();
selectionSort(arr);
endTime = new Date().getTime();

// 시간차 출력
console.log(
  "이미 정렬된 배열에 대한 선택 정렬 소요 시간: ",
  (endTime = startTime),
  "ms"
);
