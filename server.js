var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
app.get("/capacity", function (request, response) {
  response.sendFile(__dirname + '/views/capacity.html');
});

var listener = http.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

var Card = function(name, cost, vp, power, type) {
  this.name = name;
  this.cost = cost;
  this.vp = vp;
  this.power = power;
  this.type = type;
};

var Player = function(id, deck, hand, discard, inPlay, power) {
  this.id = id;
  this.deck = deck;
  this.hand = hand;
  this.discard = discard;
  this.inPlay = inPlay;
  this.power = power;
};

var Game = function(player1, player2) {
  
};



var Punch = new Card("Punch", 0, 0, 1, "Starter");
var Vulnerability = new Card("Vulnerability", 0, 0, 0, "Starter");
var player = null;
var users = 0;

io.on('connection', function(socket){
  socket.on('connectToServer', function(id) {
    console.log(socket.id+' connecting...');
    users++;
    if(users == 3) {
      console.log(socket.id+' rejected.');
      io.to(socket.id).emit('overCapacity');
    }
    else {
      console.log(users);
      console.log(socket.id+' succesfully connected.')
      player = new Player(socket.id, initDeck(), [], [], [], 0);
      io.to(player.id).emit('deck', player.deck);
    }
  });
  socket.on('disconnect', function() {
    console.log(socket.id+" disconnected.");
    users--;
    console.log(users);
  });
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  socket.on('debug', function(msg){
    console.log(msg);
  });
});

function initDeck() {
  var deck = [];
  for(var i = 0; i < 7; i++)
    deck.push(Punch);
  for(i = 0; i < 3; i++)
    deck.push(Vulnerability);
  shuffle(deck);
  return deck;
}

function shuffle(array) {
  var i = 0, j = 0, temp = null;
  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}







