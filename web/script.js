var words = [ "tree", "house"];
var hangman = new Hangman.Hangman(words);
var word = hangman.word();

var wordPresentation = [];

function fill() {
    var state = hangman.state();
    for(var i =0; i < word.length; i++){
        wordPresentation[i] = document.createTextNode(state[i] ? word[i] : "-");
        divWordGuess.appendChild(wordPresentation[i]);
    }
}

function refill() {
    var state = hangman.state();
    for(var i =0; i < word.length; i++){
        wordPresentation[i].textContent = state[i] ? word[i] : "-";
    }
}


window.onload = function () {
    fill();
    document.addEventListener('keydown', onKeyPress);
}


function onKeyPress(evt)
{
    if (hangman.guess(evt.key)) {
        console.log("Key found");
        refill();
    } else {
        console.log("Key not found");
    }
}
