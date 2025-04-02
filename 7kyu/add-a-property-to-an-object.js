// Write a function that adds a named property to an object. It must be possible to set the property to a new value.
// If the property already exists on the object, and error should be thrown.

// it("Should set the value of the property", function() {
//     Test.expect(obj.name === "Palle");
// });
// it("Should allow setting the new property to another value", function() {
//     obj.name = "Dylan";
//     Test.expect(obj.name === "Dylan");
// });
// it("Should throw an error if the property already exists", function() {
//     Test.expectError("Did not throw expected error", function() {
//         addProperty(obj, "name", "Palle");
//     });

// Best solution
//      if (prop in obj) throw new Error()
//      obj[prop] = value

function addProperty(obj, prop, value) {
    if (obj.hasOwnProperty(prop)) {
        throw new Error("Такое свойство уже задано!")
    }
    obj[prop] = value;
}
let persona = {
    name: "Dima",
    age: 41,
    job: "Spiculiant",
}
addProperty(persona, "age", 40)
console.log(persona);