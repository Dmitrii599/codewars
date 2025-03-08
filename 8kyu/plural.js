// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural
// should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples,
// or 1 sun.
// Test.assertEquals(plural(0), true, "Plural for 0");
// Test.assertEquals(plural(0.5), true, "Plural for 0.5");
// Test.assertEquals(plural(1), false, "Plural for 1");
// Test.assertEquals(plural(100), true, "Plural for 100");
// Test.assertEquals(plural(Infinity), true, "Plural for Infinity");

function plural(n) {
    return n !== 1;
}

console.log(plural(0));
console.log(plural(1));