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
  var solutionFound = false;
  var board = new Board({n:n});
  var solver = function(current) {
    if(current.length === n) {
      solutionFound = true;

      for(var i=0;i<current.length;i++){
        board.togglePiece(i, current[i]);
      }
    } else {
      for(var col = 0; col < n; col++) {
        var length = current.length;
        for(var row = 0; row < length; row++) {
          var prev = current[row];
          if(prev === col) {
            break;
          }
        }

        if(row === length && !solutionFound) {
          solver(current.concat([col]));
        }
      }
    }
  };

  solver([]);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board));
  return board.rows();
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var board = new Board({n:n});
  var solutionCount = 0;
  var solver = function(current) {
    if(current.length === n) {
      solutionCount++;
    } else {
      for(var col = 0; col < n; col++) {
        var length = current.length;
        for(var row = 0; row < length; row++) {
          var prev = current[row];
          if(prev === col) {
            break;
          }
        }

        if(row === length) {
          solver(current.concat([col]));
        }
      }
    }
  };

  solver([]);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  console.log("Solution: ", solutionCount);
  return solutionCount;
};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solutionFound = false;
  var board = new Board({n:n});
  var solver = function(current) {
    if(current.length === n) {
      solutionFound = true;

      for(var i=0;i<current.length;i++){
        board.togglePiece(i, current[i]);
      }
    } else {
      for(var col = 0; col < n; col++) {
        var length = current.length;
        for(var row = 0; row < length; row++) {
          var prev = current[row];
          if(prev === col) {
            break;
          }

          if(prev - (length - row) === col) {
            break
          }

          if(prev + (length - row) === col) {
            break;
          }
        }

        if(row === length && !solutionFound) {
          solver(current.concat([col]));
        }
      }
    }
  };

  solver([]);

  return board.rows();
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n:n});
  var solver = function(current) {
    if(current.length === n) {
      solutionCount++;
    } else {
      for(var col = 0; col < n; col++) {
        var length = current.length;
        for(var row = 0; row < length; row++) {
          var prev = current[row];
          if(prev === col) {
            break;
          }

          if(prev - (length - row) === col) {
            break
          }

          if(prev + (length - row) === col) {
            break;
          }
        }

        if(row === length) {
          solver(current.concat([col]));
        }
      }
    }
  };

  solver([]);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
