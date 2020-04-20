function printBanner(str) {
    const strLength = str.length;
    const line = "*".repeat(strLength + 4) + "\n";
    const text = `* ${str} *\n`;
    console.log(line + text + line);
}

printBanner('Welcome to DigitalCrafts');
printBanner('Welcome to WestWorld');