// store each portfolio item and corresponding icon
let p1 = document.querySelector("#p1")
let p1Icon = document.querySelector("#p1 .icon");

let p2 = document.querySelector("#p2")
let p2Icon = document.querySelector("#p2 .icon");

let p3 = document.querySelector("#p3")
let p3Icon = document.querySelector("#p3 .icon");

let p4 = document.querySelector("#p4")
let p4Icon = document.querySelector("#p4 .icon");

let currentRepo; // hosted globally to reassign repo and demo links on hover
let repoLink;
let currentDemo;
let demoLink;

let masterTimer; // created to solve issue where user mouses over and out quickly -> allows timed out functions to stop if done too quickly

let pMouseover = function() {
    clearTimeout(masterTimer); // avoids content remaining or reappearing due to quick interaction

    // discover current elements based on current portfolio item
    let thisIcon = eval(this.id + "Icon");
    let thisDiv = eval(this.id + "Div");
    let container = eval(this.id);

    let thisRepo = eval(this.id + "RepoButton");
    thisRepo.addEventListener('click', goRepo);
    
    // assign repo and demo links based on current portfolio item
    repoLink = eval(this.id + "Repo");
    demoLink = eval(this.id + "Demo");

    thisIcon.style.opacity = "0"; //

    masterTimer = setTimeout(() => {
        thisIcon.style.display = "none";
        container.appendChild(thisDiv);

        setTimeout(() => {
            thisDiv.style.opacity = "100";
        }, "30")
    }, "220")
}

let pMouseout = function() { 
    clearTimeout(masterTimer);
    let thisIcon = eval(this.id + "Icon");
    let thisDiv = eval(this.id + "Div");

    thisDiv.style.opacity = "0";
    thisDiv.remove();
    thisIcon.style.display = "block";

    setTimeout(() => {
        thisIcon.style.opacity = "100";
    }, "70")
}

// mouse over/leave event listeners for each portfolio item
p1.addEventListener('mouseover', pMouseover);
p1.addEventListener('mouseleave', pMouseout);

p2.addEventListener('mouseover', pMouseover);
p2.addEventListener('mouseleave', pMouseout);

p3.addEventListener('mouseover', pMouseover);
p3.addEventListener('mouseleave', pMouseout);

p4.addEventListener('mouseover', pMouseover);
p4.addEventListener('mouseleave', pMouseout);

// store text content and links
let getTitleText = "Rock, Paper, Scissors"
let p2TitleText = "Etch-a-Sketch";
let p3TitleText = "Calculator";
let p4TitleText = "Mobile-Responsive Design";

let getParaText = "An animated game of Rock, Paper, Scissors with randomized opponent selection. Rounds are played until either party reaches a score of five. Once the ending score is reached, the user is alerted of the outcome.";
let p2ParaText = "An interactive Etch-a-Sketch with scrollable knobs that alter the cursor position and color. The user can randomize color or select a unique color with the provided RGB knobs.";
let p3ParaText = "A simple calulator with the ability to retain previous outcomes to be further manipulated. For some added flair, there is a toggle to select dark or light themes.";
let p4ParaText = "My portfolio! Although I am aware that there are many paths to jump start mobile-responsive design, I wanted my first attempt to come from vanilla libraries.";

let p1Repo = "https://github.com/bseright/rock-paper-scissors";
let p2Repo = "https://github.com/bseright/etch-a-sketch";
let p3Repo = "https://github.com/bseright/calculator";
let p4Repo = "https://github.com/bseright/personal";

let p1Demo = "https://bseright.github.io/rock-paper-scissors/";
let p2Demo = "https://bseright.github.io/etch-a-sketch/";
let p3Demo = "https://bseright.github.io/calculator/";
let p4Demo = "https://britainseright.com";

// avoid rewriting html and css by assigning the same classes but different text content to each element
function createContent(whichP) {

    // creation of portfolio divs (pDiv > pContent + pButton)
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

    let pTitle = document.createElement("h3"); // main title text
    let pTitleText = document.createTextNode(getTitleText);
    pTitle.appendChild(pTitleText);
    pTextContent.appendChild(pTitle);

    let pDivider = document.createElement("div"); // creation of divider
    pDivider.classList.add("pDivider");
    pTextContent.appendChild(pDivider);

    let pPara = document.createElement("p"); // project description
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

    // assign image, title, and paragraph content based on current portfolio item
    if(whichP === "p1") {
        pScreenshot.src = "images/rps-screenshot.PNG";
        getTitleText = p2TitleText;
        getParaText = p2ParaText;
        p1Div = pDiv;
        p1RepoButton = pRepo;
    } else if (whichP === "p2") {
        pScreenshot.src = "images/etch-screenshot.PNG";
        getTitleText = p3TitleText;
        getParaText = p3ParaText;
        p2Div = pDiv;
        p2RepoButton = pRepo;
    } else if (whichP === "p3") {
        pScreenshot.src = "images/calc-screenshot.PNG";
        getTitleText = p4TitleText;
        getParaText = p4ParaText;
        p3Div = pDiv;
        p3RepoButton = pRepo;
    } else {
        pScreenshot.src = "images/mobile-screenshot.PNG";
        p4Div = pDiv;
        p4RepoButton = pRepo;
    }

    pDiv.appendChild(pContentDiv);
    pDiv.appendChild(pButtonDiv);
}

// create all portfolio content
createContent("p1");
createContent("p2");
createContent("p3");
createContent("p4");

// animate nav bar on click and establish active class for scrolling animation
let navButtons = document.querySelectorAll(".top-menu li");
let active = document.querySelector(".active");

navButtons.forEach(item => {
    item.addEventListener('click', function() {
        active.classList.remove("active");
        item.classList.add("active");

        navButtons = document.querySelectorAll(".top-menu li");
        active = document.querySelector(".active");
    })
})

// assign current repo based on current portfolio item hover
let getRepoDemo = function() {
    currentRepo = document.querySelector(".pRepo");
    currentRepo.addEventListener('click', goRepo);
    currentDemo = document.querySelector(".pDemo");
    currentDemo.addEventListener('click', goDemo);
}

let goRepo = function() {
    window.open(repoLink, '_blank');
}

let goDemo = function() {
    window.open(demoLink, '_blank');
}

/*
// Get all sections that have an ID defined
const sections = document.querySelectorAll(".section");
let sectionID;

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionID = current.getAttribute("id");
    
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".top-nav li [href*=" + sectionID + "]").classList.add("active");
    } else {
      document.querySelector(".top-nav li a[href*=" + sectionID + "]").classList.remove("active");
    }
  });
}
*/
