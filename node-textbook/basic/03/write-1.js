const fs = require("fs");

const data = fs.readFileSync("./example.txt", "utf-8");
fs.writeFileSync("./text-1.txt", data);

// text-1.txt 파일이 없던 상태에서 write-1.js파일을 실행하면 현재 폴더에 text-1.txt 파일이 만들어지면서 example.txt파일 내용이 기록된다.

// $ node write-1.js
// Node.js is an open-source, cross-platform JavaScript runtime environment.
// Node.js는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임입니다.
