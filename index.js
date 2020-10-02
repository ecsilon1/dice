

 var randomNumber=Math.floor(Math.random(randomNumber)*6)+1;

if(randomNumber===1){
  document.querySelector(".img1").setAttribute("src" , "images/dice1.png");
}

 else if(randomNumber===2){
  document.querySelector(".img1").setAttribute("src" , "images/dice2.png");
}
 else if (randomNumber===3){
  document.querySelector(".img1").setAttribute("src" , "images/dice3.png");
}
 else if (randomNumber===4){
  document.querySelector(".img1").setAttribute("src" ,"images/dice4.png");
}
 else if (randomNumber===5){
  document.querySelector(".img1").setAttribute("src" , "images/dice5.png");
}
 else if (randomNumber===6){
  document.querySelector(".img1").setAttribute("src" , "images/dice6.png");
}


var secondRandomNumber=Math.floor(Math.random(randomNumber)*6)+1;

if(secondRandomNumber===1){
 document.querySelector(".img2").setAttribute("src" , "images/dice1.png");
}

else if(secondRandomNumber===2){
 document.querySelector(".img2").setAttribute("src" , "images/dice2.png");
}
else if (secondRandomNumber===3){
 document.querySelector(".img2").setAttribute("src" , "images/dice3.png");
}
else if (secondRandomNumber===4){
 document.querySelector(".img2").setAttribute("src" , "images/dice4.png");
}
else if (secondRandomNumber===5){
 document.querySelector(".img2").setAttribute("src" , "images/dice5.png");
}
else if (secondRandomNumber===6){
 document.querySelector(".img2").setAttribute("src" , "images/dice6.png");
}


if(randomNumber>secondRandomNumber){
  document.querySelector("h1").innerHTML="You WIN";
}
if(randomNumber<secondRandomNumber){
  document.querySelector("h1").innerHTML="Player 2 WINS";
}

if(randomNumber===secondRandomNumber){
  document.querySelector("h1").innerHTML="It's a tie";
}
