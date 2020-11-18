//declaring the variables
let min = 1,
    max = 10,
    winNum = 5,
    guessesNum = 3;

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
if(guess === null || guess > max || guess < min){
    messageDisplay(`Please enter a valid number between ${min} and ${max}`, 'red');
    
} 

});

//defining the messageDisplay function 

function messageDisplay(message, color){
   result.textContent = message; 
   result.style.color = color;
}


