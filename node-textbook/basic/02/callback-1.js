function order(coffee, callback) {
  console.log(`${coffee} 주문접수`);
  setTimeout(() => {
    callback(coffee);
  }, 3000);
}

const display = (result) => {
  console.log(`${result} 완료`);
};

order("아메리카노", display);

// 아메리카노 주문접수
// 3초 경과
// 아메리카노 완료
