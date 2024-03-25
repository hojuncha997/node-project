class Queue {
  constructor() {
    // 딕셔너리 이용
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    const head = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return head;
  }

  peek() {
    // this.를 붙이지 않으면 undefined가 뜬다.
    return this.items[this.headIndex];
  }

  length() {
    return this.tailIndex - this.headIndex;
  }
}

const queue = new Queue();
queue.enqueue(3);
queue.enqueue(9);
queue.enqueue(7);

console.log("head: ", queue.dequeue());
console.log("peek: ", queue.peek());

console.log(queue.length());
