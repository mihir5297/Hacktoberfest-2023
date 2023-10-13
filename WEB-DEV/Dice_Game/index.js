var randomNumber1= Math.floor(Math.random()*6)+1;
var randomDiceNumber= "dice"+ randomNumber1 +".png";
var randomImageSoure= "./images/"+ randomDiceNumber;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSoure);



var randomNumber2= Math.floor(Math.random()*6)+1;
var randomDiceNumber2= "dice"+ randomNumber2 +".png";
var randomImageSoure2= "./images/"+ randomDiceNumber2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSoure2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins😉";
}
else{
    document.querySelector("h1").innerHTML="Player 2 wins😉"; 
}