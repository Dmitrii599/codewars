// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to
// sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or
// the end of the sentence!
// assert.strictEqual(smash(["hello", "world"]), "hello world");
// assert.strictEqual(smash(["hello", "amazing", "world"]), "hello amazing world");
// assert.strictEqual(smash(["this", "is", "a", "really", "long", "sentence"]), "this is a really long sentence");

function smash (words) {
    return words.join(" ")
}
let arr1 = ["Hello", "world"];
console.log(smash(arr1));