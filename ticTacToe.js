function ticTacToe(arr) {
    // row 1 across
    if (arr[0][0] == arr[0][1] && arr[0][0] == arr[0][2]) {
        return arr[0][0] + " Row 1 across!";
    }
    // column 1 down
    else if (arr[0][0] == arr[1][0] && arr[0][0] == arr[2][0]) {
        return arr[0][0] + " Column 1 down!";
    } 
    // colum 2 down
    else if (arr[0][1] == arr[1][1] && arr[0][1] == arr[2][1]) {
        return arr[0][1] + " Column 2 down!";
    } 
    // column 3 down
    else if (arr[0][2] == arr[1][2] && arr[0][1] == arr[2][2]) {
        return arr[0][2] + " Column 3 down!";
    } 
    // row 2 across
    else if (arr[1][0] == arr[1][1] && arr[1][0] == arr[1][2]) {
        return arr[1][0] + " Row 2 across!";
    }
    // row 3 across
    else if (arr[2][0] == arr[2][1] && arr[2][0] == arr[2][2]) {
        return arr[2][0] + " Row 3 across!";
    } 
    // diagonal down
    else if (arr[0][0] == arr[1][1] && arr[0][0] == arr[2][2]) {
        return arr[0][0] + " Diagonal top left to bottom right!";
    }
    // diagonal up
    else if (arr[2][0] == arr[1][1] && arr[2][0] == arr[0][2]) {
        return arr[2][0] + " Diagonal bottom left to top right!";
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

  console.log(ticTacToe([
    ['X', null, 'X'],
    [null, 'X', 'X'],
    ['O', null, 'X'],
  ]));

  console.log(ticTacToe([
    ['X', null, 'O'],
    ['X', 'O', 'X'],
    ['O', null, 'X'],
  ]));