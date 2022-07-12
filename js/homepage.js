// logout tooltip
let profileImg = document.querySelector(".nav__profile");
let showTooltip = (e) => {
    let clickedItem = e.target;
    let imgElement = profileImg.firstElementChild.firstElementChild;

    // if user cicked on profile img then show logout button
    if(clickedItem == imgElement) {
        let toolTip = e.target.parentElement.nextElementSibling;
        toolTip.classList.toggle("hidden");
    } else {
        // user clicked elsewhere so remove tooltip
        let toolTip = document.getElementById("toolTip");
        if(!toolTip.classList.contains("hidden")) {
            toolTip.classList.toggle("hidden");
        }
    }

}

document.addEventListener("click", showTooltip, true);

// Handle categories active state
let categoriesContainer = document.querySelector(".categories__container");

let handleActiveCategory = (e) => {
    let clickedCategory = e.target;
    let prevActiveCategory = categoriesContainer.getElementsByClassName("active__category");
    prevActiveCategory = prevActiveCategory[0];

    if(!clickedCategory.classList.contains("active__category")) {
        // remove previous active category
        prevActiveCategory.classList.toggle("active__category");

        // add active status to newly clicked category
        clickedCategory.classList.toggle("active__category");
    }
}

(categoriesContainer != null) ?  categoriesContainer.addEventListener("click", handleActiveCategory):console.log("We are not in category page");


// logout simulation
let logOutBtn = document.getElementById("toolTip");
let logOutAnchor = logOutBtn.firstElementChild;

logOutBtn.addEventListener("click", ()=>{
    console.log("from logout section")
    window.location.replace("./login.html");
})

// Handle active nav menu
// let handleActiveLink = (e) => {
//     let clickedLinkText = e.target.innerText;
//     let prevActiveLinkText = e.target.parentElement.getElementsByClassName("active")[0].innerText;

//     console.log("previous active link");
//     console.log(prevActiveLinkText);

//     setTimeout(800);
//     console.log("Timeout complete");

//     changeActiveLink(clickedLinkText, prevActiveLinkText);
//     console.log(clickedLinkText);
// }

// function changeActiveLink(clickedLink, prevActiveLink) {
//     let currentNav = document.querySelector(".nav__container");
//     let navLinks = currentNav.getElementsByTagName("a");
//     let navLinksArray = Array.from(navLinks);
        
//     console.log("we are here")
//     navLinksArray.forEach((link) => {
//         let linkInnerText = link.innerText;

//         if(linkInnerText == clickedLink) {
//             let clickedElement = link;
//             console.log(clickedElement, "cicked element")
//             clickedElement.classList.add("active");
//             console.log(clickedElement, "cicked element after removal")
//         } else if (linkInnerText == prevActiveLink) {
//             let activeElement = link;
//             console.log(activeElement, "Active element")
//             activeElement.classList.remove("active");
//             console.log(activeElement, "Active element after removal")
//         }
//     })

//     // Remove the active from prev and add to newly clicked element

// }

// navContainer.addEventListener("click", handleActiveLink);

let navContainer = document.querySelector(".nav__container");
let activePage = window.location.pathname;
console.log(activePage);
let navLinks = navContainer.getElementsByTagName("a")
navLinks = Array.from(navLinks);            // create array of nav links
    
navLinks.forEach(link => {
    if(link.href.includes(`${activePage}`)) {
        console.log(link);
        link.classList.add("active");
    }
})
console.log(navLinks);