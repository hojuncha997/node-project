function displayA() {
  console.log("A");
}

function displayB(callback) {
  setTimeout(() => {
    console.log("B");
    //    콜백함수
    callback();
  }, 2000);
}

function displayC() {
  console.log("C");
}

displayA();
displayB(displayC);

// A
// B
// C
