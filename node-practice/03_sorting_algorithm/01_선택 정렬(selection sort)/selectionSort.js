//  선택 정렬 함수

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i; // 가장 작은 원소의 인덱스

    // +1 해줌으로써 처리되지 않은 원소 중 가장 앞에서 시작
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    //스왑(swap): 자리를 바꿈

    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}

// 함수 내보내기
module.exports = selectionSort;
