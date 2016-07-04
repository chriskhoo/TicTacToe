// Player use cases: make choices (select square, reset game)
// System use cases: switch players, check winner, alert winner


// 1. we need a game board: so create a 3x3 (HTML)

// 2. Player O clicks on grid, we mark a O
//   2.0 create array with board
// var board = [0,0,0,0,0,0,0,0,0];
// var tiles = document.getElementsByClass('tiles');
// var currentPlayer = 1;
// var win = false;

//   2.1 listen for click on grid - map each div to a value on the array (done!)

// when clicked
// 2.2 check to see if square is filled, do nothing if filled (done!)

// 2.3 if not filled, add an image (done!)

// 2.4 update the board array with the current player (done!)

// 2.5 check to see if the current player has won
function checkwin(){
  if(board[0]&&board[1]&&board[2] || board[3]&&board[4]&&board[5] || board[6]&&board[7]&&board[8] || board[0]&&board[3]&&board[6] || board[1]&&board[4]&&board[7] || board[2]&&board[5]&&board[8] || board[0]&&board[4]&&board[8] || board[2]&&board[4]&&board[6])
  {win= true;}
  else{
    win= false;
  }
}

//  2.5 if player has won display congratulations
if(win){
  alert('Player'+currentPlayer+' has won the game!');
// 2.6 ask if they want to restart the game

}

// 2.7 if player has not won, move onto next player
else {
  nextPlayer();
}

// 3. computer switches the current player (done!)
//   3.1 Change the header to display the second player's turn (done!)
//   3.2 Change the inputs for player X accordingly (picture, array input etc.)


// 4. game restart



//call functions
linkBoard();
