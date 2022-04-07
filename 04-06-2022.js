// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

//  Parameters: Only rock, paper, scissors? What if user types special characters or other words? Capitalization? No arguments?
//  Return:  Return which player won - p1 or p2?
//  Examples: User entry: rps('rock', 'paper') WINNER: p2
//            User entry: rps('scissors', 'rock') WINNER: p2
//            User entry: rps('paper', 'rock') WINNER: p1
// Pseudocode: Create a function that compares the enteries of p1 against p2. 
//   p1 WINS: p1 'rock' and p2 'scissors'; 
//            p1 'paper' and p2 'rock';
//            p1 'scissors' and p2 'paper'
//   p2 WINS: p2 'rock' and p1 'scissors'; 
//            p2 'paper' and p1 'rock';
//            p2 'scissors' and p1 'paper'
//  DRAW if p1 === p2


const rps = (p1, p2) => {
  if (p1 === 'rock' && p2 === 'scissors' || p1 === 'paper' && p2 === 'rock' || p1 === 'scissors' && p2 === 'paper'){
      console.log('Player 1 won!') 
  } else if (p2 === 'rock' && p1 === 'scissors' || p2 === 'paper' && p1 === 'rock' || p2 === 'scissors' && p1 === 'paper'){
    console.log('Player 2 won!')
  } else if (p1 === p2){
      console.log('Draw!')
  }
};