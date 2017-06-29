// There are two main ways to define functions in JavaScript:

// Named function
function eatDot() {
  console.log("MUNCH!");
};

// Anonymous function
// Here we assign the function to a variable instead of giving it a name directly

// Calling a function:

var eatDot = function() {
  console.log("MUNCH!");
};

function eatDot() {
  console.log("MUNCH!");
};

eatDot();

var hero = 'Pac-Man';
hero.toUpperCase();
hero.length;

// Passing parameters to functions:

var highScores = [];
function addHighScore(highScoreList, playerInitials, score) {
  var record = { player: playerInitials, score: score };
  highScoreList.push(record); // add record to array
}

addHighScore(highScores, 'SDL', 2000);
addHighScore(highScores, 'JSL', 10000);

highScores;
