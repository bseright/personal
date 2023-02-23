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
    }, "250")
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

let createPContent = function() {


    
}

let p1Div = document.createElement("div");
p1Div.classList.add("p1Div");

let p1ContentDiv = document.createElement("div");
p1ContentDiv.classList.add("p1ContentDiv");

let p1ButtonDiv = document.createElement("div");
p1ButtonDiv.classList.add("p1ButtonDiv")

let p1Screenshot = document.createElement("img");
p1Screenshot.src = "images/rps-screenshot.PNG";
p1ContentDiv.appendChild(p1Screenshot);

let p1TextContent = document.createElement("div");
p1TextContent.classList.add("p1TextContent");
p1ContentDiv.appendChild(p1TextContent);

let p1Title = document.createElement("h3"); // Main title text
let p1TitleText = document.createTextNode("Rock, Paper, Scissors");
p1Title.appendChild(p1TitleText);
p1TextContent.appendChild(p1Title);

let p1Divider = document.createElement("div"); // Creation of divider
p1Divider.classList.add("p1Divider");
p1TextContent.appendChild(p1Divider);

let p1Para = document.createElement("p"); // Project description
let p1ParaText = document.createTextNode("An animated game of Rock, Paper, Scissors with randomized opponent selection. Rounds are played until either party reaches a score of five. Once the ending score is reached, the user is alerted of the outcome. This project was a great assessment of my animations skills  and ability to keep track of and clear running timeouts.");
p1Para.appendChild(p1ParaText);
p1TextContent.appendChild(p1Para);

let p1Repo = document.createElement("button");
let repoText = document.createTextNode("Repo");
p1Repo.appendChild(repoText);
p1Repo.classList.add("p1Repo");
p1ButtonDiv.appendChild(p1Repo);

let p1Demo = document.createElement("button");
let demoText = document.createTextNode("Demo");
p1Demo.appendChild(demoText)
p1Demo.classList.add("p1Demo");
p1ButtonDiv.appendChild(p1Demo);

p1Div.appendChild(p1ContentDiv);
p1Div.appendChild(p1ButtonDiv);




