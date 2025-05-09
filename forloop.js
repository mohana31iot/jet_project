alert("Welcome to the guessing game!");
const wantToPlay = confirm("Do you want to play a number guessing game?");
if(wantToPlay){
    const randomNumber =
    Math.floor(Math.random() *12) +1;
    console.log(randomNumber);
    for(let attempt =1; attempt <= 5;
        attempt++) {
            let userGuess =prompt("Attempt" + attempt +": Guess a number between 1 and 12");
            if(parseInt(userGuess) === randomNumber) {
                alert("congratulations! you guessed thecorrect number: " + randomNumber);
                break; //Exit the loop early
            } else{
                if(attempt < 3) {
                    alert("Wrong guest! Try again.");
                }else{
                    alert("Gamer Over! The correct number was" + randomNumber);
                }
                }
            }
            }else{
                alert("No problem! Maybe next time.");
            }
            
        
    
