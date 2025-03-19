// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts
// the number of sheep present in the array (true means present).
// [[undefined], 0],
// [[null], 0],
// [[false], 0],
// [[true], 1],
// [[undefined,null,false,true], 1],
// [[undefined,null,false,true,true,false,null,undefined], 2],
// [[true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true], 17],

function countSheeps(sheep) {
    let result = 0;
    for (let i = 0; i < sheep.length; i++) {
        if (sheep[i] === true) {
            result++
        }
    }
    return result;
}
let stado3 = [false]
let stado6 = [undefined,null,false,true,true,false,null,undefined];
let stado7 = [true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true]
console.log(countSheeps(stado3));
console.log(countSheeps(stado6));
console.log(countSheeps(stado7));