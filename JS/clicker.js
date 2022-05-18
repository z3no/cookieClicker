// all variables
let chickens = 0;
let chickensPerSecond = 0;
let chickensPerClick = 1;

// cost of items
let foxCost = 20;
let axeCost = 45;
let shotCost = 1000;

// how many items you have
let axes = 0;
let foxes = 0;
let shotgunTime = 30;

// buttons
// Chicken increment button
const clicker = document.getElementById('clickButton');
clicker.addEventListener("click", increment);
// Jack Hack buy button
const axeBuyBtn = document.getElementById('buyAxe');
axeBuyBtn.addEventListener("click", buyAxe);
// Fantastic Mr. Fox buy button
const foxBuyBtn = document.getElementById('buyFox');
foxBuyBtn.addEventListener('click', buyFox);
// Bubba Blue "Trigger" button
const shotgunBuyBtn = document.getElementById('buyShotgun');
shotgunBuyBtn.addEventListener("click", buyBubba, showBuyButton);

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
        alert("You don't have enough chickens!")
    }
}

// function called when the user buys the Fantastic Mr. Fox
function buyFox(){
    // check if you have enough chickens
    if (chickens >= foxCost){
        //subtract the cost
        chickens -= foxCost;
        document.getElementById('showChickens').innerText = chickens;
        //increment the number of Mr. Foxes you own
        foxes++;
        document.getElementById('foxNum').innerText = foxes;
        //triple the price after buying
        foxCost *= 3;
        document.getElementById('foxCost').innerText = foxCost;
        //increase the chickens per second
        chickensPerSecond += 4;
        document.getElementById('showChickensPerSecond').innerText = chickensPerSecond;
    } else { //if you don't have enough chickens
        alert("You don't have enough chickens!")
    }
}

// function called when the user buys Bubba
function buyBubba(){
    if (chickens >= shotCost){
        //subtract the cost
        chickens -= shotCost;
        document.getElementById('showChickens').innerText = chickens;
        //increase the cost of the next Bubba
        shotCost *= 3.75;
        document.getElementById('shotCost').innerText = shotCost;
        chickensPerClick *= 2;
        document.getElementById('showChickensPerClick').innerText = chickensPerClick;
        chickensPerSecond *= 2;
        document.getElementById('showChickensPerSecond').innerText = chickensPerSecond;
        let bubbaMultiplier = setInterval(function (){
            shotgunTime -= 1;
            document.getElementById('shotNum').innerText = `${shotgunTime} seconds left`;
            if (shotgunTime <= 0){
                chickensPerClick = chickensPerClick/2;
                document.getElementById('showChickensPerClick').innerText = chickensPerClick;
                chickensPerSecond = chickensPerSecond/2;
                document.getElementById('showChickensPerSecond').innerText = chickensPerSecond;
                clearInterval(bubbaMultiplier);
                document.getElementById('shotNum').innerText = `30 seconds left`;
            }
        }, 1000)
        shotgunTime = 30;
    } else {
        alert("You don't have enough chickens!")
    }
}

function showBuyButton() {
    if (chickens === shotCost){
        document.getElementById('buyShotgun').style.visibility = "";
    } else {
        document.getElementById('buyShotgun').style.visibility = "hidden";
    }
}