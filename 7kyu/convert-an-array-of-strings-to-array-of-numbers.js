// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.
// ie:["1", "2", "3"] to [1, 2, 3]
// Note that you can receive floats as well.
// assert.sameOrderedMembers(toNumberArray(["1.1","2.2","3.3"]), [1.1,2.2,3.3]);

function toNumberArray(stringArray){
    return stringArray.map(Number);
    // let result = [];
    // for (let i = 0; i < stringArray.length; i++){
    //     result.push(Number(stringArray[i]));
    // }
    // return result;
}
let array1 = ["1.1","2.2","3.3"];
console.log(toNumberArray(array1));