// ❓ Description:
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively,
// if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

// assert.strictEqual(rentalCarCost(1), 40);
// assert.strictEqual(rentalCarCost(2), 80);

// ❗ Solution:
function rentalCarCost(d) {
    // Your solution here
    let dailyRate = 40;
    let totalCost = d * dailyRate;

    if(d >= 7) {
        totalCost -= 50;
    } else if (d >= 3) {
        totalCost -= 20;
    }
    return totalCost;
}
rentalCarCost(1);
rentalCarCost(2);

console.log(rentalCarCost(1))
console.log(rentalCarCost(2))
console.log(rentalCarCost(5))
console.log(rentalCarCost(8))