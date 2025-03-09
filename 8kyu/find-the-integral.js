// Create a function that finds the integral of the expression passed.
// In order to find the integral all you need to do is add one to the exponent (the second argument),
// and divide the coefficient (the first argument) by that new number.
// assert.strictEqual(integrate(3,2), "1x^3");
// assert.strictEqual(integrate(12,5), "2x^6");
// assert.strictEqual(integrate(20,1), "10x^2");
// assert.strictEqual(integrate(40,3), "10x^4");
// assert.strictEqual(integrate(90,2), "30x^3");

function integrate(coefficient, exponent) {
    let sum = coefficient / (exponent + 1); //2
     return sum + "x^" + coefficient / sum;
}
let numbers1 = [12, 5];
console.log(integrate(...numbers1));

let numbers2 = [90, 2];
console.log(integrate(...numbers2));