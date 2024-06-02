const fs = require("fs");

fs.readdir("./", (err, files) => {
  if (err) {
    console.error(err);
  }
  console.log(files);
});

// node list-2.js
// [ '3-1 path모듈', '3-2 fs모듈', 'list-1.js', 'list-2.js', 'path.js' ]
