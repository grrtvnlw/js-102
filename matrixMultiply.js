function matrixMultiply(arr) {
    let returnArray = [[], []]
    console.log(arr[0][1][0])
    let firstResult = arr[0][0][0] * arr[1][0][0] + arr[0][0][1] * arr[1][1][0];
    let secondResult = arr[0][0][0] * arr[1][0][1] + arr[0][0][1] * arr[1][1][1];
    let thirdResult = arr[0][1][0] * arr[1][0][0] + arr[0][1][1] * arr[1][1][0];
    let fourthResult = arr[0][1][0] * arr[1][0][1] + arr[0][1][1] * arr[1][1][1];;
    returnArray[0].push(firstResult);
    returnArray[0].push(secondResult);
    returnArray[1].push(thirdResult);
    returnArray[1].push(fourthResult);
    console.log(returnArray)

}

matrixMultiply([[[2, 4], [3, 4]], [[5, 2], [3, 1]]]);