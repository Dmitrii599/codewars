// Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer
// should be set to null. The solution should work for array of any length.

let persons = [{
    name: "Dima",
    height: 172,
    weight: 85,
}, {
    name: "Marina",
    height: 165,
    weight: 58,
}]
for (let i = 0; i < persons.length; i++) {
    persons[i].age = null
}

// persons.forEach(q => q.age = null);
console.log(persons);