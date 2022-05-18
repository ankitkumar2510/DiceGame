var randomNumber1 = Math.floor((Math.random()*6)+1);
var imageSelected = "dice"+randomNumber1+".png";
var imageAddress = "images/"+imageSelected;
var element = document.querySelectorAll("img")[0];
element.setAttribute("src",imageAddress);
// if (randomNumber1===1){
//     element.setAttribute("src","images/dice1.png");
// }else if(randomNumber1===2){
//     element.setAttribute("src","images/dice2.png");
// }else if(randomNumber1===3){
//     element.setAttribute("src","images/dice3.png");
// }else if(randomNumber1===4){
//     element.setAttribute("src","images/dice4.png");
// }else if(randomNumber1===5){
//     element.setAttribute("src","images/dice5.png");
// }else{
//     element.setAttribute("src","images/dice6.png");
// }


var randomNumber2 = Math.floor((Math.random()*6)+1);
var imageSelected2 = "dice"+randomNumber2+".png";
var imageAddress2 = "images/"+imageSelected2;
var element1 = document.querySelectorAll("img")[1];
element1.setAttribute("src",imageAddress2);

var headElement = document.querySelector("h1");
// console.log(headElement);
if (randomNumber1>randomNumber2){
    headElement.innerHTML="🚩Player1 Win!";
}else if (randomNumber1<randomNumber2){
    headElement.innerText="Player2 Win!🚩";
}else{
    headElement.innerText="Draws!!!";
}
