const form = document.querySelector("#form");
const yourGuess = document.querySelector("#guess");
const result = document.querySelector("#result");

form.addEventListener("submit", guessOperation);

function guessOperation (e){
const guessedNumber = yourGuess.Value;
const randomNumber = 3;
if (guessedNumber === randomNumber){
    const message = result.createTextNode('congratulation');
    result.appendChild(message);
}else{
    result.textContent='try again'
}


    e.preventDefault();
}