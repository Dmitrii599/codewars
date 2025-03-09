// We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?
// assert.strictEqual(numberToString(67), '67');

function numberToString(num) {
    return num.toString()
}
let num = 67;
console.log(numberToString(num));