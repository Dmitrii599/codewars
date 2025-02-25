// ❓ Description:
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

// assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
// assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
// assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);

// ‼️Best solution:

// ❗ My solution:
function sumMix(x) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += Number(x[i]);
    }
    return sum;
}
let arr = [9, 3, "7", "3"];
let arr2 = ['5', '0', 9, 3, 2, 1, '9', 6, 7];
let arr3 = ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'];

console.log(sumMix(arr));
console.log(sumMix(arr2));
console.log(sumMix(arr3));