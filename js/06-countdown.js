// DECLARE VARIABLES
let userNumber

// ASK FOR A NUMBER
userNumber = parseInt(prompt('Enter a number'))

// CHECK THAT THEY ENTERED A VALID NUMBER
if (!isNaN(userNumber) && userNumber > 0) {
    // COUNT DOWN
    for (let i = userNumber; i >= 0; i--) {
        console.log(i)
    }
} else {
    alert('You entered an invalid number')
}