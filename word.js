var Letter = require("./letter.js");

function Word(word) {
    this.word = word;
    this.letters = [];
    this.createPush = function() {
        for (var i=0; i< this.word.length; i++) {
            var newLet = new Letter(this.word[i]);
            this.letters.push(newLet);
        }
    },
    this.display = function() {
        var letterString = "";
        for (var i=0; i < this.letters.length; i++) {
            letterString = letterString + this.letters[i].display();
        }

        return letterString;
    },
    this.updateLet = function(guess) {
        for (var i=0; i<this.letters.length; i++) {
            if (this.letters[i].letter == guess) this.letters[i].found = true;
        }
    }
};

module.exports = Word;
