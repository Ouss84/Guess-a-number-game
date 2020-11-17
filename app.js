//declaring the variables
let min = 1,
    max = 10,
    winNum = 5,
    guessesNum = 3;

//UI variables
const form = document.querySelector("#form"),
      yourGuess =document.querySelector("#guess"),
      minNum = document.querySelector('#min'),
      maxNum =document.querySelector('#max'),
      result = document.querySelector('#result');

//defining the limits
minNum.textContent = min;
maxNum.textContent = max;



//adding the event listener when submitting the choice
form.addEventListener("submit", function (e){
let guess = yourGuess.value;
if(guess === null || guess > max || guess < min){
    messageDisplay(`Please enter a valid number between ${min} and ${max}`, 'red');
}


    e.preventDefault();
});

//defining the messageDisplay function 

function messageDisplay(message, color){
   result.value = message;
   result.style.color = color;
}

