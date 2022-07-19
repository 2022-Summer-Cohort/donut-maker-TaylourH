import DonutMaker from "./DonutMaker.js"

// DONUT GAMEPLAY ELEMENTS 
const donutCountEL = document.querySelector("#donutsMade");
const autoClickEL = document.querySelector("#autoClickers");
const multiplierEL = document.querySelector("#multipliers");

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
    beverageLvlUp();
}, 1000);

const mardiGrasBtn = document.querySelector(".specialBtn");
mardiGrasBtn.addEventListener("click", () => {
    donut.mardiGrasSpecial();
    let specialTick = 30;
    let specialCounter = setInterval(countDown, 1000); function countDown() {
        messagesEL.innerHTML = "The Mardi Gras Special is Active!";
        document.querySelector(".specialCountDown").innerHTML = "Special Time Remaining: " + specialTick;
        specialTick -= 1;
        if (specialTick === 0) {
            document.querySelector(".specialCountDown").innerHTML = "Special Time Remaining: " + specialTick; clearInterval(specialCounter);
        }
    }
})

const powderedSugarBtn = document.querySelector(".specialBtn2");
powderedSugarBtn.addEventListener("click", () => {
    donut.powderedSugarSpecial();
    let specialTick = 30;
    let specialCounter = setInterval(countDown, 1000); function countDown() {
        messagesEL.innerHTML = "The Powdered Sugar Special is Active!";
        document.querySelector(".specialCountDown2").innerHTML = "Special Time Remaining: " + specialTick;
        specialTick -= 1;
        if (specialTick === 0) {
            document.querySelector(".specialCountDown2").innerHTML = "Special Time Remaining: " + specialTick; clearInterval(specialCounter);
        }
    }
})

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
function beverageLvlUp() {
    let bLPic = ["/images/coffeebean.png", "/images/papercup.png", "/images/travelmug.png", "/images/coffeemug.png"];

    if (donut._overallDonutCount >= 25 && donut._overallDonutCount <= 100) {
        document.getElementById("beveragePic").src = bLPic[0];
        beverageLvlEL.innerHTML = "Beverage Level: Coffee Bean";
        messagesEL.innerHTML = "You have leveled up to a new Beverage Level! <br> Coffee Bean";
    }
    else if (donut._overallDonutCount >= 101 && donut._overallDonutCount <= 500) {
        document.getElementById("beveragePic").src = bLPic[1];
        beverageLvlEL.innerHTML = "Beverage Level: Paper Cup";
        messagesEL.innerHTML = "You have leveled up to a new Beverage Level! <br> Paper Cup!";
    }
    else if (donut._overallDonutCountt >= 501 && donut._overallDonutCount <= 1250) {
        document.getElementById("beveragePic").src = bLPic[2];
        beverageLvlEL.innerHTML = "Beverage Level: Travel Mug";
        messagesEL.innerHTML = "You have leveled up to a new Beverage Level! <br> Travel Mug!";
    }
    else if (donut._overallDonutCount >= 1251) {
        document.getElementById("beveragePic").src = bLPic[3];
        beverageLvlEL.innerHTML = "Beverage Level: Coffee Mug";
        messagesEL.innerHTML = "You have leveled up to a new Beverage Level! <br> Coffee Mug!";
    }
}

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










