//declaring the variables
let min = 1,
    max = 10,
    winNum = randomNum(min,max),
    guessesLeft = 3;

//UI variables
const guess = document.querySelector("#guess"),
      guessInput =document.querySelector("#guess-input"),
      minNum = document.querySelector('#min'),
      maxNum =document.querySelector('#max'),
      result = document.querySelector('.result'),
      submitBtn = document.querySelector('#submit');

//defining the limits
minNum.textContent = min;
maxNum.textContent = max;


//adding the play again event listener
guess.addEventListener('mousedown', function(e){
    if (e.target.className === 'play-again'){
        window.location.reload();
    }
})


//adding the event listener when submitting the choice
submitBtn.addEventListener("click", function (){
let guess = parseInt(guessInput.value);
if(isNaN(guess) || guess > max || guess < min){
    messageDisplay(`Please enter a valid number between ${min} and ${max}`, 'red');
} else{
//correct guess
if (guess === winNum){
    //disabling the input field and styling the border
    
    gameOver(true, `${guess} is correct ! Good play!`);
    
}else{
//wrong guess
guessesLeft -= 1;
if (guessesLeft === 0){
    //Game Over
    
    gameOver(false, `Game Over, You Lost! The correct number was ${winNum}`);
    
} else {
    //wrong guess but still guesses left
    
    guessInput.style.borderColor = 'red';
    messageDisplay(`${guess} is incorrect ! ${guessesLeft} guesses left`, 'red');
    guessInput.value = '';
}
}
}
});



//defining the messageDisplay function 
function messageDisplay(message, color){
   result.textContent = message; 
   result.style.color = color;
}

//defining Game Over function
function gameOver (won, msg){
    let color;
    won === true ? color='green' : color='red';
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    result.style.color = color;
    messageDisplay(msg);
    //defining playAgain button
    submitBtn.textContent='play-again';
submitBtn.className = 'play-again';
}

//defining the random Number fuction
function randomNum (min, max){
    console.log (Math.floor(Math.random()*(max-min+1)+min));
}

