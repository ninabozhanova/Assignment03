// DECLARE VARIABLES
let coinFlip
let rounds

// GET A NUMBER FROM THE USER
do {
    rounds = parseInt(prompt('How many times should I flip the coin?'))
} while (isNaN(rounds) || rounds < 0);

for (let i = 0; i < rounds; i++) {
    // USING A MATH METHOD TO GET A RANDOM NUMBER
    randomNum = Math.round(Math.random())

    // RESULT OF THE COIN FLIP
    if (randomNum === 0) {
        console.log('Heads')
    } else {
        console.log('Tails')
    }
}