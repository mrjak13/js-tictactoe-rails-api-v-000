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
  updateState(square);
  if (checkWinner() == true) {
    clearBoard();
    turn = 0
  }else if (checkFull() == true){
    return setMessage("Tie game.")
  }else{
    turn += 1;
  }
}

function attachListeners() {
  // var table = $('table tr td')
  // table[0].addEventListener('click', function(e){
	// doTurn(this);
  // })
  //
  // table[1].addEventListener('click', function(e){
	// doTurn(this);
  // })
  //
  // table[2].addEventListener('click', function(e){
	// doTurn(this);
  // })
  //
  // table[3].addEventListener('click', function(e){
	// doTurn(this);
  // })
  //
  // table[4].addEventListener('click', function(e){
	// doTurn(this);
  // })
  //
  // table[5].addEventListener('click', function(e){
	// doTurn(this);
  // })
  //
  // table[6].addEventListener('click', function(e){
	// doTurn(this);
  // })
  //
  // table[7].addEventListener('click', function(e){
	// doTurn(this);
  // })
  //
  // table[8].addEventListener('click', function(e){
	// doTurn(this);
  // })


  // table.on("click", function() {
  //   doTurn(this);
  // });

  // var squares = document.querySelectorAll('td')
  // for(var x=0; x<squares.length; x++) {
  //   squares[x].addEventListener("click", function(e) {
  //     doTurn(this);
  //   });

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
