// Given an array of integers, return a new array with each value doubled.
// assert.deepEqual(maps([1, 2, 3]), [2, 4, 6]);
// assert.deepEqual(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]);
// assert.deepEqual(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]);

function maps(x){
    return x.map(n => n * 2);
}
let x = [1, 2, 3]

console.log(maps(x));