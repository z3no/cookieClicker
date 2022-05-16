let chickens = 0;
let chickensPerSecond = 0;
let chickensPerClick = 1;
let button = document.getElementById('clickButton');
button.addEventListener("click", increment);

let axeCost = 10;
let foxCost = 20;
let shotCost = 200;

let axes = 0;
let foxes = 0;
let shotguns = 0

//function that gets called each time you click the chicken
function increment() {
    chickens += 1;
    document.getElementById('showChickens').innerText = chickens;

    if (chickens >= 7800000000) {
        document.getElementById('gameOver').innerText = "You won the game! There will never be fried chicken again :'("
    }
}

//function that happens every second
setInterval(function (){
    chickens += chickensPerSecond //adds the number of chickens per second to your total chickens

    document.getElementById('showChickens').innerText = chickens;
}, 1000)

//will be called when user presses the buy button
function buyAxe(){
    if(chickens => axeCost){
        chickens -= axeCost;
        document.getElementById('showChickens').innerText = chickens;
        axes++;
    }
}
