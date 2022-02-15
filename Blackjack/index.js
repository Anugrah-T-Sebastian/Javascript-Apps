let cards = []
let sum;
let message;
let hasBlackJack = false;
let isAlive = false;
let player = {
    name: "Per",
    chips: 145,
    sayHello: function() {
        console.log("Hello!");
    }
}

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector(".sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el")

function startGame() {
    let firstCard = getRandomCard();   //Math.floor(Math.random() * (max-min+1)) + min. Here max = 11 min = 2
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true;
    playerEl.textContent = player.name + ": $" + player.chips;
    renderGame();
}


function getRandomCard() {
    let randomNumber = Math.floor((Math.random() * 13) + 1);    //Math.floor(Math.random() * (max-min+1)) + min. Here max = 13 min = 1
    if(randomNumber === 1) {
        return 11;
    }
    else if(randomNumber >= 11 && randomNumber <= 13) {
        return 10;
    }
    return randomNumber;
}

function renderGame() {
    if(sum < 21) {
    
        message = "Do you want to draw a new card?";
     }
     else if(sum === 21) {
         message = "You've go Blackjack!";
         hasBlackJack = true;
     }
     else if(sum > 21) {
         message = "You're out of the game!";
         isAlive = false;
     }

    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    
}

function newCard() {
    if(isAlive === true && hasBlackJack !== true) {
        console.log("New Card drawn!");
        let newCard = getRandomCard();
        sum += newCard;
        cards.push(newCard);
        renderGame();
    }
}