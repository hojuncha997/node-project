const fs = require("fs");

if (fs.existsSync("./text")) {
  console.log("folder already exists");
} else {
  fs.mkdir("./test", (err) => {
    if (err) {
      console.error(err);
    }
    console.log("foler created");
  });
}
// $ node dir-1.js
// foler created
