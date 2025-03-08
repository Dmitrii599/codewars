// Write a function that returns the total surface area and volume of a box.
// The given input will be three positive non-zero integers: width, height, and depth.
// The output will be language dependant, so please check sample tests for the corresponding data type,
// (list, tuple, struct, query, et cetera).
// assert.deepEqual(getSize(4, 2, 6), [88, 48]);
// assert.deepEqual(getSize(10, 10, 10), [600, 1000]);
// assert.deepEqual(getSize(4, 2, 6)[0], 88);
// assert.deepEqual(getSize(4, 2, 6)[1], 48);

function getSize(width, height, depth) {
    let result = []
    let volume = width * height * depth;
    let area = (width * height * 2) + (width * depth * 2) + (height * depth * 2);
    result.push(volume, area)
    return result;
}
let box1 = [4, 2, 6];
let box2 = [10, 10, 10];

console.log(getSize(...box1));
console.log(getSize(...box2));