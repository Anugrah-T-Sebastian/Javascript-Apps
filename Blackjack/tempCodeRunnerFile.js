let firstCard = Math.floor((Math.random() * 11) + 2);
let secondCard = Math.floor((Math.random() * 11) + 2);;

let sum =  firstCard + secondCard;

if(sum < 21) {
    console.log("Do you want to draw a new card?");
}
else if(sum === 21) {
    console.log("You've go Blackjack!")
}
else if(sum > 21) {
    console.log("You're out of the game!");
}