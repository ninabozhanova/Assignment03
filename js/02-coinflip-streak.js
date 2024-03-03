// DECLARE VARIABLES
let coinFlip

do {
    randomNum = Math.round(Math.random())
    if (randomNum === 0) {
        console.log('Heads')
    } else {
        console.log('Tails')
    }
} while (randomNum === 0);