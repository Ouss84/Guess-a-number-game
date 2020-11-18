//declaring the variables
let min = 1,
    max = 10,
    winNum = 5,
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



//adding the event listener when submitting the choice
submitBtn.addEventListener("click", function (){
let guess = parseInt(guessInput.value);
if(isNaN(guess) || guess > max || guess < min){
    messageDisplay(`Please enter a valid number between ${min} and ${max}`, 'red');
} 
//correct guess
if (guess === winNum){
    //disabling the input field and styling the border
    guessInput.disabled = true;
    guessInput.style.borderColor = 'green';
    messageDisplay(`${guess} is correct ! Good play!`, 'green');
}else{
//wrong guess
guessesLeft -= 1;
if (guessesLeft === 0){
    //Loss Game Over
    guessInput.disabled = true;
    guessInput.style.borderColor = 'red';
    messageDisplay(`Game Over, You Lost! The correct number was ${winNum}`, 'red');
} else {
    //wrong guess but still guesses left
    
    guessInput.style.borderColor = 'red';
    messageDisplay(`${guess} is incorrect ! ${guessesLeft} guesses left`, 'red');
    guessInput.value = '';
}
}
});



//defining the messageDisplay function 
function messageDisplay(message, color){
   result.textContent = message; 
   result.style.color = color;
}


