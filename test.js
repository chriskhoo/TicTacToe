// variable setup
var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var win = false;
var currentPlayer = 1;
var tiles = document.querySelectorAll('.tiles');
var turnCount = 0;
var roundCount = 0;
var player1Score = 0;
var player2Score = 0;
var drawScore = 0;

// listen for click on grid
function linkBoard() {
  for (i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener('click', boardClick);
  }
}


// function when clicked
function boardClick() {
  // if the tile is filled, do nothing;
  if (this.innerHTML) {
    soundInvalid();
    alert("The tile is taken, try another one");
  } else {
    turnCount++;
    // change image on the board
    var playerMove = document.createElement('div');
    if (currentPlayer == 1) {
      playerMove.className = "player1 seed";
      soundPlayer1();
    } else {
      playerMove.className = "player2 seed";
      soundPlayer2();
    }
    this.appendChild(playerMove);

    // play sound of piece on board

    // update the game board array
    if (currentPlayer == 1) {
      board[this.id[4]] = 1;
    } else {
      board[this.id[4]] = -1;
    }

    // set win value
    setwin();

    // check to see if the current player has won
    if (win) {
      roundVictory();
    }

    else if (turnCount == 9) {
      // check to see if it is a drawScore
      soundDraw();
      alert("It's a draw!");
      drawScore++ ;
      updateScoreBoard();
      nextRound();
    }

    else {
      // change player
      nextPlayer();
    }
  }
}

// set victory sequence function
function roundVictory() {
  // play victory music
  soundWin();

  // display winner
  if (currentPlayer == 1) {
    alert("O wins the round!");
    player1Score ++;
  } else {
    alert("X wins the round");
    player2Score ++;
  }
  // update the round scores
  updateScoreBoard();
  nextRound();
}

// set win function
function setwin() {
  var winCon = [];
  winCon[0] = board[0] + board[1] + board[2];
  winCon[1] = board[3] + board[4] + board[5];
  winCon[2] = board[6] + board[7] + board[8];
  winCon[3] = board[0] + board[3] + board[6];
  winCon[4] = board[1] + board[4] + board[7];
  winCon[5] = board[2] + board[5] + board[8];
  winCon[6] = board[0] + board[4] + board[8];
  winCon[7] = board[2] + board[4] + board[6];

  for (i = 0; i < winCon.length; i++) {
    if (winCon[i] == 3 || winCon[i] == -3) {
      win = true;
    }
  }
}


// define player change function & update move display
function nextPlayer() {
  var playerPrompt = document.querySelector('#nextMove');

  if (currentPlayer == 1) {
    currentPlayer = 2;
    playerPrompt.innerHTML = "It's X's turn";
  } else {
    currentPlayer = 1;
    playerPrompt.innerHTML = "It's O's turn";
  }
}

// define clear game function
function clearGame() {
  player1Score = 0;
  player2Score = 0;
  drawScore = 0;
  turnCount = 0;
  updateScoreBoard();
  nextRound();
}

//define next round function
function nextRound() {
  clearBoard();
  makeBoard();
  gameStart();
}

// define update scoreboard function
function updateScoreBoard() {
  document.getElementById('player1Score').innerHTML = "<em>"+player1Score+"</em>";
  document.getElementById('player2Score').innerHTML = "<em>"+player2Score+"</em>";
  document.getElementById('drawScore').innerHTML = "<em>"+drawScore+"</em>";
}

// define clear board function
function clearBoard() {
  var boardSect = document.getElementById('board');
  boardSect.parentNode.removeChild(boardSect);
}

// create board
function makeBoard() {
  // create board

  var boardSect = document.createElement('section');
  boardSect.id = "board";

  // add each tile
  for (i = 0; i < 9; i++) {
    //as a div with the right names
    var tileDiv = document.createElement('div');
    tileDiv.id = "tile" + i;

    // add the right classNames
    tileDiv.className = "tiles";
    if (i === 0 || i === 1 || i === 2) {
      tileDiv.className += " top";
    }
    if (i === 0 || i === 3 || i === 6) {
      tileDiv.className += " left";
    }
    if (i === 2 || i === 5 || i === 8) {
      tileDiv.className += " right";
    }
    if (i === 6 || i === 7 || i === 8) {
      tileDiv.className += " bottom";
    }

    // append tile to board
    boardSect.appendChild(tileDiv);
  }
  // append board
  var grassPatch = document.getElementById('gameDisplay');
  grassPatch.appendChild(boardSect);
}

// starting a new game
function gameStart() {
  // initialize values
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  win = false;
  currentPlayer = 1;
  turnCount = 0;
  tiles = document.querySelectorAll('.tiles');
  // re-link board
  linkBoard();

  // play intro music
  // soundBackground();
  // soundBackground2();
  soundStart();
}

// link restart button
var restartRoundButton = document.getElementById('buttonClearRound');
restartRoundButton.addEventListener('click', nextRound);
//
var restartGameButton = document.getElementById('buttonClearGame');
restartGameButton.addEventListener('click', clearGame);

// define sound functions
function soundPlayer1(){
  document.getElementById("sPlayer1").play();
}
function soundPlayer2(){
  document.getElementById("sPlayer2").play();
}
function soundWin(){
  document.getElementById("sWin").play();
}
function soundDraw(){
  document.getElementById("sDraw").play();
}
function soundInvalid(){
  document.getElementById("sInvalid").play();
}
function soundStart(){
  document.getElementById("sStart").play();
}
function soundBackground(){
  document.getElementById("sBackground").play();
}
function soundBackground2(){
  document.getElementById("sBackground2").play();
}



//call functions at start up
linkBoard();
// soundBackground();
// soundBackground2();
soundStart();
