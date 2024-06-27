const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // 헤더의 Content-Type을 text/html로 설정
  res.setHeader("Content-Type", "text/html");

  // index.html 파일을 읽어와서 전송
  const readStream = fs.createReadStream(__dirname + "/index.html", "utf8");

  // 파일을 읽어오는 스트림을 응답 스트림으로 파이핑. 파이핑이란 두 스트림 사이에 연결하는 것을 의미
  readStream.pipe(res);
});

server.listen(3000, () => {
  console.log("3000포트에서 서버 실행 중");
});
