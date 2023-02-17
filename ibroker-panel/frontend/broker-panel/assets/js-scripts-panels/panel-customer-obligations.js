// accept box container display none
// select accepts container
const acceptText = document.getElementById("acceptsText");
acceptText.style.display = "none";
// select button final registration
const finalRegistrationButton = document.querySelector(".final-register-btn");
const buttonIcons = document.querySelector(".continue-icons-button");
// select input checkBox  physicalCurrency
const physicalCurrency = document.getElementById("Physical-currency");
// for change display accept Text container
// box shadow
let boxShadow = document.createElement("div");
// button
finalRegistrationButton.style.display = "none";
// button icons
buttonIcons.style.display = "none";

//
physicalCurrency.addEventListener("click", () => {
    acceptText.style.display = "block";
    finalRegistrationButton.style.zIndex = "999";
    finalResponsiveButton.style.zIndex = "999";
    document.querySelector(".responsive-icons").style.zIndex = "999";
    boxShadow.classList.add("box-shadow");
    document.body.appendChild(boxShadow);
    // button
    finalRegistrationButton.style.display = "block";
    // button icons
    buttonIcons.style.display = "block";
    buttonIcons.style.zIndex = "999";
});

// financialMarket input checkBox
const financialMarket = document.getElementById("financial-market");
// sing ing header green background
const singInHeader = document.getElementById("sing-in-header");
// confirmationText display change
const confirmationText = document.getElementById("Confirmation-text");
confirmationText.addEventListener("click", () => {
    finalRegistrationButton.addEventListener("click", () => {
        finalRegistrationButton.value = " دریافت معرفی نامه ";
        singInHeader.style.display = "flex";
        boxShadow.remove();
        acceptText.style.display = "none";
        buttonIcons.style.left = "10%";
    });
});
// get Receive a letter of introduction
finalRegistrationButton.addEventListener("click ", () => {
    acceptText.style.display = "none";
});
// responsive button final register
const finalResponsiveButton = document.querySelector(
    ".responsive-button-event"
);
// event button
finalResponsiveButton.addEventListener("click", () => {
    finalResponsiveButton.value = "دریافت معرفی نامه ";
    singInHeader.style.display = "flex";
    acceptText.style.display = "none";
    boxShadow.remove();
    document.querySelector(".responsive-icons").style.left = "25%";
});
