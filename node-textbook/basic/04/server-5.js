const http = require("http");

const server = http.createServer((req, res) => {
  const { method, url } = req;
  res.setHeader("Content-Type", "text/plain");

  // URL에 따라 다른 응답을 보내는 코드
  if (method === "GET" && url === "/home") {
    res.statusCode = 200;
    res.end("Home");
  } else if (method === "GET" && url === "/about") {
    res.statusCode = 200;
    res.end("About");
  } else {
    res.statusCode = 404;
    res.end("NOT FOUND");
  }
});

server.listen(3000, () => {
  console.log("3000포트에서 서버 실행 중");
});
