// Code your JavaScript / jQuery solution here
var turn = 0
var id = ""
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
  if (checkHorizontal() || checkVertical() || checkDiagonal()) {
    var message = `Player ${player()} Won!`
    setMessage(message)
    return true
  }else{
    return false
  }
}

function doTurn(square) {
  updateState(square);
  if (checkWinner()) {
    clearBoard();
    // turn = 0
  }else if (checkFull()){
    return setMessage("Tie game.")
  }else{
    turn += 1;
  }
}

function attachListeners() {

}

$(document).ready(function attachListeners() {
  var table = $('table tr td')
  var save = document.getElementById('save')
  var previous = document.getElementById('previous')
  var clear = document.getElementById('clear')

  table.on("click", function() {
    if (this.innerHTML == "") {
      doTurn(this);
    };
  });

  save.addEventListener('click', function(e) {
    // if (@game.id) {
    //   $.patch()
    // }

    if (id == "") {
      $.post('/games', function(data) {
        id = data['data']['id']
      })
    }else {
      $.patch(`/games/${id}`)
    }

  })

  previous.addEventListener('click', function(e) {
    $.get('/games')
  })

  clear.addEventListener('click', function(e){
  	clearBoard();
  })
});


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
  turn = 0
  })
}
