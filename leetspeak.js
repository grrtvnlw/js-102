function leetspeak(str) {
    let newStr = '';
    str.split('').forEach(letter => {
        if (letter == "A" || letter == "a") {
            newStr += "4";
        } else if (letter == "E" || letter == "e") {
            newStr += "3";
        } else if (letter == "G" || letter == "g") {
            newStr += "6";
        } else if (letter == "I" || letter == "i") {
            newStr += "1";
        } else if (letter == "O" || letter == "o") {
            newStr += "0";
        } else if (letter == "S" || letter == "s") {
            newStr += "5";
        } else if (letter == "T" || letter == "t") {
            newStr += "7";
        } else {
            newStr += letter;
        }
    });
    return newStr;
}

console.log(leetspeak("leet"));
console.log(leetspeak("I am a leet programmer"));
console.log(leetspeak("aegiostAEGIOST"))