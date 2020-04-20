function printBox(x, y) {
    const outerLine = "*".repeat(x) + "\n";
    const innerLine = "*" + " ".repeat(x - 2) + "*\n";
    console.log(outerLine + innerLine.repeat(y - 2) + outerLine);
}

printBox(4, 6);
printBox(3, 3);
printBox(6, 4);
printBox(8, 12);
printBox(12, 8);