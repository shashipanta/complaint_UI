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
        let toolTip = document.getElementById("tooltip");
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

(categoriesContainer != null) ?  categoriesContainer.addEventListener("click", handleActiveCategory):console.log("We are in homepage");