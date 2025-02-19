// ❓ Description:
// Write a function to split a string and convert it into an array of words.
// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]
// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// assert.deepEqual(stringToArray("Robin Singh"), ["Robin", "Singh"]);
// assert.deepEqual(stringToArray("I love arrays they are my favorite"), ["I", "love", "arrays", "they", "are", "my", "favorite"]);

// ❗ Solution:
function stringToArray(string){
    // code code code
    let result = string.split(" ");
    return result
}

stringToArray("Robin Singh");
stringToArray("I love arrays they are my favorite");

console.log(stringToArray("Robin Singh"));
console.log(stringToArray("I love arrays they are my favorite"));