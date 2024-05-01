/* 1) 버블 정렬의 수행 시간 측정*/
// 0부터 999까지의 정수 100000개를 담은 배열 생성

const mergeSort = require("./mergeSort");

let arr = Array.from({ length: 100000 }, () =>
  Math.floor(Math.random() * 1000)
);

// getTime(): 1970-01-01부터의 시간차를 ms단위로 계싼
startTime = new Date().getTime();
// 임시 정렬 배열(sorted) 정의
sorted = Array.from({ length: arr.length }, () => 0);
mergeSort(arr, 0, arr.length - 1);
endTime = new Date().getTime();

// 시간차 출력
console.log("병합 정렬 소요 시간: ", endTime - startTime, "ms");

/* 2) 이미 정렬된 배열에 대한 병합 정렬의 수행 시간 측정 */
// 값이 7인 정수 100000개를 담은 배열 생성

arr = Array.from({ length: 100000 }, () => 7);

// getTime(): 1970-01-01부터의 시간차를 ms 단위로 계산
startTime = new Date().getTime();

sorted = Array.from({ length: arr.length }, () => 0);
mergeSort(arr, 0, arr.length - 1);

endTime = new Date().getTime();
console.log("endTime: ", endTime);

// 시간차 출력
console.log(
  "정렬된 배열에 대한 삽입 정렬 소요 시간: ",
  endTime - startTime,
  "ms"
);

// $ node mergeSortEx01.js
// 병합 정렬 소요 시간:  58 ms
// endTime:  1714547478905
// 정렬된 배열에 대한 삽입 정렬 소요 시간:  34 ms

// 데이터가 다른 정렬방식(삽입, 버블, 선택)에 비해 3배 이상 많음에도 불구하고 소요시간은 훨씬 짧다. 훨씬 효율적이다.
// 물론 임시 정렬 배열이 필요하기 떄문에 메모리는 더 필요하다. 그래도 시간적 이점이 크기 떄문에 많은 언어에서 기본정렬 라이브러리로 구현돼 있다.
