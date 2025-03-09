// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!
// assert.deepEqual(createArray(1),[1]);
// assert.deepEqual(createArray(2),[1,2]);
// assert.deepEqual(createArray(3),[1,2,3]);
// assert.deepEqual(createArray(4),[1,2,3,4]);
// assert.deepEqual(createArray(5),[1,2,3,4,5])

function createArray(number) {
    const newArray = [];
    for (let i = 1; i <= number; i++) {
        newArray.push(i);
    }
    return newArray;
}
let number1 = 1;
console.log(createArray(number1));
let number2 = 2;
console.log(createArray(number2));