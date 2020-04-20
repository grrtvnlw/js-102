function cipher(str, offset) {
    str = str.toLowerCase()
    let newStr = '';
    let strArr = [...str];
    for (let i = 0; i < str.length; i++) {
        let ordValue = strArr[i].charCodeAt(0) + offset;
        if (ordValue > 122) {
            // console.log(ordValue);
            ordValue = ordValue % 122 + 96;
            newStr += String.fromCharCode(ordValue);
        } else {
            newStr += String.fromCharCode(ordValue);
        }
    }
    newStr = newStr[0].toUpperCase() + newStr.slice(1) + '.';
    console.log(newStr);
}

cipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar', 13)