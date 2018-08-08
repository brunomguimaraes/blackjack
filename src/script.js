//My first Blackjack Game
//Bruno Moraes Guimarães

//Cards var
let suits = [ "Hearts" , "Clubs" , "Diamonds" , "Spades" ];
let values = [  "King" , "Queen" , "Jack" , "Ten" ,
                "Nine" , "Eight" , "Seven" , "Six" ,
                "Five" , "Four" , "Three" , "Two" ,
                "Ace" ];

//DOM var                
let textArea = document.getElementById("paragraph-one");
let newGamebutton = document.getElementById("newgame-button");
let hitButton = document.getElementById("hit-button");
let stayButton = document.getElementById("stay-button");

//Game var
let gameRunning = false;
let gameOver = false;
let playerWon = false;
let dealerCards = [];
let playerCards = [];
let dealerScore = 0;
let playerScore = 0;
let deck = [];

hitButton.style.display = "none";
stayButton.style.display = "none";
showStatus();

newGamebutton.addEventListener("click", function() {
    gameRunning = true;
    gameOver = false;
    playerWon = false;

    deck = deckMake();
    dealerCards = [ deckDraw() , deckDraw() ];
    playerCards = [ deckDraw() , deckDraw() ];

    textArea.innerText = "Alright let's do this";
    newGamebutton.style.display = "none";
    hitButton.style.display = "inline";
    stayButton.style.display = "inline";
    showStatus();
});

function deckMake() {
    let deck = [];
    for ( let suitsId = 0; suitsId < suits.length; suitsId++ ) {
        for ( let valuesId = 0; valuesId < values.length; valuesId++ ) {
            let card = {
                suit: suits[suitsId],
                value: values[valuesId] console.log("The deck contains " + deck.length + " cards");
            }
            deck.push( card );
        }
    }
    return deck;
}

function deckDraw() {
    return deck.shift();
}

function cardString() {
    return card.value + " of " + card.suit;
}

function showStatus() {
    if (!gameRunning) {
        textArea.innerText = "Blackjack, the game!";
        return;
    }
}