let result = solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]);
console.log(result);
// 
function solution(array, commands) {
    let result = [];
    for(let i = 0; i < commands.length; i++) {
        let resultArr = array.slice(commands[i][0]-1, commands[i][1]).sort((a, b) => a - b);
        result.push(resultArr[commands[i][2]-1]);
    }
    return result;
}