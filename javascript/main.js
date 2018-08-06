$(document).ready(function() {

let boardOne =        [ [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];
let boardTwo =        [ [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];
let boardThree =      [ [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];

let boardDownOne =    [ [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];
let boardDownTwo =    [ [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];
let boardDownThree =  [ [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];

let squaresOne =      [ [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];
let squaresTwo =      [ [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];
let squaresThree =    [ [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];

let completeBoard =   [ [ [[], [], []],
                          [[], [], []],
                          [[], [], []]  ],
                        [ [[], [], []],
                          [[], [], []],
                          [[], [], []]  ],
                        [ [[], [], []],
                          [[], [], []],
                          [[], [], []]  ]  ];

let puzzleBoard =     [ [ [['', '', ''], ['', '', ''], ['', '', '']],
                          [['', '', ''], ['', '', ''], ['', '', '']],
                          [['', '', ''], ['', '', ''], ['', '', '']]  ],
                        [ [['', '', ''], ['', '', ''], ['', '', '']],
                          [['', '', ''], ['', '', ''], ['', '', '']],
                          [['', '', ''], ['', '', ''], ['', '', '']]  ],
                        [ [['', '', ''], ['', '', ''], ['', '', '']],
                          [['', '', ''], ['', '', ''], ['', '', '']],
                          [['', '', ''], ['', '', ''], ['', '', '']]  ] ];

let puzzleBoardSolve =[ [ [['', '', ''], ['', '', ''], ['', '', '']],
                          [['', '', ''], ['', '', ''], ['', '', '']],
                          [['', '', ''], ['', '', ''], ['', '', '']]  ],
                        [ [['', '', ''], ['', '', ''], ['', '', '']],
                          [['', '', ''], ['', '', ''], ['', '', '']],
                          [['', '', ''], ['', '', ''], ['', '', '']]  ],
                        [ [['', '', ''], ['', '', ''], ['', '', '']],
                          [['', '', ''], ['', '', ''], ['', '', '']],
                          [['', '', ''], ['', '', ''], ['', '', '']]  ] ];

let puzzleBoardDown = [ [ [['', '', ''], ['', '', ''], ['', '', '']],
                          [['', '', ''], ['', '', ''], ['', '', '']],
                          [['', '', ''], ['', '', ''], ['', '', '']]  ],
                        [ [['', '', ''], ['', '', ''], ['', '', '']],
                          [['', '', ''], ['', '', ''], ['', '', '']],
                          [['', '', ''], ['', '', ''], ['', '', '']]  ],
                        [ [['', '', ''], ['', '', ''], ['', '', '']],
                          [['', '', ''], ['', '', ''], ['', '', '']],
                          [['', '', ''], ['', '', ''], ['', '', '']]  ] ];

let puzzleBoardDownSolve =  [ [ [['', '', ''], ['', '', ''], ['', '', '']],
                                [['', '', ''], ['', '', ''], ['', '', '']],
                                [['', '', ''], ['', '', ''], ['', '', '']]  ],
                              [ [['', '', ''], ['', '', ''], ['', '', '']],
                                [['', '', ''], ['', '', ''], ['', '', '']],
                                [['', '', ''], ['', '', ''], ['', '', '']]  ],
                              [ [['', '', ''], ['', '', ''], ['', '', '']],
                                [['', '', ''], ['', '', ''], ['', '', '']],
                                [['', '', ''], ['', '', ''], ['', '', '']]  ] ];

let puzzleBoardSquare =     [ [ [['', '', ''], ['', '', ''], ['', '', '']],
                                [['', '', ''], ['', '', ''], ['', '', '']],
                                [['', '', ''], ['', '', ''], ['', '', '']]  ],
                              [ [['', '', ''], ['', '', ''], ['', '', '']],
                                [['', '', ''], ['', '', ''], ['', '', '']],
                                [['', '', ''], ['', '', ''], ['', '', '']]  ],
                              [ [['', '', ''], ['', '', ''], ['', '', '']],
                                [['', '', ''], ['', '', ''], ['', '', '']],
                                [['', '', ''], ['', '', ''], ['', '', '']]  ] ];

let puzzleBoardSquareSolve =[ [ [['', '', ''], ['', '', ''], ['', '', '']],
                                [['', '', ''], ['', '', ''], ['', '', '']],
                                [['', '', ''], ['', '', ''], ['', '', '']]  ],
                              [ [['', '', ''], ['', '', ''], ['', '', '']],
                                [['', '', ''], ['', '', ''], ['', '', '']],
                                [['', '', ''], ['', '', ''], ['', '', '']]  ],
                              [ [['', '', ''], ['', '', ''], ['', '', '']],
                                [['', '', ''], ['', '', ''], ['', '', '']],
                                [['', '', ''], ['', '', ''], ['', '', '']]  ] ];

let puzzleBoardFix = '';
let solutionBoard = [];
let numberFix = 1;
let sumBoardOne = 0;
let sumBoardTwo = 0;
let sumBoardThree = 0;
let patternCorrector = true;
let checkBoard = [];
let test = undefined;
let testContent = undefined;
let testExtract = undefined;

const createBoardOne = boardOne => {
  for (let i = 0; i<boardOne.length; i++) {
    for (let j = 0; j<boardOne[i].length; j++) {
      for (let k = 0; k<boardOne[i][j].length; k++) {
        let number = Math.floor(Math.random()* 9 + 1);
        let n = boardOne[i][0].indexOf(number)*boardOne[i][1].indexOf(number)*boardOne[i][2].indexOf(number);
        let m = boardDownOne[k][j].indexOf(number);
        let o = squaresOne[j][0].indexOf(number)*squaresOne[j][1].indexOf(number)*squaresOne[j][2].indexOf(number);
        if (n === -1 && m === -1 && o === -1) {
          boardOne[i][j][k] = number;
          boardDownOne[k][j][i] = number;
          squaresOne[j][i][k] = number;
        }
        else {
          let counter = 0;
          while (boardOne[i][0].indexOf(numberFix)*
                 boardOne[i][1].indexOf(numberFix)*
                 boardOne[i][2].indexOf(numberFix) !== -1 ||
                 boardDownOne[k][j].indexOf(numberFix) !== -1 ||
                 squaresOne[j][0].indexOf(numberFix)*
                 squaresOne[j][1].indexOf(numberFix)*
                 squaresOne[j][2].indexOf(numberFix) !== -1) {
                   counter++;

                   if (numberFix > 8) {
                     numberFix = 1;
                   }
                   else {
                     numberFix++;
                   }

                   if (counter > 9) {
                     break;
                   }

            }

          if (counter < 9) {
          boardOne[i][j][k] = numberFix;
          boardDownOne[k][j][i] = numberFix;
          squaresOne[j][i][k] = numberFix;
          }

        }
        sumBoardOne = sumBoardOne + boardOne[i][j][k];
      }
    }
  }
  if (sumBoardOne === 135 ) {
    completeBoard[0][0][0].push(boardOne[0][0][0], boardOne[0][0][1], boardOne[0][0][2]);
    completeBoard[0][0][1].push(boardOne[0][1][0], boardOne[0][1][1], boardOne[0][1][2]);
    completeBoard[0][0][2].push(boardOne[0][2][0], boardOne[0][2][1], boardOne[0][2][2]);
    completeBoard[0][1][0].push(boardOne[1][0][0], boardOne[1][0][1], boardOne[1][0][2]);
    completeBoard[0][1][1].push(boardOne[1][1][0], boardOne[1][1][1], boardOne[1][1][2]);
    completeBoard[0][1][2].push(boardOne[1][2][0], boardOne[1][2][1], boardOne[1][2][2]);
    completeBoard[0][2][0].push(boardOne[2][0][0], boardOne[2][0][1], boardOne[2][0][2]);
    completeBoard[0][2][1].push(boardOne[2][1][0], boardOne[2][1][1], boardOne[2][1][2]);
    completeBoard[0][2][2].push(boardOne[2][2][0], boardOne[2][2][1], boardOne[2][2][2]);
  }
  else {

    boardOne =      [   [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];

    boardDownOne =  [   [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],];

    squaresOne =    [   [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],];
                        sumBoardOne = 0;

    createBoardOne(boardOne);

  }

};

const createBoardTwo = boardTwo => {
  for (let i = 0; i<boardTwo.length; i++) {
    for (let j = 0; j<boardTwo[i].length; j++) {
      for (let k = 0; k<boardTwo[i][j].length; k++) {
        let number = Math.floor(Math.random()* 9 + 1);
        let n = boardTwo[i][0].indexOf(number)*boardTwo[i][1].indexOf(number)*boardTwo[i][2].indexOf(number);
        let m = boardDownOne[k][j].indexOf(number)*boardDownTwo[k][j].indexOf(number)*boardDownThree[k][j].indexOf(number);
        let o = squaresTwo[j][0].indexOf(number)*squaresTwo[j][1].indexOf(number)*squaresTwo[j][2].indexOf(number);
        if (n === -1 && m === -1 && o === -1) {
          boardTwo[i][j][k] = number;
          boardDownTwo[k][j][i] = number;
          squaresTwo[j][i][k] = number;
        }
        else {
          let counter = 0;
          while (boardTwo[i][0].indexOf(numberFix)*
                 boardTwo[i][1].indexOf(numberFix)*
                 boardTwo[i][2].indexOf(numberFix) !== -1 ||
                 boardDownOne[k][j].indexOf(numberFix)*
                 boardDownTwo[k][j].indexOf(numberFix)*
                 boardDownThree[k][j].indexOf(numberFix)!== -1 ||
                 squaresTwo[j][0].indexOf(numberFix)*
                 squaresTwo[j][1].indexOf(numberFix)*
                 squaresTwo[j][2].indexOf(numberFix) !== -1
                ) {
                    counter++;
                    if (numberFix > 8) {
                          numberFix = 1;
                        }
                    else {
                      numberFix++;
                        }
                    if (counter > 9) {
                      break;
                      }
                  }
          if (counter < 9) {
          boardTwo[i][j][k] = numberFix;
          boardDownTwo[k][j][i] = numberFix;
          squaresTwo[j][i][k] = numberFix;
          }


        }
      sumBoardTwo = sumBoardTwo + boardTwo[i][j][k];
    }
  }
}
if (sumBoardTwo === 135 ) {
  completeBoard[1][0][0].push  (boardTwo[0][0][0], boardTwo[0][0][1], boardTwo[0][0][2]);
  completeBoard[1][0][1].push  (boardTwo[0][1][0], boardTwo[0][1][1], boardTwo[0][1][2]);
  completeBoard[1][0][2].push  (boardTwo[0][2][0], boardTwo[0][2][1], boardTwo[0][2][2]);
  completeBoard[1][1][0].push  (boardTwo[1][0][0], boardTwo[1][0][1], boardTwo[1][0][2]);
  completeBoard[1][1][1].push  (boardTwo[1][1][0], boardTwo[1][1][1], boardTwo[1][1][2]);
  completeBoard[1][1][2].push  (boardTwo[1][2][0], boardTwo[1][2][1], boardTwo[1][2][2]);
  completeBoard[1][2][0].push  (boardTwo[2][0][0], boardTwo[2][0][1], boardTwo[2][0][2]);
  completeBoard[1][2][1].push  (boardTwo[2][1][0], boardTwo[2][1][1], boardTwo[2][1][2]);
  completeBoard[1][2][2].push  (boardTwo[2][2][0], boardTwo[2][2][1], boardTwo[2][2][2]);
}
else {

     boardTwo =      [  [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];

     boardDownTwo =  [  [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],];

    squaresTwo =     [  [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],];
                        sumBoardTwo = 0;
  createBoardTwo(boardTwo);


}
};

const createBoardThree = boardThree => {
  for (let i = 0; i<boardThree.length; i++) {
    for (let j = 0; j<boardThree[i].length; j++) {
      for (let k = 0; k<boardThree[i][j].length; k++) {
        let number = Math.floor(Math.random()* 9 + 1);
        let n = boardThree[i][0].indexOf(number)*boardThree[i][1].indexOf(number)*boardThree[i][2].indexOf(number);
        let m = boardDownOne[k][j].indexOf(number)*boardDownTwo[k][j].indexOf(number)*boardDownThree[k][j].indexOf(number);
        let o = squaresThree[j][0].indexOf(number)*squaresThree[j][1].indexOf(number)*squaresThree[j][2].indexOf(number);
        if (n === -1 && m === -1 && o === -1) {
          boardThree[i][j][k] = number;
          boardDownThree[k][j][i] = number;
          squaresThree[j][i][k] = number;
        }
        else {
          let counter = 0;
          while (boardThree[i][0].indexOf(numberFix)*
                 boardThree[i][1].indexOf(numberFix)*
                 boardThree[i][2].indexOf(numberFix) !== -1 ||
                 boardDownOne[k][j].indexOf(numberFix)*
                 boardDownTwo[k][j].indexOf(numberFix)*
                 boardDownThree[k][j].indexOf(numberFix)!== -1 ||
                 squaresThree[j][0].indexOf(numberFix)*
                 squaresThree[j][1].indexOf(numberFix)*
                 squaresThree[j][2].indexOf(numberFix) !== -1
                ) {
                    counter++;
                    if (numberFix > 8) {
                          numberFix = 1;
                        }
                    else {
                      numberFix++;
                        }
                    if (counter > 9) {
                      break;
                      }
                  }
          if (counter < 9) {
          boardThree[i][j][k] = numberFix;
          boardDownThree[k][j][i] = numberFix;
          squaresThree[j][i][k] = numberFix;
          }


        }
      sumBoardThree = sumBoardThree + boardThree[i][j][k];
    }
  }
}
if (sumBoardThree === 135 ) {
  completeBoard[2][0][0].push  (boardThree[0][0][0], boardThree[0][0][1], boardThree[0][0][2]);
  completeBoard[2][0][1].push  (boardThree[0][1][0], boardThree[0][1][1], boardThree[0][1][2]);
  completeBoard[2][0][2].push  (boardThree[0][2][0], boardThree[0][2][1], boardThree[0][2][2]);
  completeBoard[2][1][0].push  (boardThree[1][0][0], boardThree[1][0][1], boardThree[1][0][2]);
  completeBoard[2][1][1].push  (boardThree[1][1][0], boardThree[1][1][1], boardThree[1][1][2]);
  completeBoard[2][1][2].push  (boardThree[1][2][0], boardThree[1][2][1], boardThree[1][2][2]);
  completeBoard[2][2][0].push  (boardThree[2][0][0], boardThree[2][0][1], boardThree[2][0][2]);
  completeBoard[2][2][1].push  (boardThree[2][1][0], boardThree[2][1][1], boardThree[2][1][2]);
  completeBoard[2][2][2].push  (boardThree[2][2][0], boardThree[2][2][1], boardThree[2][2][2]);
  for (let ii = 0; ii<completeBoard.length; ii++) {
    for (let jj = 0; jj<completeBoard[ii].length; jj++) {
      for (let kk = 0; kk<completeBoard[ii][jj].length; kk++) {
        for (let ll = 0; ll<completeBoard[ii][jj][kk].length; ll++) {
        let numberOne = Math.random();
        if (ll === 0) {
          if (puzzleBoard[ii][jj][kk][ll+1] > 0 && puzzleBoard[ii][jj][kk][ll+2] > 0){
            patternCorrector = false;
          }
          else {
            patternCorrector = true;
          }
        }
        else if (ll === 1) {
          if (puzzleBoard[ii][jj][kk][ll+1] > 0 && puzzleBoard[ii][jj][kk][ll-1] > 0){
            patternCorrector = false;
          }
          else {
            patternCorrector = true;
          }
        }

        else {
          if (puzzleBoard[ii][jj][kk][ll-1] > 0 && puzzleBoard[ii][jj][kk][ll-2] > 0){
            patternCorrector = false;
          }
          else {
            patternCorrector = true;
          }
        }
          if (numberOne < 0.5 && patternCorrector === true) {
            puzzleBoard[ii][jj][kk][ll] = completeBoard[ii][jj][kk][ll];
            puzzleBoardDown[kk][ll][ii][jj] = completeBoard[ii][jj][kk][ll];
            puzzleBoardSquare[ii][kk][jj][ll] = completeBoard[ii][jj][kk][ll];
            puzzleBoardSolve[ii][jj][kk][ll] = completeBoard[ii][jj][kk][ll];
              }

          else {solutionBoard.push(completeBoard[ii][jj][kk]);}
      }
    }
    }
}
}

else {

     boardThree =      [  [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];

     boardDownThree =  [  [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];

    squaresThree =     [  [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];
                        sumBoardThree = 0;

  createBoardThree(boardThree);


}
};

function fullBoard() {

  boardOne = [ [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                          [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                          [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];
  boardTwo = [ [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                          [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                          [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];
  boardThree =[ [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                          [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                          [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];

  boardDownOne =    [ [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                          [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                          [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];
  boardDownTwo =    [ [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                          [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                          [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];
  boardDownThree =  [ [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                          [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                          [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];

  squaresOne =      [ [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                          [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                          [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];
  squaresTwo =      [ [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                          [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                          [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];
  squaresThree =    [ [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                          [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                          [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];

  completeBoard =    [ [ [[], [], []],
                            [[], [], []],
                            [[], [], []]  ],
                          [ [[], [], []],
                            [[], [], []],
                            [[], [], []]  ],
                          [ [[], [], []],
                            [[], [], []],
                            [[], [], []]  ]  ];

  puzzleBoard =    [ [ [['', '', ''], ['', '', ''], ['', '', '']],
                            [['', '', ''], ['', '', ''], ['', '', '']],
                            [['', '', ''], ['', '', ''], ['', '', '']]  ],
                          [ [['', '', ''], ['', '', ''], ['', '', '']],
                            [['', '', ''], ['', '', ''], ['', '', '']],
                            [['', '', ''], ['', '', ''], ['', '', '']]  ],
                          [ [['', '', ''], ['', '', ''], ['', '', '']],
                            [['', '', ''], ['', '', ''], ['', '', '']],
                            [['', '', ''], ['', '', ''], ['', '', '']]  ] ];

puzzleBoardDown =  [ [ [['', '', ''], ['', '', ''], ['', '', '']],
                          [['', '', ''], ['', '', ''], ['', '', '']],
                          [['', '', ''], ['', '', ''], ['', '', '']]  ],
                        [ [['', '', ''], ['', '', ''], ['', '', '']],
                          [['', '', ''], ['', '', ''], ['', '', '']],
                          [['', '', ''], ['', '', ''], ['', '', '']]  ],
                        [ [['', '', ''], ['', '', ''], ['', '', '']],
                          [['', '', ''], ['', '', ''], ['', '', '']],
                          [['', '', ''], ['', '', ''], ['', '', '']]  ] ];

puzzleBoardSquare =[ [ [['', '', ''], ['', '', ''], ['', '', '']],
                          [['', '', ''], ['', '', ''], ['', '', '']],
                          [['', '', ''], ['', '', ''], ['', '', '']]  ],
                        [ [['', '', ''], ['', '', ''], ['', '', '']],
                          [['', '', ''], ['', '', ''], ['', '', '']],
                          [['', '', ''], ['', '', ''], ['', '', '']]  ],
                        [ [['', '', ''], ['', '', ''], ['', '', '']],
                          [['', '', ''], ['', '', ''], ['', '', '']],
                          [['', '', ''], ['', '', ''], ['', '', '']]  ] ];

puzzleBoardSquareDown =[ [ [['', '', ''], ['', '', ''], ['', '', '']],
                        [['', '', ''], ['', '', ''], ['', '', '']],
                        [['', '', ''], ['', '', ''], ['', '', '']]  ],
                      [ [['', '', ''], ['', '', ''], ['', '', '']],
                        [['', '', ''], ['', '', ''], ['', '', '']],
                        [['', '', ''], ['', '', ''], ['', '', '']]  ],
                      [ [['', '', ''], ['', '', ''], ['', '', '']],
                        [['', '', ''], ['', '', ''], ['', '', '']],
                        [['', '', ''], ['', '', ''], ['', '', '']]  ] ];

puzzleBoardSolve = [ [ [['', '', ''], ['', '', ''], ['', '', '']],
                          [['', '', ''], ['', '', ''], ['', '', '']],
                          [['', '', ''], ['', '', ''], ['', '', '']]  ],
                        [ [['', '', ''], ['', '', ''], ['', '', '']],
                          [['', '', ''], ['', '', ''], ['', '', '']],
                          [['', '', ''], ['', '', ''], ['', '', '']]  ],
                        [ [['', '', ''], ['', '', ''], ['', '', '']],
                          [['', '', ''], ['', '', ''], ['', '', '']],
                          [['', '', ''], ['', '', ''], ['', '', '']]  ] ];

  solutionBoard = [];
  numberFix = 1;
  sumBoardOne = 0;
  sumBoardTwo = 0;
  sumBoardThree = 0;
createBoardOne(boardOne);
createBoardTwo(boardTwo);
createBoardThree(boardThree);
};

function solve() {
let p = 0;
let guardian = [500];
while (guardian[p] !== guardian[p-1]) {

for (let a = 0; a < 3; a++) {
  for (let b = 0; b < 3; b++) {
    for (let c = 0; c < 3; c++) {
      for (let d = 0; d < 3; d++) {
        if (puzzleBoardSolve[a][b][c][d] < 1) {
          let solutionArray = [];
          for (let f = 1; f < 10; f++) {
            if (puzzleBoardSolve[a][b].join("").includes(f) && solutionArray.includes(f) == false) {
              solutionArray.push(f);
            }
            if (puzzleBoardDownSolve[c][d].join("").includes(f) && solutionArray.includes(f) == false) {
              solutionArray.push(f);
            }
            if (puzzleBoardSquareSolve[a][c].join("").includes(f) && solutionArray.includes(f) == false) {
              solutionArray.push(f);
            }
          }
          if (solutionArray.length === 8) {
            puzzleBoardSolve[a][b][c][d] = 45 - eval(solutionArray.join('+'));
            puzzleBoardDownSolve[c][d][a][b] = puzzleBoardSolve[a][b][c][d];
            puzzleBoardSquareSolve[a][c][b][d] = puzzleBoardSolve[a][b][c][d];
          }
        }
      }
    }
  }
}
p++;

  puzzleBoardFix = (eval( puzzleBoardSolve[0][0][0].join('+0') + '+0' +
                    puzzleBoardSolve[0][0][1].join('+0') + '+0' +
                    puzzleBoardSolve[0][0][2].join('+0') + '+0' +
                    puzzleBoardSolve[0][1][0].join('+0') + '+0' +
                    puzzleBoardSolve[0][1][1].join('+0') + '+0' +
                    puzzleBoardSolve[0][1][2].join('+0') + '+0' +
                    puzzleBoardSolve[0][2][0].join('+0') + '+0' +
                    puzzleBoardSolve[0][2][1].join('+0') + '+0' +
                    puzzleBoardSolve[0][2][2].join('+0') + '+0' +
                    puzzleBoardSolve[1][0][0].join('+0') + '+0' +
                    puzzleBoardSolve[1][0][1].join('+0') + '+0' +
                    puzzleBoardSolve[1][0][2].join('+0') + '+0' +
                    puzzleBoardSolve[1][1][0].join('+0') + '+0' +
                    puzzleBoardSolve[1][1][1].join('+0') + '+0' +
                    puzzleBoardSolve[1][1][2].join('+0') + '+0' +
                    puzzleBoardSolve[1][2][0].join('+0') + '+0' +
                    puzzleBoardSolve[1][2][1].join('+0') + '+0' +
                    puzzleBoardSolve[1][2][2].join('+0') + '+0' +
                    puzzleBoardSolve[2][0][0].join('+0') + '+0' +
                    puzzleBoardSolve[2][0][1].join('+0') + '+0' +
                    puzzleBoardSolve[2][0][2].join('+0') + '+0' +
                    puzzleBoardSolve[2][1][0].join('+0') + '+0' +
                    puzzleBoardSolve[2][1][1].join('+0') + '+0' +
                    puzzleBoardSolve[2][1][2].join('+0') + '+0' +
                    puzzleBoardSolve[2][2][0].join('+0') + '+0' +
                    puzzleBoardSolve[2][2][1].join('+0') + '+0' +
                    puzzleBoardSolve[2][2][2].join('+0')));

                    guardian.push(puzzleBoardFix);

  }
  if (puzzleBoardFix < 405) {
    let signal = 0;
                      for (let p = 0; p < 3; p++) {
                        for (let q = 0; q < 3; q++ ) {
                          for (let r = 0; r < 3; r++) {
                            for (let s = 0; s < 3; s++) {

                              if (puzzleBoardSolve[p][q][r][s] == 0) {
                                while(signal < 1) {
                                puzzleBoard[p][q][r][s] = completeBoard[p][q][r][s];
                                puzzleBoardDown[r][s][p][q] = completeBoard[p][q][r][s];
                                puzzleBoardSquare[p][r][q][s] = completeBoard[p][q][r][s];
                                puzzleBoardSolve =    [ [ [[], [], []],
                                                          [[], [], []],
                                                          [[], [], []]  ],
                                                        [ [[], [], []],
                                                          [[], [], []],
                                                          [[], [], []]  ],
                                                        [ [[], [], []],
                                                          [[], [], []],
                                                          [[], [], []]  ] ];

                                puzzleBoardDownSolve =[ [ [[], [], []],
                                                          [[], [], []],
                                                          [[], [], []]  ],
                                                        [ [[], [], []],
                                                          [[], [], []],
                                                          [[], [], []]  ],
                                                        [ [[], [], []],
                                                          [[], [], []],
                                                          [[], [], []]  ] ];

                                puzzleBoardSquareSolve =  [ [ [[], [], []],
                                                              [[], [], []],
                                                              [[], [], []]  ],
                                                            [ [[], [], []],
                                                              [[], [], []],
                                                              [[], [], []]  ],
                                                            [ [[], [], []],
                                                              [[], [], []],
                                                              [[], [], []]  ] ];

                                                          for (let pp = 0; pp < 3; pp++) {
                                                            for (let qq = 0; qq < 3; qq++ ) {
                                                              for (let rr = 0; rr < 3; rr++) {
                                                                for (let ss = 0; ss < 3; ss++) {


                                                                  puzzleBoardSolve[pp][qq][rr].push(puzzleBoard[pp][qq][rr][ss]);
                                                                  puzzleBoardDownSolve[rr][ss][pp].push(puzzleBoard[pp][qq][rr][ss]);
                                                                  puzzleBoardSquareSolve[pp][rr][qq].push(puzzleBoard[pp][qq][rr][ss]);
                                                                  signal++;

                                                                }
                                                              }
                                                            }
                                                          }



                              }
                            }
                          }
                        }
                      }
                    }
                      solve();

                    }



};


function build() {

  for (let ww = 0; ww < 3; ww++) {
    for (let xx = 0; xx < 3; xx++) {
      for (let yy = 0; yy < 3; yy++) {
        for (let zz = 0; zz < 3; zz++) {

          $('.section' + ww + ' .row' + xx + ' .column' + yy + zz).html(puzzleBoard[ww][xx][yy][zz]);
          $('.section' + ww + ' .row' + xx + ' .column' + yy + zz).removeClass('noselect');

          if (puzzleBoard[ww][xx][yy][zz] > 0) {
            $('.section' + ww + ' .row' + xx + ' .column' + yy + zz).addClass('noselect');
          }

        }
      }
    }
  }

};
function check() {
  checkBoard = [];
  for (let ww = 0; ww < 3; ww++) {
    for (let xx = 0; xx < 3; xx++) {
      for (let yy = 0; yy < 3; yy++) {
        for (let zz = 0; zz < 3; zz++) {
          checkBoard.push(completeBoard[ww][xx][yy][zz]);
        }
      }
    }
  }
  test = document.getElementById("board");
  testContent = (test.textContent);
  testExtract = testContent.match(/\d+/g).map(Number);
};

fullBoard();
solve();
build();


  $Columns=$('.column');
  $Columns.click(function() {
    $Columns.removeClass('highlight');
    $(this).addClass('highlight');
  });

$('#answer .button').click(function() {
  let log = [];
  log.push($(this).attr("value"));
  $('.highlight').html(log);
});

$('#delete').click(function() {
  $('.highlight').html('');
});

$('#newgame').click(function() {

  fullBoard();
  solve();
  build();
  minutes = 0;
  seconds = 0;
  tens = 0;

});

$('#reset').click(function() {
  minutes = 0;
  seconds = 0;
  tens = 0;
  build();
});

$('#pause').click(function() {
  alert('Paused - click ok to continue. ');
});

$('#submit').click(function() {
  check();
  if (checkBoard.join() == testExtract.join()) {
    alert('Well Done!! You completed the puzzle in ' + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2) + ':' + ('0' + tens).slice(-2) + ' !!');
    minutes = 0;
    seconds = 0;
    tens = 0;
    fullBoard();
    solve();
    build();

  }
  else {
    alert('Keep going! You\'re not there yet!');
  }

});

let minutes = 0;
let seconds = 0;
let tens = 0;


setInterval(function timer() {

tens++;

if (tens > 99) {
  seconds++;
  tens = 0;
}

if (seconds > 59) {
  minutes++;
  seconds = 0;
}
$('.display').html(('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2) + ':' + ('0' + tens).slice(-2));
}, 10);



});
