// pacman-return.js

// Return Values

/*
With Ruby, the last expression of a method is returned, 
however, as you've likely noticed in the Node REPL,
undefined is returned in JavaScript by default.
To return a value in JavaScript, we have to explicitly return it.
*/

// Let's have Pac-Man earn some points:

function addScore(currentScore, eaten) {

  switch (eaten) {

  case 'dot':
    scoreToAdd = 10;
    break;

  case 'powerPellet':
    scoreToAdd = 50;
    break;

  case 'firstGhost':
    scoreToAdd = 200;
    break;

  case 'secondGhost':
    scoreToAdd = 400;
    break;
  }

  return currentScore + scoreToAdd;
}

var score = 0;

score = addScore(score, 'dot');
score = addScore(score, 'dot');
score = addScore(score, 'dot');
score = addScore(score, 'powerPellet');
score = addScore(score, 'firstGhost');

console.log('Your score: ' + score);
