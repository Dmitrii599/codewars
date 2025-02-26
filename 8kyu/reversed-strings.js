// ❓ Description:
// Complete the solution so that it reverses the string passed into it.
// assert.strictEqual(solution('world'), 'dlrow');
// assert.strictEqual(solution('hello'), 'olleh');
// assert.strictEqual(solution(''), '');
// assert.strictEqual(solution('h'), 'h');

// ‼️Best solution:
// function solution(str){
// return str.split('').reverse().join('');
// }

// ❗ My solution:
function solution(str){
    let result = [];
    for (let i = str.length - 1; i >= 0; i--) {
        result.push(str[i])
    }
    return result.join("");
}

let str = "world";
let str1 = "hello";
let str2 = "";
let str3 = "h";

console.log(solution(str));
console.log(solution(str1));
console.log(solution(str2));
console.log(solution(str3));