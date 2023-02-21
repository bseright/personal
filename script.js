// portfolio1 hover animation

let portfolio1 = document.querySelector("#portfolio1")
let portfolio1Icon = document.querySelector("#portfolio1 .icon");

let masterTimer; // created to solve issue where user mouses over and out quickly -> allows timed out functions to stop if done too quickly

let portfolio1Mouseover = function() { 
    portfolio1Icon.style.opacity = "0";

    masterTimer = setTimeout(() => {
        portfolio1Icon.style.display = "none";
        portfolio1.appendChild(p1Div);

        setTimeout(() => {
            p1Div.style.opacity = "100";
        }, "70")
    }, "250")
}

let portfolio1Mouseout = function() { 
    clearTimeout(masterTimer);
    p1Div.style.opacity = "0";
    p1Div.remove();
    portfolio1Icon.style.display = "block";

    setTimeout(() => {
        portfolio1Icon.style.opacity = "100";
    }, "70")
}

portfolio1.addEventListener('mouseover', portfolio1Mouseover);
portfolio1.addEventListener('mouseout', portfolio1Mouseout);

// portfolio2 hover animation

let portfolio2 = document.querySelector("#portfolio2")
let portfolio2Icon = document.querySelector("#portfolio2 .icon");

let portfolio2Mouseover = function() { 
    portfolio2Icon.style.opacity = "0";

    masterTimer = setTimeout(() => {
        portfolio2Icon.style.display = "none";
    }, "70")
}

let portfolio2Mouseout = function() { 
    clearTimeout(masterTimer);
    portfolio2Icon.style.display = "block";

    setTimeout(() => {
        portfolio2Icon.style.opacity = "100";
    }, "70")
}

portfolio2.addEventListener('mouseover', portfolio2Mouseover);
portfolio2.addEventListener('mouseout', portfolio2Mouseout);

// portfolio3 hover animation

let portfolio3 = document.querySelector("#portfolio3")
let portfolio3Icon = document.querySelector("#portfolio3 .icon"); 

let portfolio3Mouseover = function() { 
    portfolio3Icon.style.opacity = "0";

    masterTimer = setTimeout(() => {
        portfolio3Icon.style.display = "none";
    }, "70")
}

let portfolio3Mouseout = function() { 
    clearTimeout(masterTimer);
    portfolio3Icon.style.display = "block";

    setTimeout(() => {
        portfolio3Icon.style.opacity = "100";
    }, "70")
}

portfolio3.addEventListener('mouseover', portfolio3Mouseover);
portfolio3.addEventListener('mouseout', portfolio3Mouseout);

// portfolio4 hover animation

let portfolio4 = document.querySelector("#portfolio4")
let portfolio4Icon = document.querySelector("#portfolio4 .icon");

let portfolio4Mouseover = function() { 
    portfolio4Icon.style.opacity = "0";

    masterTimer = setTimeout(() => {
        portfolio4Icon.style.display = "none";
    }, "70")
}

let portfolio4Mouseout = function() { 
    clearTimeout(masterTimer);
    portfolio4Icon.style.display = "block";

    setTimeout(() => {
        portfolio4Icon.style.opacity = "100";
    }, "70")
}

portfolio4.addEventListener('mouseover', portfolio4Mouseover);
portfolio4.addEventListener('mouseout', portfolio4Mouseout);

// creating portfolio1 hover content 

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




