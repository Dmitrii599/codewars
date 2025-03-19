// Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties
// for each of types presented in input. Each property should contain an array of corresponding values.
// keep order of values like in input array
// if type is not presented in input, no corresponding property are expected
// assert.deepEqual(separateTypes(['a', 1, 2, false, 'b']), {number: [1, 2],  string: ['a', 'b'], boolean: [false]});
// assert.deepEqual(separateTypes(['a', 1, 2 ]), {number: [1, 2],  string: ['a']});

function separateTypes(input) {
    return  input.reduce((acc, item) => {
        let type = typeof item;
        if (!acc[type]) {
            acc[type] = [];
        }
        acc[type].push(item);
        return acc;
    }, {});
}

let array1 = ['a', 1, 2, false, 'b'];
console.log(separateTypes(array1));