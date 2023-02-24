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

let p1TitleText = "Rock, Paper, Scissor";

function createContent(whichP) {
    let pTitleText = document.createTextNode(p1TitleText);
    let pParaText = document.createTextNode("An animated game of Rock, Paper, Scissors with randomized opponent selection. Rounds are played until either party reaches a score of five. Once the ending score is reached, the user is alerted of the outcome. This project was a great assessment of my animations skills  and ability to keep track of and clear running timeouts.");

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
    pTitle.appendChild(pTitleText);
    pTextContent.appendChild(pTitle);

    let pDivider = document.createElement("div"); // Creation of divider
    pDivider.classList.add("pDivider");
    pTextContent.appendChild(pDivider);

    let pPara = document.createElement("p"); // Project description
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
        p1Div = pDiv;
    } else if (whichP === "p2") {
        p2Div = pDiv;
    } else if (whichP === "p3") {
        p3Div = pDiv;
    } else {
        p4Div = pDiv;
    }

    pDiv.appendChild(pContentDiv);
    pDiv.appendChild(pButtonDiv);
}

createContent("p1");
createContent("p2");
createContent("p3");
createContent("p4");



