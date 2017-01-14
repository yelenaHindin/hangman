var words = [ "tree", "house"];
var hangman = new Hangman.Hangman(words);
var word = hangman.word();

var wordPresentation = [];
var lastStage = -1;
var gameOver = false;

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
    btnInit.addEventListener('click', init);
}

function setVisibility(stage, on)
{
    var stageElements = document.querySelectorAll(".stage-" + stage);

    console.log(stageElements);

    for (var e of stageElements)
        e.style.visibility = on ? "visible" : "hidden";
}

function onKeyPress(evt)
{
    if (evt.key.search(/^\w$/) != 0 || evt.key.search(/^\d$/) != -1)
        return;

    if (gameOver)
        return;

    var key = evt.key.toLowerCase();

    if (hangman.guess(key)) {
        console.log("Key found");
        refill();
        addLetter(key, true);
        if (hangman.state().reduce((a, e) => e?a+1:a, 0) == hangman.word().length) {
            gameOver = true;
            state.innerHTML = "You won!";
        }
    } else {
        console.log("Key not found");
        addLetter(key, false);
        addStage();
        if (hangman.nFailedGuesses() >= 7) {
            state.innerHTML = "You failed!";
            gameOver = true;
        }
    }
}

function addStage(){
    var failedGuesses = hangman.nFailedGuesses();
    if (failedGuesses > 0) {
        setVisibility(failedGuesses - 1, true);
        lastStage = failedGuesses;
    }
}

function init() {
    divWordGuess.innerHTML = "";
    inputField.innerHTML = "";
    hangman = new Hangman.Hangman(words);
    fill();


    for(var i = 0; i < lastStage;i++) {
        setVisibility(i, false);
    }
    gameOver = false;
    state.innerHTML = "Playing";
}
