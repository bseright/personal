// portfolio1 hover animation

let portfolio1 = document.querySelector("#portfolio1")
let portfolio1Icon = document.querySelector("#portfolio1 .icon");

let masterTimer; // created to solve issue where user mouses over and out quickly -> allows timed out functions to stop if done too quickly

let portfolio1Mouseover = function() { 
    portfolio1Icon.style.opacity = "0";

    masterTimer = setTimeout(() => {
        portfolio1Icon.style.display = "none";
    }, "100")
}

let portfolio1Mouseout = function() { 
    clearTimeout(masterTimer);
    portfolio1Icon.style.display = "block";

    setTimeout(() => {
        portfolio1Icon.style.opacity = "100";
    }, "100")
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
    }, "100")
}

let portfolio2Mouseout = function() { 
    clearTimeout(masterTimer);
    portfolio2Icon.style.display = "block";

    setTimeout(() => {
        portfolio2Icon.style.opacity = "100";
    }, "100")
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
    }, "100")
}

let portfolio3Mouseout = function() { 
    clearTimeout(masterTimer);
    portfolio3Icon.style.display = "block";

    setTimeout(() => {
        portfolio3Icon.style.opacity = "100";
    }, "100")
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
    }, "100")
}

let portfolio4Mouseout = function() { 
    clearTimeout(masterTimer);
    portfolio4Icon.style.display = "block";

    setTimeout(() => {
        portfolio4Icon.style.opacity = "100";
    }, "100")
}

portfolio4.addEventListener('mouseover', portfolio4Mouseover);
portfolio4.addEventListener('mouseout', portfolio4Mouseout);