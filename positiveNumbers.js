function positiveNumbers(arr) {
    newArray = []
    arr.forEach(number => {
        if (number >= 0) {
            newArray.push(number)
        }
    });
    return newArray;
}

console.log(positiveNumbers([1, -3, 5, -3, 0]));
console.log(positiveNumbers([1, 2, 3]));
console.log(positiveNumbers([-1, -2, -3]));