let p1 = document.querySelector("#p1")
let p1Icon = document.querySelector("#p1 .icon");

let p2 = document.querySelector("#p2")
let p2Icon = document.querySelector("#p2 .icon");

let p3 = document.querySelector("#p3")
let p3Icon = document.querySelector("#p3 .icon");

let p4 = document.querySelector("#p4")
let p4Icon = document.querySelector("#p4 .icon");

let masterTimer; // created to solve issue where user mouses over and out quickly -> allows timed out functions to stop if done too quickly

let pMouseover = function() {
    let thisIcon = eval(this.id + "Icon");
    let thisDiv = eval(this.id + "Div");
    let container = eval(this.id);

    thisIcon.style.opacity = "0";

    masterTimer = setTimeout(() => {
        thisIcon.style.display = "none";
        container.appendChild(thisDiv);

        setTimeout(() => {
            thisDiv.style.opacity = "100";
        }, "70")
    }, "275")
}

let pMouseout = function() { 
    let thisIcon = eval(this.id + "Icon");
    let thisDiv = eval(this.id + "Div");

    clearTimeout(masterTimer);
    thisDiv.style.opacity = "0";
    thisDiv.remove();
    thisIcon.style.display = "block";

    setTimeout(() => {
        thisIcon.style.opacity = "100";
    }, "70")
}

p1.addEventListener('mouseover', pMouseover);
p1.addEventListener('mouseout', pMouseout);

p2.addEventListener('mouseover', pMouseover);
p2.addEventListener('mouseout', pMouseout);

p3.addEventListener('mouseover', pMouseover);
p3.addEventListener('mouseout', pMouseout);

p4.addEventListener('mouseover', pMouseover);
p4.addEventListener('mouseout', pMouseout);

// creating portfolio1 hover content 

let p1Div;
let p2Div;
let p3Div;
let p4Div;

let getTitleText = "Rock, Paper, Scissors"
let p2TitleText = "Etch-a-Sketch";
let p3TitleText = "Calculator";
let p4TitleText = "Mobile-Responsive Design";

let getParaText = "An animated game of Rock, Paper, Scissors with randomized opponent selection. Rounds are played until either party reaches a score of five. Once the ending score is reached, the user is alerted of the outcome. This project was a great assessment of my animations skills  and ability to keep track of and clear running timeouts.";
let p2ParaText = "Placeholder";
let p3ParaText = "Placeholder";
let p4ParaText = "Placeholder";

function createContent(whichP) {

    let pDiv = document.createElement("div");
    pDiv.classList.add("pDiv");

    let pContentDiv = document.createElement("div");
    pContentDiv.classList.add("pContentDiv");

    let pButtonDiv = document.createElement("div");
    pButtonDiv.classList.add("pButtonDiv")

    let pScreenshot = document.createElement("img");
    pContentDiv.appendChild(pScreenshot);

    let pTextContent = document.createElement("div");
    pTextContent.classList.add("pTextContent");
    pContentDiv.appendChild(pTextContent);

    let pTitle = document.createElement("h3"); // Main title text
    let pTitleText = document.createTextNode(getTitleText);
    pTitle.appendChild(pTitleText);
    pTextContent.appendChild(pTitle);

    let pDivider = document.createElement("div"); // Creation of divider
    pDivider.classList.add("pDivider");
    pTextContent.appendChild(pDivider);

    let pPara = document.createElement("p"); // Project description
    let pParaText = document.createTextNode(getParaText);
    pPara.appendChild(pParaText);
    pTextContent.appendChild(pPara);

    let pRepo = document.createElement("button");
    let repoText = document.createTextNode("Repo");
    pRepo.appendChild(repoText);
    pRepo.classList.add("pRepo");
    pButtonDiv.appendChild(pRepo);

    let pDemo = document.createElement("button");
    let demoText = document.createTextNode("Demo");
    pDemo.appendChild(demoText)
    pDemo.classList.add("pDemo");
    pButtonDiv.appendChild(pDemo);

    if(whichP === "p1") {
        pScreenshot.src = "images/rps-screenshot.PNG";
        getTitleText = p2TitleText;
        getParaText = p2ParaText;
        p1Div = pDiv;
    } else if (whichP === "p2") {
        pScreenshot.src = "images/etch-screenshot.PNG";
        getTitleText = p3TitleText;
        getParaText = p3ParaText;
        p2Div = pDiv;
    } else if (whichP === "p3") {
        pScreenshot.src = "images/calc-screenshot.PNG";
        getTitleText = p4TitleText;
        getParaText = p4ParaText;
        p3Div = pDiv;
    } else {
        pScreenshot.src = "images/mobile-screenshot.PNG";
        p4Div = pDiv;
    }

    pDiv.appendChild(pContentDiv);
    pDiv.appendChild(pButtonDiv);
}

createContent("p1");
createContent("p2");
createContent("p3");
createContent("p4");

// start of navbar animations

let navButtons = document.querySelectorAll(".top-menu li");
let sections = document.querySelectorAll(".section");
let active = document.querySelector(".active");

navButtons.forEach(item => {
    item.addEventListener('click', function() {
        active.classList.remove("active");
        item.classList.add("active");

        navButtons = document.querySelectorAll(".top-menu li");
        active = document.querySelector(".active");
    })
})
