const fs = require("fs");

fs.appendFile("./text-2.txt", "\n\n 새로운 내용 추가", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("appending to file");
});

// $ node write-5.js
// appending to file

// Node.js is an open-source, cross-platform JavaScript runtime environment.
// Node.js는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임입니다.

//  새로운 내용 추가
