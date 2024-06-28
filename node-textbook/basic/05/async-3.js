const fs = require("fs");

// 비동기
let files = fs.readdir("./", (err, files) => {
  if (err) {
    console.error(err);
  }
  console.log(files);
});

// 동기
console.log("Code is done");

/*
$ node async-3.js 
Code is done
[
  '05-1 노드와_비동기_처리.txt',
  '05-2 논블로킹IO.txt',
  '05-3 이벤트_루프.txt',
  '05-4 노드의_비동기_패턴.txt',
  'async-3.js',
  'blocking-3.js',
  'node-sync.js'
]
*/
