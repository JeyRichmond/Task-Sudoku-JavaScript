function validSolution(board){
    // We check each line
    for (var i = 0; i < 9; i++) {
      var row = [];
      for (var j = 0; j < 9; j++) {
        row.push(board[i][j]);
      }
      if (!isValidSet(row)) {
        return false;
      }
    }
  
    // Check each column
    for (var i = 0; i < 9; i++) {
      var column = [];
      for (var j = 0; j < 9; j++) {
        column.push(board[j][i]);
      }
      if (!isValidSet(column)) {
        return false;
      }
    }
  
    // Check each 3x3 subgrid
    for (var i = 0; i < 9; i += 3) {
      for (var j = 0; j < 9; j += 3) {
        var square = [];
        for (var k = 0; k < 3; k++) {
          for (var l = 0; l < 3; l++) {
            square.push(board[i+k][j+l]);
          }
        }
        if (!isValidSet(square)) {
          return false;
        }
      }
    }
  
    // If all checks are successful, then this is the correct solution
    return true;
  }
  
  // A function that checks if an array contains the correct set of numbers
  function isValidSet(array) {
    for (var i = 1; i <= 9; i++) {
      if (array.indexOf(i) === -1) {
        return false;
      }
    }
    return true;
  }
  