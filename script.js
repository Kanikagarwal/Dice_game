let player1 = prompt("Player 1 name");
let player2 = prompt("Player 2 name");
var human1 = player1.slice(0,1).toUpperCase() + player1.slice(1,player1.length).toLowerCase();
var human2 = player2.slice(0,1).toUpperCase() + player2.slice(1,player2.length).toLowerCase();
switch (player1) {
    case "":
        human1 = "Player 1"
        break;
}
switch (player2) {
    case "":
        human2 = "Player 2"
        break;
}
document.getElementById("player1").innerText = human1;
document.getElementById("player2").innerText = human2 ;


function roll(){
    let newSrc1 = Math.floor((Math.random()*6)+1);
     document.getElementById("player_1").setAttribute("src","dice"+newSrc1+".png");
    let newSrc2 =Math.floor((Math.random()*6)+1);
     document.getElementById("player_2").setAttribute("src","dice"+newSrc2+".png");
if(newSrc1 < newSrc2){
document.querySelector("h1").innerText  = human2 + " Wins!!";
}
else if(newSrc1 === newSrc2){
    document.querySelector("h1").innerText  = "It is a Draw..." ;
}

else{
    document.querySelector("h1").innerText  = human1 + " Wins!!";
}

}
