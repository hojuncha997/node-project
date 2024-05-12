const path = require("path");

const fullPath = path.join("some", "work", "ex.txt");
console.log(fullPath);
// some\work\ex.txt

// 절대 경로
console.log(`파일 절대경로: ${__filename}`);

const dir = path.dirname(__filename);
console.log(`경로만: ${dir}`);

// 파일 절대경로: D:\personal\react-workspace\node-project\node-textbook\basic\03\path.js
// 경로만: D:\personal\react-workspace\node-project\node-textbook\basic\03

const fn = path.basename(__filename);
const fn2 = path.basename(__filename, ".js");
console.log(`파일 이름 : ${fn}`);
console.log(`파일 이름(확장자 제외) : ${fn2}`);

// 파일 이름 : path.js
// 파일 이름(확장자 제외) : path

const ext = path.extname(__filename); // 확장자 추출
console.log(`파일 확장자 : ${ext}`); //  .js
console.log(path.basename(__filename, ext)); // .js를 제외하고 파일명만 추출

// 파일 확장자 : .js
// path

const parsePath = path.parse(__filename);
console.log(parsePath);
// {
//     root: 'D:\\',
//     dir: 'D:\\personal\\react-workspace\\node-project\\node-textbook\\basic\\03',
//     base: 'path.js',
//     ext: '.js',
//     name: 'path'
//   }
