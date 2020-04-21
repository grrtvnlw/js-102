function ticTacToe(arr) {
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < arr.length; j++) {
    //         console.log(arr[i][j])
    //     }
    // }
    // row 1 across
    if (arr[0][0] == arr[0][1] && arr[0][0] == arr[0][2]) {
        return arr[0][0];
    }
    // column 1 down
    else if (arr[0][0] == arr[1][0] && arr[0][0] == arr[2][0]) {
        return arr[0][0];
    } 
    // colum 2 down
    else if (arr[0][1] == arr[1][1] && arr[0][1] == arr[2][1]) {
        return arr[0][1];
    } 
    // column 3 down
    else if (arr[0][2] == arr[1][2] && arr[0][1] == arr[2][2]) {
        return arr[0][2];
    } 
    // row 2 across
    else if (arr[1][0] == arr[1][1] && arr[1][0] == arr[1][2]) {
        return arr[1][0];
    }
    // row 3 across
    else if (arr[2][0] == arr[2][1] && arr[2][0] == arr[2][2]) {
        return arr[2][0];
    } 
    else {
        return null
    }

    
}

console.log(ticTacToe([
    ['O', 'O', 'O'],
    ['X', null, 'X'],
    [null, 'X', null],
  ]));

  console.log(ticTacToe([
    ['O', 'X', 'O'],
    ['O', 'X', null],
    [null, 'X', null],
  ]));

  console.log(ticTacToe([
    ['O', 'X', 'O'],
    ['O', 'O', null],
    [null, 'X', 'X'],
  ]));

  console.log(ticTacToe([
    ['O', 'X', 'X'],
    ['O', null, 'X'],
    [null, null, 'X'],
  ]));

  console.log(ticTacToe([
    ['O', 'X', 'X'],
    ['O', null, 'X'],
    ['O', null, null],
  ]));

  console.log(ticTacToe([
    [null, 'X', 'X'],
    ['O', null, 'X'],
    ['O', 'O', 'O'],
  ]));

  console.log(ticTacToe([
    [null, 'X', 'X'],
    ['X', 'X', 'X'],
    ['O', null, '0'],
  ]));