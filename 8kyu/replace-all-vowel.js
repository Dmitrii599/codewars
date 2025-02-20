// ❓ Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// doTest("Hi!", "H!!");
// doTest("!Hi! Hi!", "!H!! H!!");
// doTest("aeiou", "!!!!!");
// doTest("ABCDE", "!BCD!");

// ‼️Best solution:
// function replace(s){
//     return s.replace(/[aeoiu]/ig, '!')
// }

// ❗ My solution:
function replace(s) {
    return s.replace(/a/g, "!").replace(/e/g, "!").replace(/i/g, "!").replace(/o/g, "!").replace(/u/g, "!")
            .replace(/A/g, "!").replace(/E/g, "!").replace(/I/g, "!").replace(/O/g, "!").replace(/U/g, "!")
}
replace("Hi!");
replace("!Hi! Hi!");
replace("aeiou");
replace("ABCDE");

console.log(replace("Hi!"));
console.log(replace("!Hi! Hi!"));
console.log(replace("aeiou"));
console.log(replace("ABCDE"));
