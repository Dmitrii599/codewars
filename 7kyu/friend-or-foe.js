// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// assert.deepEqual(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"])
// assert.deepEqual(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"])
// assert.deepEqual(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"])
// assert.deepEqual(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"])

//Best solution
// function friend(friends) {
//     return friends.filter(name => name === 4)
// }


function friend(friends){
    let result = []
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length === 4) {
            result.push(friends[i])
        }
    }
    return result
}

const myFriends = ["Ryan", "Kieran", "Mark"]
console.log(friend(myFriends))