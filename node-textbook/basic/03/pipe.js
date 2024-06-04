const fs = require("fs");

const readStream = fs.createReadStream("./readMe.txt", "utf-8");
const writeStream = fs.createWriteStream("./writePipe.txt");

readStream.pipe(writeStream);

// $ node pipe.js
// ./writePipe.txt 파일 생성하고 안에 내용 적힘
