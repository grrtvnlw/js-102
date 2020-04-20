function sumNumbers(arr) {
    sum = 0;
    arr.forEach(num => {
        sum += num;
    });
    return sum;
}

console.log(sumNumbers([1, 4, 8]));
console.log(sumNumbers([5, 5, 10]));