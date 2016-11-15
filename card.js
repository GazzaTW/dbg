var Card = function(name, cost, vp, power, type) {
  this.name = name;
  this.cost = cost;
  this.vp = vp;
  this.power = power;
  this.type = type;
};

var Player = function(deck, hand, discard, inPlay, power) {
  this.deck = deck;
  this.hand = hand;
  this.discard = discard;
  this.inPlay = inPlay;
  this.power = power;
};