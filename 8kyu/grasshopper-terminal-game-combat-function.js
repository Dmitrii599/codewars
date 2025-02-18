// ❓DESCRIPTION:
// Create a combat function that takes the player's current health and the amount of damage received,' +
// ' and returns the player's new health. Health can't be less than 0.
// Создайте боевую функцию, которая берет текущее здоровье игрока и количество полученного урона, и возвращает
// новое здоровье игрока. Здоровье не может быть меньше 0.

// ❗SOLUTIONS:
function combat(health, damage) {
    // Write your code here
let remainingHealth = health - damage;
if (remainingHealth < 0) {
    remainingHealth = 0
}
    return remainingHealth;
}
combat(100, 15);
console.log(combat(100, 15));
console.log(combat(92, 8));
console.log(combat(20, 30));