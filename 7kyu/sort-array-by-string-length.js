// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest
// to longest.
// Test.assertDeepEquals(sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]);
// });
// it("Test 2",function(){
//     Test.assertDeepEquals(sortByLength(["", "Moderately", "Brains", "Pizza"]),["", "Pizza", "Brains", "Moderately"]);
// });
// it("Test 3",function(){
//     Test.assertDeepEquals(sortByLength(["Longer", "Longest", "Short"]),["Short", "Longer", "Longest"]);
// });

function sortByLength (array) {
    return array.sort((a, b) => a.length - b.length)
}

const stringArray = ["Beg", "Life", "I", "To"]
console.log(sortByLength(stringArray));