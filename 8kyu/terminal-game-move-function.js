// ❓DESCRIPTION:
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces
// indicated by the dice two times. Create a function for the terminal game that takes the current position of
// the hero and the roll (1-6) and return the new position

// В этой игре герой ходит слева направо. Игрок бросает кубик и дважды перемещается на указанное кубиком количество
// клеток.Создайте функцию для терминальной игры, которая берет текущую позицию героя и бросок (1-6) и возвращает
// новую позицию

// ❗SOLUTIONS:
function move (position, roll) {
    // return the new position
    return position + (roll * 2);
}
move(0, 4);
move(3, 6);
move(2, 5);

console.log(move(0, 4));
console.log(move(3, 6));
console.log(move(2, 5));