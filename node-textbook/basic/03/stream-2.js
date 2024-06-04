const fs = require("fs");

const readStream = fs.createReadStream("./readMe.txt", "utf-8");
const writeStream = fs.createWriteStream("./writeMe.txt");

readStream.on("data", (chunk) => {
  console.log("new chunk received");
  writeStream.write(chunk);
});

// $ node stream-2.js
// new chunk received
// new chunk received
// new chunk received

// ./writeMe.txt 파일도 생성되었음
