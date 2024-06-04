const fs = require("fs");

// readMe.txt 파일을 읽어와서 readStream 변수에 할당한다. 이후부터는 readStream에 발생하는 이벤트에 따라 알맞은 콜백함수를 지정하면 된다.
const readStream = fs.createReadStream("./readMe.txt");

// 스트림에서 데이터를 읽어올 때마다(data이벤트가 발생할 때마다) 버퍼 크기만큼씩 가져와서 터미널 창에 표시한다. 여기서 chunk는 한 번에 읽어오는 데이터
readStream.on("data", (chunk) => {
  console.log("new chunk received");
  console.log(chunk);
});

// 스트림에서 데이터를 모두 읽어왔다면(end 이벤트가 발생했다면) 파일 읽기가 끝났다고 화면에 표시한다.
readStream.on("end", () => {
  console.log("finished reading data");
});

// 리더블 스틀미에서 오류가 발생하면(error 이벤트 발생) 오류 메시지를 터미널 창에 표시한다.
readStream.on("error", (err) => {
  console.log(`Error reading the file: ${err}`);
});

// $ node stream-1.js
// new chunk received
// <Buffer 73 64 66 73 64 64 66 73 64 66 73 64 64 66 73 64 66 73 64 64 66 73 64 66 73 64 64 66 73 64 66 73 64 64 66 73 64 66 73 64 64 66 73 64 66 73 64 64 66 73 ... 65486 more bytes>
// new chunk received
// <Buffer 73 64 64 66 73 64 66 73 64 64 66 73 64 66 73 64 64 66 73 64 66 73 64 64 66 73 64 66 73 64 64 66 73 64 66 73 64 64 66 73 64 66 73 64 64 66 73 64 66 73 ... 65486 more bytes>
// new chunk received
// <Buffer 64 64 66 73 64 66 73 64 64 66 73 64 66 73 64 64 66 73 64 66 73 64 64 66 73 64 66 73 64 64 66 73 64 66 73 64 64 66 73 64 66 73 64 64 66 73 64 66 73 64 ... 23444 more bytes>
// finished reading data
