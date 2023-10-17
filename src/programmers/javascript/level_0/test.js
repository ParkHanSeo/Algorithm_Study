const fs = require('fs');
const input = fs.readFileSync('C:/Users/gkstj/git/Algorithm_Study/src/programmers/javascript/level_0/input.txt').toString().split(' ');
// const input2 = fs.readFileSync('/src/programmers/javascript/level_0/input.txt').toString().trim(' ');

let num = input[0];
num = (num%2==0) ? num+" is even" : num+" is odd";
console.log(num);



/*
      홀짝 구분하기

      * 문제 설명
      자연수 n이 입력으로 주어졌을 때 만약 n이 짝수이면 "n is even"을, 
      홀수이면 "n is odd"를 출력하는 코드를 작성해 보세요.

      * 제한사항
      1 ≤ n ≤ 1,000

      * 입출력 예
      입력 #1
      100
      출력 #1
      100 is even
      입력 #2
      1
      출력 #2
      1 is odd
*/