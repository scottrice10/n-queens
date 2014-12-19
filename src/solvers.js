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

window.findSolution = function(row, n, board, checker, callback){
  if(n === row){
    return callback();
  }

  for(var i = 0;i<n;i++){
    board.togglePiece(row, i);

    if(!board[checker]()){
      var result = findSolution(row + 1, n, board, checker, callback);
      if(result){
        return result;
      }
    }

    board.togglePiece(row, i);
  }
};

window.findNRooksSolution = function(n) {
  var board = new Board({n:n});

  var result = findSolution(0, n, board, "hasAnyRooksConflicts", function(){
    return _.map(board.rows(), function(row){
      return row.slice();
    });
  }) || board.rows();

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board));
  return result;
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var board = new Board({n:n});
  var solutionCount = 0;

  findSolution(0, n, board, "hasAnyRooksConflicts", function(){
    solutionCount++;
  });

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  console.log("Solution: ", solutionCount);
  return solutionCount;
};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n:n});

  var result = findSolution(0, n, board, "hasAnyQueensConflicts", function(){
    return _.map(board.rows(), function(row){
      return row.slice();
    });
  }) || board.rows();

  return result;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var board = new Board({ n:n });
  var solutionCount = 0;

  findSolution(0, n, board, "hasAnyQueensConflicts", function(){
    solutionCount++;
  });

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

















