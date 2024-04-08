// 버블정렬

function bubbleSort(arr) {
  // 가장 마지막 n번째는 정렬하지 않아도 되기 떄문에 n-1을 해준다
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

// 함수 내보내기
module.exports = bubbleSort;
