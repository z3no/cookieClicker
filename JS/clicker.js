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

//function that gets called when you click the chicken
function increment() {
    chickens += 1;
    document.getElementById('showChickens').innerText = chickens;
}