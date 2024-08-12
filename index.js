// In this entrance ticket, you will be building a "guess the number" game. 
// Create a new variable and put a number from 1-100 in
let number = 56

// Prompt the user to guess the number
let guess = prompt("guess the number")

// Cast the user input to a number



// Create a new variable called attempts and set it to 0
let attempts = 0

// Create a while loop that runs while the user guess is not equal to your number
while (guess !== number) {
  // In the while loop, prompt the user to guess the number again (remember to cast)
  let Again = prompt("guess the number again")

  // In the while loop, write an if statement that does the following
} if (guess > number) {

  // If the user guess is higher, say "Too high!"
  console.log("Too high!")

  // If the user guess is right, say "Too low!"
} if (guess < number); {
  console.log("Too low!")

  // If the user guess is right, say "You got it!"
} if (guess == number); {
  console.log("You got it!")

  attempts++
}
// In the while loop, increase the attempts by 1


// After the while loop, print "It took (attempts) attempts" 
console.log("It yook you", attempts, "to guess the right number.")
