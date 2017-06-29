var ghosts = {inky: 'Cyan', blinky: 'Red', pinky: 'Pink', clyde: 'Orange' };

console.log(ghosts);

/*
You can retrieve the values in your object
using either dot-notation or square bracket notation.
*/
console.log(ghosts.inky); // => 'Cyan'
console.log(ghosts.blinky); // => 'Red'

// same as above
console.log(ghosts['inky']); // => 'Cyan'
console.log(ghosts['blinky']); // => 'Red'

/*
The square bracket notation is used when the property
you want to retrieve on the object is stored in a variable:
*/
var ghostName = 'clyde';
console.log(ghosts[ghostName]); // => 'Orange'
