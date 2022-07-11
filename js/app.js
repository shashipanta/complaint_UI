// toggle Show password and Hide password
let passwordField = document.querySelector('#pwd');
let confirmPwdField = document.querySelector('#confirmPwd');

let toggleShowPassword = (e) => {
    let passwordContainer = e.target.parentElement.firstElementChild;

    if(passwordContainer.type === "password") {
        // change disabled eye icon to not disabled eye icon
        e.target.innerText = "visibility";
        passwordContainer.type = "text";
    } else {
        // change not disabled eye icon to disabled eye icon
        e.target.innerText = "visibility_off";
        passwordContainer.type = "password";
    }

}


let eyeToggleBtns = document.querySelectorAll('.infoIcon');

// There are two eye icons that we want to look for
for(let i=0; i < eyeToggleBtns.length; i++) {
    eyeToggleBtns[i].addEventListener("click", toggleShowPassword);
}

// hide eyeIcon if there is no input
let toggleEyeIcon = (e) => {
    let eyeIcon = e.target.parentElement.lastElementChild;
    console.log("Input length" + e.target.value.length)
    console.log(e.target.value.length == 0 && eyeIcon.classList.contains('activeIcon'))
    if(e.target.value.length >0) {
        console.log(eyeIcon);
        if(!eyeIcon.classList.contains('activeIcon')) {
            eyeIcon.classList.remove('infoIcon');
            eyeIcon.classList.add('activeIcon');
        }
    } else if(e.target.value.length == 0 && eyeIcon.classList.contains('activeIcon') ) {
        eyeIcon.classList.remove('activeIcon');
        eyeIcon.classList.add('infoIcon');

        // change the icon visibility to default one too
        eyeIcon.innerText = "visibility_off"

    }
}
passwordField.addEventListener("keyup", toggleEyeIcon);
confirmPwdField.addEventListener("keyup", toggleEyeIcon);


