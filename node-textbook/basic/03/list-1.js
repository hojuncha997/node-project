const fs = require("fs");
let files = fs.readdirSync("./");
console.log(files);

// [ '3-1 path모듈', '3-2 fs모듈', 'list-1.js', 'path.js' ]
