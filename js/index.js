import DonutMaker from "./DonutMaker.js"

// DONUT GAMEPLAY ELEMENTS 

const donutCountEL = document.querySelector("#donutsMade");
const autoClickEL = document.querySelector("#autoClickers");
const multiplierEL = document.querySelector("#multipliers");
const specialCountEL = document.querySelector(".specialCountDown");

let donut = new DonutMaker();

const donutClickBtn = document.querySelector(".clickerBtn");
donutClickBtn.addEventListener("click", () => {
    donut.addDonut();
    donut.lifeTimeDonuts();
    donutCountEL.innerHTML = "Beignets Available: <br>" + donut._donutCount.toFixed(0);
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
    donutCountEL.innerHTML = "Beignets Available: <br>" + donut._donutCount.toFixed(0);
    lifetimeDonutsEL.innerHTML = "Lifetime Beignets Made: " + donut._overallDonutCount.toFixed(0);
    workTick++;
    workHistory();
    payStats();
}, 1000);

let specialTick = 30;

const mardiGrasBtn = document.querySelector(".specialBtn");
mardiGrasBtn.addEventListener("click", () => {
    donut.mardiGrasSpecial();
    specialTick--;
    messagesEL.innerHTML = "The Mardi Gras Special is Active!";
    specialCountEL.innerHTML = "Special Time Remaining: " + specialTick;
})

// const powderedSugarBtn = document.querySelector(".specialBtn2");
// powderedSugarBtn.addEventListener("click", () => {
//     donut.powderedSugarSpecial();
//     specialTick--;
//     messagesEL.innerHTML = "The Powdered Sugar Special is Active!";
//     specialCountEL.innerHTML = "Special Time Remaining: " + specialTick;
// })

const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", () => {
    donut = new DonutMaker();
    donutCountEL.innerHTML = "Number of Beignets Baked: <br>" + donut._donutCount;
    autoClickEL.innerHTML = "Auto Clickers Purchased: " + donut._autoClickerCount;
    multiplierEL.innerHTML = "Multipliers Purchased: " + donut._multiplierCount;
})

// DONUT SITE ELEMENTS
// const monthEL = document.querySelector(".month");
const lifetimeDonutsEL = document.querySelector(".lifeDonuts")
const nameEL = document.querySelector(".bakerName");
const timeEL = document.querySelector(".timeWorked");
const payEL = document.querySelector(".pay");
const beveragePicEL = document.querySelector("#beveragePic");
const beverageLvlEL = document.querySelector(".beverageLevel");
const messagesEL = document.querySelector(".messageContent");

const applyBtn = document.querySelector("#applyBtn");
applyBtn.addEventListener("click", () => {
    let name = document.querySelector("#applied").value;
    nameEL.innerHTML = name;
    console.log(name);
})

// Baker Time
let workTick = 0;
function workHistory() {
    let workOverallTime = 0;
    workOverallTime = (workTick * 0.016667).toFixed(2);
    timeEL.innerHTML = "Time Worked: " + workOverallTime + " minutes";
}

// Baker Pay
function payStats() {
    let pay = 3 * donut._overallDonutCount;
    payEL.innerHTML = "Lifetime Pay: $" + pay.toFixed(0);
}

// Beverage Level

// function beverageLvlUp() {
//     let bL = new Array[4];
//     bL[0] = /images/coffeebean.png;
//     bL[1] = /images/papercup.png;
//     bL[2] = /images/travelmug.png;
//     bL[3] = /images/coffeemug.png;

//     if (this._overallDonutCount <= 100) {
//         // beveragePicEL = display bL[0];
//         beverageLvlEL.innerHTML = "Beverage Level: Coffee Bean";
//         messagesEL.innerHTML = "You have leveled up to a new Beverage Level! <br> Coffee Bean";
//     }
//     else if (this._overallDonutCount >= 101 && this._overallDonutCount <= 300) {
//          // beveragePicEL = display bL[1];
//         beverageLvlEL.innerHTML = "Beverage Level: Paper Cup";
//         messagesEL.innerHTML = "You have leveled up to a new Beverage Level! <br> Paper Cup!";
//     }
//     else if (this._overallDonutCount >= 301 && this._overallDonutCount  <= 500) {
//          // beveragePicEL = display bL[2];
//         beverageLvlEL.innerHTML = "Beverage Level: Travel Mug";
//         messagesEL.innerHTML = "You have leveled up to a new Beverage Level! <br> Travel Mug!";
//     }
//     else if (this._overallDonutCount >= 501 && this._overallDonutCount  <= 1000) {
//         // beveragePicEL = display bL[3];
//         beverageLvlEL.innerHTML = "Beverage Level: Coffee Mug";
//         messagesEL.innerHTML = "You have leveled up to a new Beverage Level! <br> Coffee Mug!";
//     }
// }

// MONTH STUFF

// let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// const months = {
//     0: "January",
//     1: "February",
//     2: "March",
//     3: "April",
//     4: "May",
//     5: "June",
//     6: "July",
//     7: "August",
//     8: "September",
//     9: "October",
//     10: "November",
//     11: "December",
// };

// for (const property in months) {
//     console.log(`${property}: ${months[property]}`);
// }

// function generateMonths() {
//     for (let i = 1; 1 <= 365; i++) {
//         console.log(months[(i - 1) % months.length], i);
//     }
// }

// function generateMonths() {
//     for (let month of months) {
//         // console.log(month);
//         setInterval(console.log(month), 10000)
//     }
// }

// function monthTick() {
//     let monthsBegin = "";
//     let year = setInterval(m, 10000); function generateMonths() {
//         document.getElementsByClassName(".month").innerHTML = monthsBegin;

//     }
// }








