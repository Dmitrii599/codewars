// ❓ Description:
// Task
// Give you a function animal, accept 1 parameter:obj like this:
// {name:"dog",legs:4,color:"white"}
// and return a string like this:
// "This white dog has 4 legs."
// assert.strictEqual(animal({ name: "rabbit", legs: 4, color: "gray" }), "This gray rabbit has 4 legs.");
// assert.strictEqual(animal({ name: "cock", legs: 2, color: "red" }), "This red cock has 2 legs.");


// ❗ My solution:
function animal(obj){
    return `У этой ${obj.color} ${obj.name} ${obj.legs} ноги.`;
}

console.log(animal({name: "dog", color: "white", legs: 4}));