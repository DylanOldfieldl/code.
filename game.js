let player = prompt("Enter rock (R), paper (p) or scissors (s)")

if (player == "r")
{alert ("you have chosen ROCK")
}
else if 
(player == "p")
{alert ("you have chosen PAPER")
}
else
{alert ("you have chosen SCISSORS")

}

let random = Math.floor (Math.random() * 3) + 1
let computer = 0
 
if (random == 1){
 alert("Computer has chosen rock");
computer = "r"
}
else if (random == 2){
    alert("Computer has chosen paper");
   computer = "p"
   }
 else  if (random ==3){
    alert("Computer has chosen scissors");
   computer = "s"
   }

   if (player == computer) {
    alert ("it's a draw")}

   else if (player == "r")     if (computer == "s" ) {alert ("you win")}
   else {alert ("you lose")}

   else if (player == "s")     if (computer == "p" ) {alert ("you win")}
   else {alert ("you lose")}

   else if (player == "p") {    if (computer == "s" ) {alert ("you lose")}
   else {alert ("you lose")}


   }
