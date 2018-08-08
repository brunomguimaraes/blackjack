//My first Blackjack Game
//Bruno Moraes Guimarães

//Cards var
let suits = [ "Hearts" , "Clubs" , "Diamonds" , "Spades" ],
    values = [  "King" , "Queen" , "Jack" , "Ten" ,
                "Nine" , "Eight" , "Seven" , "Six" ,
                "Five" , "Four" , "Three" , "Two" ,
                "Ace" ];

//DOM var                
let textArea = document.getElementById("paragraph-one"),
    newGamebutton = document.getElementById("newgame-button"),
    hitButton = document.getElementById("hit-button"),
    stayButton = document.getElementById("stay-button");

    //Game var
let gameRunning = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];

hitButton.style.display = "none";
stayButton.style.display = "none";
gameStatus();

newGamebutton.addEventListener("click", function() {
    gameRunning = true;
    gameOver = false;
    playerWon = false;

    deck = deckMake();
    deckShuffle(deck);
    playerCards = [ deckDraw(), deckDraw() ];
    dealerCards = [ deckDraw(), deckDraw() ];

    textArea.innerText = "Alright let's do this";
    newGamebutton.style.display = "none";
    hitButton.style.display = "inline";
    stayButton.style.display = "inline";
    gameStatus();
});

function deckMake() {
    let deck = [];
    for ( let suitsId = 0; suitsId < suits.length; suitsId++ ) {
        for ( let valuesId = 0; valuesId < values.length; valuesId++ ) {
            let card = {
                suit: suits[suitsId],
                value: values[valuesId]
            };
            deck.push( card );
        }
    }
    return deck;
}
function deckDraw() {
    return deck.shift();
}
function cardString(card) {
    return card.value + " of " + card.suit;
}

function gameStatus() {
    if(!gameRunning) {
        textArea.innerText = "Welcome to Blackjack";
        return;
    }
}

function deckShuffle(deck) {
    for (let i = 0; i< deck.length; i++) {
        let swapId = Math.trunc(Math.random() * deck.length);
        let aux = deck[swapId];
        deck[swapId] = deck[i];
        deck[i] = aux;
    }
}