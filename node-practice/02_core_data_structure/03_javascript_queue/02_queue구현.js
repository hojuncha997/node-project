class Queue {
  // 생성자
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  // 데이터를 집어 넣는 메서드
  enqueue(item) {
    this.items[this.tailIndex] = item; // items배열의 꼬리 인덱스에 들어온 매개변수를 할당하고 꼬리 인덱스 값을 증가시킨다.
    this.tailIndex++;
  }

  // 데이터를 삭제하는 메서드
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex]; //items배열에서 헤드 인덱스를 가진 요소를 삭제한다.
    this.headIndex++; // 헤드 인덱스를 1 증가시킨다.
    return item; // 원래 헤드 인덱슬르 반환한다.
  }

  // 현재 헤드 값을 리턴하는 함수
  peek() {
    return this.items[this.headIndex];
  }

  // 현재 큐의 길이를 반환하는 함수.
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

// 구현된 큐 라이브러리 사용
const queue = new Queue();

queue.enqueue(5);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(7);
queue.dequeue();
queue.enqueue(1);
queue.enqueue(4);
queue.dequeue();

// 먼저 들어온 순서대로 반복해서 출력하기
while (queue.getLength() !== 0) {
  console.log(queue.dequeue());
}

// 3
// 7
// 1
// 4
