const fs = require("fs");

let content = `
=======================
새로운 내용을 추가한다
=======================
`;

fs.writeFileSync("./text-1.txt", content, { flag: "a" });

// $ node write-4.js
// Node.js is an open-source, cross-platform JavaScript runtime environment.
// Node.js는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임입니다.
// =======================
// 새로운 내용을 추가한다
// =======================
