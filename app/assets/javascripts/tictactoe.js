// Code your JavaScript / jQuery solution here

var turn = 0

// var table = $('table tr td')

function player() {
  if (turn % 2 === 0) {
    return 'X';
  }else{
    return 'O';
  }
}

function updateState(square) {
  square.innerHTML = player();
}

function setMessage(text) {
  document.getElementById('message').innerHTML = `${text}`
}

function checkWinner() {
  if (checkHorizontal() == true || checkVertical() == true || checkDiagonal() == true) {
    var message = `Player ${player()} Won!`
    setMessage(message)
    return true
  }else{
    return false
  }
}

function doTurn(square) {
  if (checkWinner() == true) {
    clearBoard();
    turn = 0
  }else if (checkFull() == true){
    setMessage("Tie game.")
  }else{
    updateState(square);
    turn += 1;
  }
}

function attachListeners() {

}

function checkHorizontal() {
  var table = $('table tr td')
  if (table[0].innerHTML == table[1].innerHTML && table[0].innerHTML == table[2].innerHTML && table[0].innerHTML != "" ||
  table[3].innerHTML == table[4].innerHTML && table[3].innerHTML == table[5].innerHTML && table[3].innerHTML != "" ||
  table[6].innerHTML == table[7].innerHTML && table[6].innerHTML == table[8].innerHTML && table[6].innerHTML != "") {
    return true
  }else{
    return false
  }
}

function checkVertical() {
  var table = $('table tr td')
  if (table[0].innerHTML == table[3].innerHTML && table[0].innerHTML == table[6].innerHTML && table[0].innerHTML != "" ||
  table[1].innerHTML == table[4].innerHTML && table[1].innerHTML == table[7].innerHTML && table[1].innerHTML != "" ||
  table[2].innerHTML == table[5].innerHTML && table[2].innerHTML == table[8].innerHTML && table[2].innerHTML != "") {
    return true
  }else{
    return false
  }
}

function checkDiagonal() {
  var table = $('table tr td')
  if (table[0].innerHTML == table[4].innerHTML && table[0].innerHTML == table[8].innerHTML && table[0].innerHTML != "" ||
  table[2].innerHTML == table[4].innerHTML && table[2].innerHTML == table[6].innerHTML && table[2].innerHTML != "") {
    return true
  }else{
    return false
  }
}

function checkFull() {
  var table = $('table tr td')
  if(table[0].innerHTML != "" && table[1].innerHTML != "" && table[2].innerHTML != "" && table[3].innerHTML != "" && table[4].innerHTML != "" &&
  table[5].innerHTML != "" && table[6].innerHTML != "" && table[7].innerHTML != "" && table[8].innerHTML != "") {
    return true
  }else{
    return false
  }
}

function clearBoard() {
  var squares = document.querySelectorAll('td')
  $.each(squares, function(k, v) {
	v.innerHTML = ""
  })
}
