//My first Blackjack Game
//Bruno Moraes Guimarães

let suits = [ "Hearts" , "Clubs" , "Diamonds" , "Spades" ];
let values = [  "King" , "Queen" , "Jack" , "Ten" ,
                "Nine" , "Eight" , "Seven" , "Six" ,
                "Five" , "Four" , "Three" , "Two" ,
                "Ace" ];

let textArea = document.getElementById("paragraph-one");
let newGamebutton = document.getElementById("newgame-button");
let hitButton = document.getElementById("hit-button");
let stayButton = document.getElementById("stay-button");

hitButton.style.display = "none";
stayButton.style.display = "none";

newGamebutton.addEventListener("click", function() {
    textArea.innerText = "Alright let's do this";
    newGamebutton.style.display = "none";
    hitButton.style.display = "inline";
    stayButton.style.display = "inline";
});

let deck = deckMake();

console.log("The deck contains " + deck.length + " cards");

let playerCards = [ deckDraw(), deckDraw() ];

console.log("Blackjack, the game!");

console.log("You are dealt: ");
console.log("  " + cardString(playerCards[0]) );
console.log("  " + cardString(playerCards[1]) );

function deckMake() {
    let deck = [];
    for ( let suitsId = 0; suitsId < suits.length; suitsId++ ) {
        for ( let valuesId = 0; valuesId < values.length; valuesId++ ) {
            let card = {
                suit: suits[suitsId],
                value: values[valuesId]
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