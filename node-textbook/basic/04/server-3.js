const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method); // 요청 메서드 확인

  res.setHeader("Content-Type", "text/plain"); // 응답 헤더 설정
  res.write("Hello Node"); // 응답 바디 설정
  res.end(); // 응답종료 및 전송
});

server.listen(3000, () => {
  console.log("3000포트에서 서버 실행 중");
});

/*

$ node server-3.js
3000포트에서 서버 실행 중
GET
GET

*/
