//setting up dependencies of game using variables to import with
var inquirer = require("inquirer");
var word = require("./word.js");

//array containing words for game
var wordBank = ["Queequeg", "zephyr", "Aristotle", "erroneous"];

//variable to select random word from wordBank array for game
var gameWord = wordBank[Math.floor(Math.random()*wordBank.length)];

var wordObject = new word(gameWord);
wordObject.createPush();
console.log(wordObject.display());

function letterGuess(){
    inquirer.prompt([
    {
    type: "input",
    name: "guess",
    message: "Guess a letter! If you do not wish to continue, please say 'game over.'"},
    ]).then(function(data){
        if (data.guess != "game over") {
            wordObject.updateLet(data.guess);
            console.log(wordObject.display());
            letterGuess();
        }
    });
}

letterGuess();