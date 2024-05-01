const users = require("./users-3");
const hello = require("./hello");

console.log(users);
hello(users.user3);
// { user1: 'Kim', user2: 'Lee', user3: 'Choi' }
// Choi 님 안녕하세요
