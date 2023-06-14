var dice1 = Math.ceil(Math.random() * 6);
console.log("Dice 1 : ", dice1);

var dice2 = Math.ceil(Math.random() * 6);
console.log("Dice 2 : ", dice2);

var link1 = "images/dice" + dice1 + ".png";
var link2 = "images/dice" + dice2 + ".png";

document.getElementsByTagName("img")[0].src = link1;
document.getElementsByTagName("img")[1].src = link2;


if(dice1 > dice2) {
    document.querySelector("h1").innerHTML  = "Player 1 WON !!";
} 
else if(dice1 < dice2) {
    document.querySelector("h1").innerHTML  = "Player 2 WON !!";
}
else {
    document.querySelector("h1").innerHTML  = "OOPS Draw !!";
}



