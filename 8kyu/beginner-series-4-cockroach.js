// ❓ Description:
// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second,
// rounded down to the integer (= floored).
// For example: 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

// assert.strictEqual(cockroachSpeed(1.08), 30);
// assert.strictEqual(cockroachSpeed(1.09), 30);
// assert.strictEqual(cockroachSpeed(0), 0);

// ❗ Solution:
function cockroachSpeed(s) {
    //Good Luck!
    let speedInASecond = Math.floor(s * 100000 / 3600);
    return speedInASecond
}
cockroachSpeed(1.08);
cockroachSpeed(1.09);
cockroachSpeed(0);

console.log(cockroachSpeed(1.08));
console.log(cockroachSpeed(1.09));
console.log(cockroachSpeed(0));