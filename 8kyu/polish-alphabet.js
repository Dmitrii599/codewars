// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.
//     Your task is to change the letters with diacritics:
//     ą -> a,
//     ć -> c,
//     ę -> e,
//     ł -> l,
//     ń -> n,
//     ó -> o,
//     ś -> s,
//     ź -> z,
//     ż -> z
// assert.strictEqual(correctPolishLetters("Jędrzej Błądziński"), "Jedrzej Bladzinski");
// assert.strictEqual(correctPolishLetters("Lech Wałęsa"), "Lech Walesa");
// assert.strictEqual(correctPolishLetters("Maria Skłodowska-Curie"), "Maria Sklodowska-Curie");

function correctPolishLetters (string) {
    const replaceLetter = {
        "ą": "a", "ć": "c", "ę": "e", "ł": "l", "ń": "n",
        "ó": "o", "ś": "s", "ź": "z", "ż": "z",
        "Ą": "A", "Ć": "C", "Ę": "E", "Ł": "L", "Ń": "N",
        "Ó": "O", "Ś": "S", "Ź": "Z", "Ż": "Z"
    }
    return string.replace(/[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/g, char => replaceLetter[char]);

}
let correctText = "Jędrzej Błądziński";
console.log(correctPolishLetters(correctText));
