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

function updateState(td) {
  td.innerHTML = player();
}

function setMessage(text) {
  document.getElementById('message').innerHTML = `${text}`
}

function checkWinner() {
  // if (checkHorizontal() || checkVertical() || checkDiagonal() == true) {
  //   setMessage(player() + 'is the winner')
  }
}

function doTurn(element) {
  updateState(element);
  checkWinner();
  turn += 1;
}

function attachListeners() {

}

function checkHorizontal() {
  var table = $('table tr td')
  // debugger;

  table[0].innerHTML == table[1].innerHTML && table[0].innerHTML == table[2].innerHTML ||
  table[3].innerHTML == table[4].innerHTML && table[3].innerHTML == table[5].innerHTML ||
  table[6].innerHTML == table[7].innerHTML && table[6].innerHTML == table[8].innerHTML
  debugger
}

function checkVertical() {
  table[0].innerHTML == table[3].innerHTML && table[0].innerHTML == table[6].innerHTML ||
  table[1].innerHTML == table[4].innerHTML && table[1].innerHTML == table[7].innerHTML ||
  table[2].innerHTML == table[5].innerHTML && table[2].innerHTML == table[8].innerHTML
}

function checkDiagonal() {
  table[0].innerHTML == table[4].innerHTML && table[0].innerHTML == table[8].innerHTML ||
  table[2].innerHTML == table[4].innerHTML && table[2].innerHTML == table[6].innerHTML
}
