Ticking = 3
Timer = document.getElementById("timer")

function GameOver() {

Timer.innerHTML = "" + Ticking;
Ticking--;
console.log(Ticking)

if(Ticking >= 0) {

setTimeout(function() { GameOver(); }, 5000.0/3); 

}
else if(Ticking = 2) {


}
}




GameOver() 
