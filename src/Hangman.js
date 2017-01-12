var Hangman = {}


Hangman.Hangman = function(words, index) {
    if (index === undefined) {
        var r = Math.random();

        index = Math.floor(r * words.length);
    }

    this.m_word = words[index];

    this.m_state = [];
    this.m_nFailedGuesses = -1;
}

Hangman.Hangman.prototype.guess = function(guessChar)
{
    var i = 0;
    var found = false;

    for (var c of this.m_word)  {
        if (c == guessChar) {
            found = true;
            this.m_state[i] = true;
        }
        i++;
    }

    if (!found) {
        this.m_nFailedGuesses++;
        return false;
    } else {
        return true;
    }
}

Hangman.Hangman.prototype.state = function() {
    return this.m_state;
}

Hangman.Hangman.prototype.word = function() {
    return this.m_word;
}

Hangman.Hangman.prototype.nFailedGuesses = function() {
    return this.m_nFailedGuesses;
}

Hangman.Hangman.prototype.isWordGuessed = function() {
    if(this.m_state.length > 0) {
        for (var c of this.m_state)  {
            if (!c) {
                return false;
            }
        }
    } else {
        return false;
    }
    return true;
}

if (typeof process !== 'undefined' && process) {
    module.exports = Hangman;
}
