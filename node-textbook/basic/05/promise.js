const fs = require("fs").promises;

fs.readdir("./")
  .then((result) => console.log(result))
  .catch((err) => console.error(err));

/*
$ node promise.js 
[
  '05-1 노드와_비동기_처리.txt',
  '05-2 논블로킹IO.txt',
  '05-3 이벤트_루프.txt',
  '05-4 노드의_비동기_패턴.txt',
  'async-3.js',
  'blocking-3.js',
  'node-sync.js',
  'promise.js'
]
  */
