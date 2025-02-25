// ❓ Description:
// Given an array of integers your solution should find the smallest integer.

// assert.strictEqual(findSmallestInt([78,56,232,12,8]),8, `findSmallestInt([78,56,232,12,8])`);
// assert.strictEqual(findSmallestInt([78,56,232,12,18]),12, `findSmallestInt([78,56,232,12,18])`);
// assert.strictEqual(findSmallestInt([78,56,232,412,228]),56, `findSmallestInt([78,56,232,412,228])`);
// assert.strictEqual(findSmallestInt([78,56,232,12,0]),0, `findSmallestInt([78,56,232,12,0])`);
// assert.strictEqual(findSmallestInt([1,56,232,12,8]),1, `findSmallestInt([1,56,232,12,8])`);

// ‼️Best solution:
// function findSmallestInt(arr) {
//     return Math.min(...arr);
// }

// ❗ My solution:
function findSmallestInt(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

let arr = [78,56,232,12,8];
let arr2 = [78,56,232,12,18];
let arr3 = [78,56,232,412,228];
let arr4 = [78,56,232,12,0];
let arr5 = [1,56,232,12,8];

console.log(findSmallestInt(arr));
console.log(findSmallestInt(arr2));
console.log(findSmallestInt(arr3));
console.log(findSmallestInt(arr4));
console.log(findSmallestInt(arr5));