//My first Blackjack Game
//Bruno Moraes Guimarães

let suits = [ "Hearts" , "Clubs" , "Diamonds" , "Spades" ];
let values = [  "King" , "Queen" , "Jack" , "Ten" ,
                "Nine" , "Eight" , "Seven" , "Six" ,
                "Five" , "Four" , "Three" , "Two" ,
                "Ace" ];

let deck = deckMake();

for ( i = 0; i < deck.length; i++ ){
    console.log( deck[i] );
}

console.log("The deck contains " + deck.length + " cards");

let playerCards = [ deckDraw(), deckDraw() ];
console.log("Blackjack, the game!");

console.log("You are dealt: ");
console.log("  " + playerCards[0]);
console.log("  " + playerCards[1]);

function deckMake() {
    let deck = [];
    for ( let suitsId = 0; suitsId < suits.length; suitsId++ ) {
        for ( let valuesId = 0; valuesId < values.length; valuesId++ ) {
            deck.push( values[valuesId] + " of " + suits[suitsId] );
        }
    }
    return deck;
}
function deckDraw() {
    return deck.shift();
}