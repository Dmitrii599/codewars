// ❓ Description:
// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds
// to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.

// assert.strictEqual(mouthSize("toucan"),"wide")
// assert.strictEqual(mouthSize("ant bear"),"wide")
// assert.strictEqual(mouthSize("alligator"),"small")

// ❗ Solution:
function mouthSize(animal) {
    if(animal === "alligator" && "ALLIGATOR") {
        return "small"
    } else {
        return "wide"
    }
}
mouthSize("toucan");
mouthSize("ant bear");
mouthSize("alligator");

console.log(mouthSize("toucan"));
console.log(mouthSize("ant bear"));
console.log(mouthSize("alligator"));