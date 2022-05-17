// all variables
let chickens = 0;
let chickensPerSecond = 0;
let chickensPerClick = 1;

// cost of items
let axeCost = 10;
let foxCost = 20;
let shotCost = 200;

// how many items you have
let axes = 0;
let foxes = 0;
let shotguns = 0

// Chicken incremen button
const clicker = document.getElementById('clickButton');
clicker.addEventListener("click", increment);

const axeBuyBtn = document.getElementById('buyAxe');
axeBuyBtn.addEventListener("click", buyAxe);

//function that gets called each time you click the chicken
function increment() {
    chickens += chickensPerClick; //adds the chickens per click to your total chickens
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

//will be called when user presses the buy button for the axe
function buyAxe(){
    if(chickens >= axeCost){ //checks if you have enough chickens
        //subtract cost of chickens
        chickens -= axeCost;
        document.getElementById('showChickens').innerText = chickens; //updates the HTML
        //increments the amount of multipliers you have
        axes++;
        document.getElementById('axeNum').innerText = axes;
        // double the price
        axeCost *= 2;
        document.getElementById('axeCost').innerText = axeCost;
        // multiply the number of chickens
        chickensPerClick *= 2;
        document.getElementById('showChickensPerClick').innerText = chickensPerClick;
    } else {
        alert("You don't have enough dead chickens!")
    }
}