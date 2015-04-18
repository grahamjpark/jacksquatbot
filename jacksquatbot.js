var MYUSER = 'tim_plays_blackjack';
var MYPASS = 'letsgotim';

var request = require('request');

var ENDPOINT = 'http://hackjack.purduehackers.com/';
var TABLE = '4dogs';

var PLAYER = 0;
var DEALER = 1;
var playerCards = [];
var dealerCards = [];

playerCards.push("AC");
playerCards.push("AS");

// Create Table
  request.post({url: ENDPOINT + 'tables/' + TABLE,
             form: {username: MYUSER, password: MYPASS, command: 'create'}},
             function(err,httpResponse,body) {
    console.log("Created: " + body);
  });

// Start Table

request.post({url: ENDPOINT + 'tables/' + TABLE,
             form: {username: MYUSER, password: MYPASS, command: 'start'}},
             function(err,httpResponse,body) {
  console.log(body);
});

// Join Table

request.post({url: ENDPOINT + 'tables/' + TABLE,
             form: {username: MYUSER, password: MYPASS, command: 'join'}},
             function(err,httpResponse,body) {
  console.log(body);
});

// Place Bet
//if (num_aces(my_hand) == 0) {
if(numCard("A", PLAYER) == 0){
    if(get_amount(DEALER) <= 8){ 
      hit();//Bet?
  }
  else if(get_amount(PLAYER) == 9){
      if(get_amount(DEALER) >= 3 && get_amount(get_amount) <= 6){
        hit();//Bet?
      }
      else {
        hit();
      }
  }
  else if(get_amount(PLAYER) == 10) {
    if(get_amount(DEALER) >= 2 && get_amount(DEALER) <= 9) {
      hit();//Bet
    }
    else {
      hit();
    }
  }
  else if(get_amount(PLAYER) == 11) {
    if(numCard("A", DEALER) >= 1) {
      hit();
    }
    else if(get_amount(DEALER) >= 2 && get_amount(DEALER) <= 10){
      hit(); //bet
    }
  }
  else if(get_amount(PLAYER) == 12) {
    if(get_amount(DEALER)>= 2 && get_amount(DEALER) <= 6){
      stay();
    }
    else {
      hit();
    }
  }
  else if(get_amount(PLAYER) >= 13 && get_amount(PLAYER) <= 16){
    if(get_amount(dealer_hand) >= 2 && get_amount(dealer_hand) <= 6) {
       stay();
    }
    else {
      hit();
    }
  }
  else {
    stay(); 
  }

} //End hard hand
else {
  if(numCard("A", PLAYER) == 1 && numCard("2", PLAYER) || numCard("A", PLAYER) == 1 && numCard("3", PLAYER)) {
    if(get_amount(DEALER) >= 5 && get_amount(DEALER) <= 6){
      hit();//Bet
    }
    else {
      hit();
    }
  }
  else if(numCard("A", PLAYER) == 1 && numCard("4", PLAYER) || numCard("A", PLAYER) == 1 && numCard("5", PLAYER)) {
    if(get_amount(DEALER) >= 4 && get_amount(DEALER) <= 6){
      hit();//Bet
    }
    else {
      hit();
    } 
  }
  else if(numCard("A", PLAYER) == 1 && numCard("6", PLAYER)) {
    if(get_amount(DEALER) >= 3 && get_amount(DEALER) <= 6){
      hit();//Bet
    }
    else {
      hit();
    } 
  }
  else if(numCard("A", PLAYER) == 1 && numCard("7", PLAYER)) {
    if(get_amount(DEALER) == 2 || get_amount(DEALER) == 7 || get_amount(DEALER) == 8){
      stay();
    }
    else if(get_amount(DEALER) >= 3 && get_amount(DEALER) <= 6) {
      hit();
      bet();
    } 
    else {
      bet();
    }
  }
  else if(numCard("A", PLAYER) == 1 && numCard('8', PLAYER)) {
    stay();
  }
  else if(numCard("A", PLAYER) == 1 && numCard('9', PLAYER)) {
    stay();
  }
  else {
    stay();
  }
} //End soft hand
// Hit
//bet(10);

// Stay



//leave();

function leave() {
  // Leave Table
  request.post({url: ENDPOINT + 'tables/' + TABLE,
              form: {username: MYUSER, password: MYPASS, command: 'leave'}},
              function(err,httpResponse,body) {
    console.log(body);
  });
}

function numCard(card, hand) {
  var count = 0;
  //if hand 0 then player
  if(hand == PLAYER){
    for(var x = 0; x < playerCards.length; x++){
      if(playerCards[x].indexOf(card) > -1){
      count++;  
     }
    }
  }
  else {
      for(var x = 0; x < dealerCards.length; x++){
        if(playerCards[x].indexOf(card) > -1){

        count++;  
      }
    }

  }
   return count; 
}

function get_amount(hand){
  var count = 0;
  if(hand == PLAYER){
      for(var x = 0; x < playerCards.length; x++){
        count++;  
     
    }
  }
  else {
      for(var x = 0; x < dealerCards.length; x++){
        count++;  
      
    }

  }
   return count; 
}


function bet(){
  request.post({url: ENDPOINT + 'tables/' + TABLE,
             form: {username: MYUSER, password: MYPASS, command: 'bet', bet_amt: 10}},
             function(err,httpResponse,body) {
  console.log(body);
  });
}


function hit(){
    request.post({url: ENDPOINT + 'tables/' + TABLE,
             form: {username: MYUSER, password: MYPASS, command: 'hit'}},
             function(err,httpResponse,body) {
    console.log(body);
  });
}

function stay() {
  request.post({url: ENDPOINT + 'tables/' + TABLE,
             form: {username: MYUSER, password: MYPASS, command: 'stay'}},
             function(err,httpResponse,body) {
  console.log(body);
});
}