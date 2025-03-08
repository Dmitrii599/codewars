// Write a function which calculates the average of the numbers in a given array.
// Note: Empty arrays should return 0.
// tester([1,1,1], 1);
// tester([1,2,3], 2);
// tester([1,2,3,4], 2.5);

function findAverage(array) {
    if (array.length === 0) return 0;
    return array.reduce((sum, num) => sum + num, 0) / array.length;

}
let tester = [1, 1, 1];
let tester2 = [1, 2, 3, 4];
let tester3 = [];

console.log(findAverage(tester));
console.log(findAverage(tester2));
console.log(findAverage(tester3));