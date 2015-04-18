var MYUSER = 'tim_plays_blackjack';
var MYPASS = 'letsgotim';

var request = require('request');

var ENDPOINT = 'http://hackjack.purduehackers.com/';
var TABLE = '3dogs';

var PLAYER = 0;
var DEALER = 1;
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
    console.log("HE LLLLLLLLLLLLLLLLLLOOOOOOOOO");
    if(get_amount(DEALER) <= 8){ 
      hit();
  }
  else if(get_amount(PLAYER) == 9){

  }
}
// Hit
//bet(10);


// Stay

request.post({url: ENDPOINT + 'tables/' + TABLE,
             form: {username: MYUSER, password: MYPASS, command: 'stay'}},
             function(err,httpResponse,body) {
  console.log(body);
});

leave();

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
    //if playerhand.contains(card)
        //count++;
  //else {

    //}
   return count; 
}

function get_amount(hand){
  var count = 0;

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