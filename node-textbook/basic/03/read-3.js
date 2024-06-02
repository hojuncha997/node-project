const fs = require("fs");

fs.readFile("./example.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data);
});

// node read-3.js
// Node.js is an open-source, cross-platform JavaScript runtime environment.
// Node.js는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임입니다.
