// ❓ Description:
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.

// Test.assertEquals(getAverage([2,2,2,2]),2);
// Test.assertEquals(getAverage([1,2,3,4,5,]),3);
// Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);

// ‼️Best solution:
// function getAverage(marks){
// return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
// }

// ❗ My solution:
function getAverage(marks){
    let result = 0;
    for (let i = 0; i < marks.length; i++) {
        result += marks[i] / marks.length;
    }
    return Math.floor(result);
}
let arr1 = [2, 2, 2, 2];
let arr2 = [1, 2, 3, 4, 5];
let arr3 = [1, 1, 1, 1, 1, 1, 1, 2];

console.log(getAverage(arr1));
console.log(getAverage(arr2));
console.log(getAverage(arr3));