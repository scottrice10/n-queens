/*           _
 ___  ___ | |_   _____ _ __ ___
 / __|/ _ \| \ \ / / _ \ '__/ __|
 \__ \ (_) | |\ V /  __/ |  \__ \
 |___/\___/|_| \_/ \___|_|  |___/

 */

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var board = new Board({n:n});

  for(var row = 0; row < n; row++){
    for(var column = 0; column < n; column++){
      board.togglePiece(row, column);
      if(board.hasAnyRooksConflicts()){
        board.togglePiece(row, column);
      }
    }
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board));
  return board.rows();
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var result = [];
  var board = new Board({n:n});
  var solver = function(current) {
    if(current.length === n) {
      result.push(current);
    } else {
      for(var row = 0; row < n; row++) {
        var length = current.length;
        for(var column = 0; column < length; column++) {
          var prev = current[column];
          if(prev === row) {
            break;
          }
        }

        if(column === length) {
          solver(current.concat([row]));
        }
      }
    }
  };

  solver([]);
  var solutionCount = result.length;

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  console.log("Solution: ", solutionCount);
  return solutionCount;
};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var result = [];
  var board = new Board({n:n});
  var solver = function(current) {
    if(current.length === n) {
      result.push(current);
    } else {
      for(var row = 0; row < n; row++) {
        var length = current.length;
        for(var column = 0; column < length; column++) {
          var prev = current[column];
          if(prev === row) {
            break;
          }

          if(prev - (length - column) === row) {
            break
          }

          if(prev + (length - column) === row) {
            break;
          }
        }

        if(column === length) {
          solver(current.concat([row]));
        }
      }
    }
  };

  solver([]);
  return result[0];
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var result = [];
  var board = new Board({n:n});
  var solver = function(current) {
    if(current.length === n) {
      result.push(current);
    } else {
      for(var row = 0; row < n; row++) {
        var length = current.length;
        for(var column = 0; column < length; column++) {
          var prev = current[column];
          if(prev === row) {
            break;
          }

          if(prev - (length - column) === row) {
            break
          }

          if(prev + (length - column) === row) {
            break;
          }
        }

        if(column === length) {
          solver(current.concat([row]));
        }
      }
    }
  };

  solver([]);
  var solutionCount = result.length;

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
