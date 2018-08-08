//My first Blackjack Game
//Bruno Moraes Guimarães

let suits = [ "Hearts" , "Clubs" , "Diamonds" , "Spades" ];
let values = [  "King" , "Queen" , "Jack" , "Ten" ,
                "Nine" , "Eight" , "Seven" , "Six" ,
                "Five" , "Four" , "Three" , "Two" ,
                "Ace" ];


let deck = [];

for ( let suitsId = 0; suitsId < suits.length; suitsId++ ) {
    for ( let valuesId = 0; valuesId < values.lenght; valuesId++ ) {
        deck.push( values[valuesId] + " of " + suits[suitsId] );
    }
}

for ( i = 0; i < deck.lenght; i++ ){
    console.log( deck[i] );
}

console.log("The deck contains " + deck.length + " cards");

let playerCards = [ deck[0], deck[2] ];
console.log("Blackjack, the game!");

console.log("You are dealt: ");
console.log("  " + playerCards[0]);
console.log("  " + playerCards[1]);