const fs = require("fs");

// 동기적으로 파일 읽기
let files = fs.readdirSync("./");
console.log(files);

console.log("Code is done");

/*

$ node node-sync.js 
[
  '05-1 노드와_비동기_처리.txt',
  '05-2 논블로킹IO.txt',
  '05-3 이벤트_루프.txt',
  '05-4 노드의_비동기_패턴.txt',
  'blocking-3.js',
  'node-sync.js'
]
Code is done

*/
