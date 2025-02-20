// ❓ Description:
// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature,' +
// ' Help Timmy with his string template so it works as he expects!

// assert.strictEqual(buildString('Cheese','Milk','Chocolate'), 'I like Cheese, Milk, Chocolate!', 'Return the correct String');
// assert.strictEqual(buildString('Cheese','Milk'), 'I like Cheese, Milk!', 'Return the correct String');
// assert.strictEqual(buildString('Chocolate'), 'I like Chocolate!', 'Return the correct String');

// ‼️Best solution:
//  My ;)
// ❗ My solution:
function buildString(...template){
    return `I like ${template.join(', ')}!`;
}
buildString('Cheese','Milk','Chocolate');
buildString('Cheese','Milk');
buildString('Cheese');

console.log(buildString("Cheese","Milk","Chocolate"));
console.log(buildString("Cheese","Milk"));
console.log(buildString("Chocolate"));