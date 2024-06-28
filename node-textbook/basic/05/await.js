const fs = require("fs").promises;

// async/await를 사용하는 비동기 함수 readDirAsync
async function readDirAsync() {
  try {
    const files = await fs.readdir("./");
    console.log(files);
  } catch {
    console.error(err);
  }
}

// readDirAsync 함수 실행
readDirAsync();

/*
$ node await.js 
[
  '05-1 노드와_비동기_처리.txt',
  '05-2 논블로킹IO.txt',
  '05-3 이벤트_루프.txt',
  '05-4 노드의_비동기_패턴.txt',
  'async-3.js',
  'await.js',
  'blocking-3.js',
  'node-sync.js',
  'promise.js'
]
  */
