class MinHeap {
  constructor() {
    // 힙을 저장할 배열
    this.heap = [];
  }

  // 힙의 크기를 반환하는 메서드
  size() {
    return this.heap.length;
  }

  // 두 값을 바꿔주는 메서드
  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  // 새로운 노드를 추가하는 메서드
  add(value) {
    this.heap.push(value); // 힙의 끝에 새로운 노드 추가
    this.bubbleUp(); // 새로운 값이 추가된 위치에서 bubbleUp() 수행
  }

  poll() {
    if (this.heap.length === 1) {
      return this.heap.pop(); // 힙의 크기가 1인 경우, 힙에서 값을 삭제하고 return
    }

    const value = this.heap[0]; // 힙의 최소값(루트 노드의 값)을 저장
    this.heap[0] = this.heap.pop(); // 힙의 끝에 있는 값을 루트 노드로 이동
    this.bubbleDown(); // 루트 노드에서 bubbleDown을 수행
    return value; // 삭제한 최소값 return
  }

  /**
   * 삽입연산
   *
   * 힙에 값을 삽입할 때 부모와 비교해서 값이 크거나 작으면
   * (최소 힙의 경우 부모가 자신보다 크면, 최대 힙의 경우 부모가 자신보다 작으면)
   * 부모와 값을 교환해서 올바르게 정렬이 될 때 까지 올라가는 것을 bubbleUp이라 한다.
   */

  bubbleUp() {
    let index = this.heap.length - 1; // 새로운 노드가 추가된 위치
    let parentIdx = Math.floor((index - 1) / 2); // 부모 노드의 위치

    while (
      // 부모 노드가 존재하고 새로운 노드가 부모 노드보다 작은 경우
      this.heap[parentIdx] &&
      this.heap[index][1] < this.heap[parentIdx][1]
    ) {
      this.swap(index, parentIdx); // 두 노드 값을 교체
      index = parentIdx; // 인덱스를 부모 노드의 인덱스로 변경
      parentIdx = Math.floor((index - 1) / 2); // 새로운 부모 노드의 인덱스 계산
    }
  }

  /**
   * 삭제연산
   *
   * 루트 노드를 삭제하고 마지막 노드를 루트로 올리고 루트 노드와 아래 자식 노드들과 비교해서 값이 크거나 작으면
   * (최소 힙의 경우 자식이 자신보다 값이 작으면, 최대 힙의 경우 자식이 자신보다 값이 크면)
   * 자식과 값을 교환해서 올바르게 정렬이 될 때 까지 내려가는 것을 bubbleDown이라 한다
   */

  bubbleDown() {
    let index = 0; // 루트 노드의 index
    let leftIdx = index * 2 + 1; // 왼쪽 자식 노드의 인덱스
    let rightIdx = index * 2 + 2; // 오른쪽 자식 노드의 인덱스

    while (
      // 왼쪽 자식 노드가 존재하면서 값이 루트 노드보다 작거나, 오른쪽 자식 노드가 존재하면서 값이 루트 노드보다 작은 경우
      (this.heap[leftIdx] && this.heap[leftIdx][1] < this.heap[index][1]) ||
      (this.heap[rightIdx] && this.heap[rightIdx][1] < this.heap[index][1])
    ) {
      let smallerIdx = leftIdx; //왼쪽 자식 노드가 더 작다고 가정
      if (
        this.heap[rightIdx] &&
        this.heap[rightIdx][1] < this.heap[smallerIdx]
      ) {
        // 오른쪽 자식 노드가 더 작다면 오른쪽 자식 노드의 index로 변경
        smallerIdx = rightIdx;
      }

      this.swap(index, smallerIdx); // 두 노드의 값을 교체
      index = smallerIdx; // index를 더 작은 값의 자식 노드의 index로 교체
      leftIdx = index * 2 + 1; //왼쪽 자식 노드의 index 계산
      rightIdx = index * 2 + 2; // 오른쪽 자식 노드의 index 계산
    }
  }
}
