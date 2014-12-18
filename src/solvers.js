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
  var solutionCount = 0;
  var findSolution = function(row, column, pieceCount, board){
    if(pieceCount === 0){
      solutionCount++;
    } else {
      for(var x = 0; x < n; x++){
        if(board.hasRowConflictAt(x)){
          continue;
        } else {
          for(var y = 0; y < n; y++){
            if(x === row && y === column) {
              continue;
            }
            board.togglePiece(x, y);
            if(board.hasColConflictAt(y)){
              board.togglePiece(x, y);
            } else {
              findSolution(row, column, pieceCount - 1, board);
            }
          }
        }
      }
    }
  };


  for(var row = 0; row < n; row++){
    for(var column = 0; column < n; column++){
      var board = new Board({n:n});
      board.togglePiece(row, column);
      findSolution(row, column, n, board);
    }
  }

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  console.log("Solution: ", solutionCount)
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
