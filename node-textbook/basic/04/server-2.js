const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(3000, () => {
  console.log("3000포트에서 서버 실행 중");
});

/*

<ref *2> IncomingMessage {
  _readableState: ReadableState {
    objectMode: false,
    highWaterMark: 16384,
    buffer: BufferList { head: null, tail: null, length: 0 },
    length: 0,
    pipes: [],
    flowing: null,
    ended: false,
    endEmitted: false,
    reading: false,
    constructed: true,
    sync: true,
    needReadable: false,
    emittedReadable: false,
    readableListening: false,
    resumeScheduled: false,
    errorEmitted: false,
    emitClose: true,
    autoDestroy: true,
    destroyed: false,
    errored: null,
    closed: false,
    closeEmitted: false,
    defaultEncoding: 'utf8',
    awaitDrainWriters: null,
    multiAwaitDrain: false,
    readingMore: true,
    dataEmitted: false,
    decoder: null,
    encoding: null,
    [Symbol(kPaused)]: null
  },
 
...

 },
  _consuming: false,
  _dumped: false,
  [Symbol(kCapture)]: false,
  [Symbol(kHeaders)]: {
    host: 'localhost:3000',
    connection: 'keep-alive',
    'cache-control': 'max-age=0',
    'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    dnt: '1',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,    *;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'sec-fetch-site': 'none',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-user': '?1',
    'sec-fetch-dest': 'document',
    'accept-encoding': 'gzip, deflate, br, zstd',
    'accept-language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7,ja;q=0.6,de;q=0.5'
  },
  [Symbol(kHeadersCount)]: 32,
  [Symbol(kTrailers)]: null,
  [Symbol(kTrailersCount)]: 0
}

*/
