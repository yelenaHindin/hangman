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
    });


});
