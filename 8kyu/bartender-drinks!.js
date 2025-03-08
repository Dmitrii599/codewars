// Complete the function that receives as input a string, and produces outputs according to the following table:
// assert.strictEqual(getDrinkByProfession("jabrOni"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
// assert.strictEqual(getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
// assert.strictEqual(getDrinkByProfession("prOgramMer"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
// assert.strictEqual(getDrinkByProfession("bike ganG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
// assert.strictEqual(getDrinkByProfession("poLiTiCian"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
// assert.strictEqual(getDrinkByProfession("rapper"), "Cristal", "'Rapper' should map to 'Cristal'");
// assert.strictEqual(getDrinkByProfession("pundit"), "Beer", "'Pundit' should map to 'Beer'");
// assert.strictEqual(getDrinkByProfession("Pug"), "Beer", "'Pug' should map to 'Beer'");

function getDrinkByProfession(param){
    const drinks = {
        "Jabroni": "Patron Tequila",
        "School Counselor": "Anything with Alcohol",
        "Programmer": "Hipster Craft Beer",
        "Bike Gang Member": "Moonshine",
        "Politician": "Your tax dollars",
        "Rapper": "Cristal",
        "Pundit": "Beer",
        "Pug": "Beer",
    };
    return drinks[param.toLocaleLowerCase().replace(/\b\w/g, c => c.toUpperCase())] || "Beer";
}

console.log(getDrinkByProfession("Jabroni"));
console.log(getDrinkByProfession("School Counselor"));
console.log(getDrinkByProfession("Pгп"));

