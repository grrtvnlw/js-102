function longLongVowels(str) {
    let newString = '';
    let previousLetter = '';
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];

    str = str.split('');
    for (let i = 0; i < str.length; i++) {
        if (str[i] === previousLetter) {
            for (let n = 0; n < vowels.length; n++) {
                if (str[i] === vowels[n]) {
                    newString += str[i].repeat(4);
                }
            }
        }
        else {
            newString += str[i];
        }
        previousLetter = str[i];
    }
    return newString;
}

console.log(longLongVowels("Good"));
console.log(longLongVowels("Cheese"));
console.log(longLongVowels("Man"));