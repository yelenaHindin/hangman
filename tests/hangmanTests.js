var Hangman = require('../src/Hangman.js');
var readList = require('../cli/ReadList.js');
var should = require('should');

describe('Test bundle', function() {
    var words;

    before('Read word list', function() {
        words = readList("../data/nounlist.txt");
    });

    it('Get word', function() {
        var h = new Hangman.Hangman(words, 1);
        h.word().should.be.equal(words[1]);
        h.nFailedGuesses().should.be.equal(0);
        h.state().should.be.empty();
    });

    it('One correct step e', function() {
        var h = new Hangman.Hangman(["tree"], 0);
        h.word().should.be.equal("tree");

        h.nFailedGuesses().should.be.equal(0);
        h.state().should.be.empty();

        h.guess("e");

        h.nFailedGuesses().should.be.equal(0);
        h.state().should.be.eql([ , , true, true]);
    });

    it('One correct step t', function() {
        var h = new Hangman.Hangman(["tree"], 0);
        h.word().should.be.equal("tree");

        h.nFailedGuesses().should.be.equal(0);
        h.state().should.be.empty();

        h.guess("t");

        h.nFailedGuesses().should.be.equal(0);
        h.state().should.be.eql([true]);
    });

    it('One incorrect step z', function() {
        var h = new Hangman.Hangman(["tree"], 0);
        h.word().should.be.equal("tree");

        h.nFailedGuesses().should.be.equal(0);
        h.state().should.be.empty();

        h.guess("z");

        h.nFailedGuesses().should.be.equal(1);
        h.state().should.be.eql([]);
    });

});
