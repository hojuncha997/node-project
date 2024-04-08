// 삽입 정렬 함수

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      // 인덱스 j부터 1까지 1씩 감소하며 반복
      if (arr[j] < arr[j - 1]) {
        // 한 칸씩 왼쪽으로 이동
        // swap
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        // 자신보다 작은 데이터를 만나면 그 위치에서 멈춤
        // 그렇기 작은 데이터들을 끝까지 확인하지 않기 때문에 선택이나 버블정렬보다 빠를 가능성이 있음.
        // 특히나 이미 정렬된 데이터에 대해서 효과적
        break;
      }
    }
  }
}

module.exports = insertionSort;
