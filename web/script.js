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

function addLetter(c, correct)
{
    // Don't do it in industrial application!
    inputField.innerHTML = inputField.innerHTML + "<span class='" + (correct ? "correctLetter" : "incorrectLetter") + "'>" + c + "</span>";
}


window.onload = function () {
    fill();
    document.addEventListener('keydown', onKeyPress);
}


function onKeyPress(evt)
{
    if (evt.key.search(/\w/) != 0 || evt.key.search(/\d/) != -1)
        return;

    var key = evt.key.toLowerCase();

    if (hangman.guess(key)) {
        console.log("Key found");
        refill();
        addLetter(key, true);
    } else {
        console.log("Key not found");
        addLetter(key, false);
    }
}
