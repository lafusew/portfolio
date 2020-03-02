import Parallax from 'parallax-js';
// import './style/style.scss';

var scene = document.querySelector(".scene");
var parallaxInstance = new Parallax(scene);

//Conctact Varibles
let emailButton = document.querySelector("#emailLogo");
let phoneButton = document.querySelector("#phoneLogo");

//Contact Callback

function copyMail() {
    navigator.clipboard.writeText("antoine.oddoz@live.fr")
};

function mailText() {
    let mailText = document.querySelector("#mailText");
    mailText.classList.toggle("displayCopyText");
    setTimeout(function mailDisplayOut() {mailText.classList.toggle("displayCopyText") }, 1000);
};

function copyPhone() {
    navigator.clipboard.writeText("06 89 99 46 15");
};

function phoneText() {
    let numberText = document.querySelector("#phoneText");
    numberText.classList.toggle("displayCopyText");
    setTimeout(function changingText() {numberText.innerText= "06 89 99 46 15"},1000)
    setTimeout(function mailDisplayOut() {numberText.classList.toggle("displayCopyText") }, 3000);
    setTimeout(function changingText() {numberText.innerText= "Copié !"},4000)

}
//Contact Listenner
emailButton.addEventListener("click", copyMail);
emailButton.addEventListener("click", mailText);
phoneButton.addEventListener("click", copyPhone);
phoneButton.addEventListener("click", phoneText);


let darkSwitch = document.querySelector(".switch");
let darkButton = document.querySelector(".button");
let darkDeco = document.querySelector(".deco");
let darkCloud = document.querySelector(".cloud");
let darkC1 = document.querySelector(".c1");
let darkC2 = document.querySelector(".c2");
let darkC3 = document.querySelector(".c3");

let gridBox = document.querySelectorAll('.gridBox');

/*
function darkModeButton() {
    darkSwitch.classList.toggle("switchDark");
    darkButton.classList.toggle("buttonDark");
    darkDeco.classList.toggle("decoDark");
    darkCloud.classList.toggle("cloudDark");
    darkC1.classList.toggle("c1Dark");
    darkC2.classList.toggle("c2Dark");
    darkC3.classList.toggle("c3Dark");

    gridBox.forEach(element => {
        element.classList.toggle('gridBoxDark');
    });

}

darkSwitch.addEventListener("click", darkModeButton);
*/