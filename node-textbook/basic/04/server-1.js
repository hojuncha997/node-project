const http = require("http");

// 서버 객체 생성
const server = http.createServer((req, res) => {
  console.log("request from client");
});

server.listen(3000, () => {
  console.log("3000포트에서  서버 실행 중");
});
