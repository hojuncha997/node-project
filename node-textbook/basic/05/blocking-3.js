const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/home") {
    res.end("Home");
  } else if (req.url == "/about") {
    for (let i = 0; i < 1000; i += 1) {
      for (let j = 0; j < 1000; j += 1) {
        console.log(i, j);
      }
    }
    res.end("ABOUT");
  } else {
    res.end("NOT FOUND");
  }
});

server.listen(3000, () => {
  console.log("3000포트에서 서버 실행 중");
});

/*
  이 프로그램을 실행시키고 /about 페이지에 접속하면 
  동기 코드가 끝날 때까지 다른 요청을 처리하지 못한다.
  /about 에 대한 요청 뿐만 아니라 다른 요청도 처리하지 못한다.
*/
