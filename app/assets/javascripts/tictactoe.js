// Code your JavaScript / jQuery solution here
var turn = 0
var id = ""
var board = []
let currentGame = {}
// var table = $('table tr td')
// function Game(id, state) {
//   this.id = id
//   this.state = state
// }

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
  // var gamesButton = $('div#games button')
  var gameButton = document.querySelectorAll('div#games button')

  table.on("click", function() {
    if (this.innerHTML == "") {
      doTurn(this);
    };
  });

  save.addEventListener('click', function(e) {
    var game = {'state': board}
    if (id != "") {
      $.ajax({
        url: `/games/${id}`,
        data: game,
        dataType: "json",
        method: "PATCH"
      })
    }else{
      $.post('/games', game, function(data){
        id = parseInt(data['data'].id)
        // appendGame(id)
      })
    }
  })

  previous.addEventListener('click', function(e) {
    $.get(`/games`, function(data){
      $.each(data.data, function(k, v) {
      	appendGame(parseInt(v.id))
      }).done
      $('#games button').on('click', function(e) {
        $.get(`/games/${this.innerHTML}`, function(data){
          $.each(document.querySelectorAll('td'), function(k, v){
            v.innerHTML = data.data.attributes.state[k]
          })
        })
      })
    })
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
  setState()
  return board.includes("") ? false : true
}

function clearBoard() {
  var squares = document.querySelectorAll('td')
  id = ""
  turn = 0
  $.each(squares, function(k, v) {
	v.innerHTML = ""
  })
}

function setState() {
  var squares = document.querySelectorAll('td')
  board = $.map(squares, function(k,v) {
  	return k.innerHTML
  })
}

function appendGame(gameId) {
  var li = document.createElement("li")
  var button = document.createElement("button")
  button.innerText = gameId
  li.append(button)
  $('#games').append(li)
}