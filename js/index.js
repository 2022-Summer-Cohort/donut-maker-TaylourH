import DonutMaker from "./DonutMaker.js"

const donutCountEL = document.querySelector("#donutsMade");
const autoClickEL = document.querySelector("#autoClickers");
const multiplierEL = document.querySelector("#multipliers");

let donut = new DonutMaker();


const donutClickBtn = document.querySelector(".clickerBtn");
donutClickBtn.addEventListener("click", () => {
    donut.addDonut();
    donutCountEL.innerHTML = "Number of Beignets Baked: <br>" + donut.donutCount;
})

const autoClickBtn = document.querySelector(".purchaseAcBtn");
autoClickBtn.addEventListener("click", () => {
    donut.buyAutoClicker();
    autoClickEL.innerHTML = "Auto Clickers Purchased: " + donut._autoClickerCount;
})

const multiplierBtn = document.querySelector(".purchaseDmBtn");
multiplierBtn.addEventListener("click", () => {
    donut.buyMultiplier();
    multiplierEL.innerHTML = "Multipliers Purchased: " + donut._multiplierCount;
})

setInterval(() => {
    donut.autoClick();
    donutCountEL.innerHTML = "Number of Beignets Baked: <br>" + donut.donutCount;
}, 1000);

const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", () => {
    donut = new DonutMaker();
    donutCountEL.innerHTML = "Number of Beignets Baked: <br>" + donut.donutCount;
    autoClickEL.innerHTML = "Auto Clickers Purchased: " + donut._autoClickerCount;
    multiplierEL.innerHTML = "Multipliers Purchased: " + donut._multiplierCount;
})




