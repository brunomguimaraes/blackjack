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

function cardNumValue(card) {
    switch(card.value) {
        case "Ace":
            return 1;
        case "Two":
            return 2;
        case "Three":
            return 3;
        case "Four":
            return 4;
        case "Five":
            return 5;
        case "Six":
            return 6;
        case "Seven":
            return 7;
        case "Eight":
            return 8;
        case "Nine":
            return 9;
        default:
            return 10;
    }
}

function calcScore(cardArray) {
    let score = 0,
        hasAce = false;
    for (let i = 0; i < cardArray.length; i++) {
    let card = cardArray[i];
    score += cardNumValue(card);
        if ( card.value === "Ace" ) {
            hasAce = true;    
        } 
    
    }
    if (hasAce && score + 10 <=21) {
        return score + 10;
    }
    return score;
}

function updateScore() {
    dealerScore = calcScore(dealerCards);
    playerScore = calcScore(playerCards);
}

function gameStatus() {
    if(!gameRunning) {
        textArea.innerText = "Welcome to Blackjack";
        return;
    }

    let dealerString = "";
    for (let i = 0; i< dealerCards.length; i++) {
        dealerString += cardString(dealerCards[i]) + "\n";
    }

    let playerString = "";
    for (let i = 0; i< playerCards.length; i++) {
        playerString += cardString(playerCards[i]) + "\n";
    }

updateScore();

textArea.innerText = "Dealer has:\n" +
                    dealerString + 
                    "(Score: " + dealerScore + ")\n\n" +

                    "Player has:\n" +
                    playerString + 
                    "(Score: " + playerScore + ")\n\n";
    
    if (gameOver){
        if(playerWon) {
            textArea.innerText += "YOU WIN!";
        }
        else {
            textArea.innerText += "DEALER WINS!"
        }
        newGamebutton.style.display = "inline";
        hitButton.style.display = "none";
        stayButton.style.display = "none";
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
