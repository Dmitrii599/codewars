// ❓ Description:
// This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.
// Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to return an expression(like 28x^7).
// "^1" should not be truncated when exponent = 2.
// it("derive(7, 8)", function() {
//     assert.strictEqual(derive(7,8), "56x^7", "derive(7, 8)");
// });
// it("derive(5, 9)", function() {
//     assert.strictEqual(derive(5,9), "45x^8", "derive(5, 9)");
// });

// ‼️Best solution:
// function derive(a, b) {
//     return (a * b) + "x^" + (b - 1);
// }

// ❗ My solution
function derive(coefficient,exponent) {
    const result = (coefficient * exponent) + "x^" + (exponent - 1);
    return result
}
derive(7,8);
derive(5,9);

console.log(derive(7,8));
console.log(derive(5,9));