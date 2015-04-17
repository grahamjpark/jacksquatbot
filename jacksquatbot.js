var MYUSER = 'tim_plays_blackjack';
var MYPASS = 'letsgotim';

var request = require('request');

var ENDPOINT = 'http://hackjack.purduehackers.com/';
var TABLE = 'dogs';
// Create Table

request.post({url: ENDPOINT + 'tables/' + TABLE,
             form: {username: MYUSER, password: MYPASS, command: 'create'}},
             function(err,httpResponse,body) {
  console.log(body);
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

// Leave Table

request.post({url: ENDPOINT + 'tables/' + TABLE,
             form: {username: MYUSER, password: MYPASS, command: 'leave'}},
             function(err,httpResponse,body) {
  console.log(body);
});

// Place Bet

request.post({url: ENDPOINT + 'tables/' + TABLE,
             form: {username: MYUSER, password: MYPASS, command: 'bet', bet_amt: 10}},
             function(err,httpResponse,body) {
  console.log(body);
});

// Hit

request.post({url: ENDPOINT + 'tables/' + TABLE,
             form: {username: MYUSER, password: MYPASS, command: 'hit'}},
             function(err,httpResponse,body) {
  console.log(body);
});

// Stay

request.post({url: ENDPOINT + 'tables/' + TABLE,
             form: {username: MYUSER, password: MYPASS, command: 'stay'}},
             function(err,httpResponse,body) {
  console.log(body);
});
