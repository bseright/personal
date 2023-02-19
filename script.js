// portfolio1 hover animation

let portfolio1 = document.querySelector("#portfolio1")
let portfolio1Icon = document.querySelector("#portfolio1 .icon");

let masterTimer; // created to solve issue where user mouses over and out quickly -> allows timed out functions to stop if done too quickly

let portfolio1Mouseover = function() { 
    portfolio1Icon.style.opacity = "0";

    masterTimer = setTimeout(() => {
        portfolio1Icon.style.display = "none";
        portfolio1.appendChild(p1Div);
    }, "70")
}

let portfolio1Mouseout = function() { 
    clearTimeout(masterTimer);
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

// createing portfolio1 hover content 

let p1Div = document.createElement("div");
p1Div.classList.add("p1Div");

let p1Header = document.createElement("h3");
let p1HeaderText = document.createTextNode("Rock Paper Scissors");
p1Header.appendChild(p1HeaderText);

let p1Screenshot = document.createElement("img");
p1Screenshot.src = "images/rps-screenshot2.PNG";

let p1Para = document.createElement("p");
let p1ParaText = document.createTextNode("An animated game of Rock, Paper, Scissors with randomized opponent selection.");
p1Para.appendChild(p1ParaText);

p1Div.appendChild(p1Header);
p1Div.appendChild(p1Screenshot);
p1Div.appendChild(p1Para);