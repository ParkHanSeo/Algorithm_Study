const [n] = require('fs').readFileSync("input.txt").toString().trim().split("\n");
// const [n] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

console.log(Number(n)*Number(n)-Number(n));