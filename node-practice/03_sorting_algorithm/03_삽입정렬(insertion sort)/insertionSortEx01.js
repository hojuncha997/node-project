/* 1) 버블 정렬의 수행 시간 측정*/
// 0부터 999까지의 정수 30000개를 담은 배열 생성

const insertionSort = require("./insertionSort");

let arr = Array.from({ length: 30000 }, () => Math.floor(Math.random() * 1000));

// getTime(): 1970-01-01부터의 시간차를 ms단위로 계싼
startTime = new Date().getTime();
insertionSort(arr);
endTime = new Date().getTime();

// 시간차 출력
console.log("삽입 정렬 소요 시간: ", endTime - startTime, "ms");

/* 2) 이미 정렬된 배열에 대한 삽입 정렬의 수행 시간 측정 */
// 값이 7인 정수 30000개를 담은 배열 생성

arr = Array.from({ length: 30000 }, () => 7);

// getTime(): 1970-01-01부터의 시간차를 ms 단위로 계산
startTime = new Date().getTime();
insertionSort(arr);
endTime = new Date().getTime();
console.log("endTime: ", endTime);

// 시간차 출력
console.log(
  "정렬된 배열에 대한 삽입 정렬 소요 시간: ",
  endTime - startTime,
  "ms"
);

// $ node insertionSortEx01.js
// 삽입 정렬 소요 시간:  712 ms
// endTime:  1712584250913
// 정렬된 배열에 대한 삽입 정렬 소요 시간:  0 ms // 4ms등 엄청 빠름
