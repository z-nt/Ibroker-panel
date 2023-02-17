// get hidden container
const rulesContainer = document.getElementById("rules-container");
// get element check box
const checkBoxInput = document.getElementById("choose-input");
// box shadow
let boxShadow = document.createElement("div");

// function check choose input checkbox
//prompt rules container
checkBoxInput.addEventListener("click", () => {
    rulesContainer.style.transition = "all 0.3s ease-in-out";
    rulesContainer.classList.add("rules-container-on");
    boxShadow.classList.add("box-shadow");
    document.body.appendChild(boxShadow);
});
// function check rules container
// get checkbox rules container
const inputAcceptRules = document.getElementById("rules-input");
const buttonAcceptRules = document.querySelector(".accept-rul");
// function control container
buttonAcceptRules.addEventListener("click", function ()  {
    rulesContainer.remove();
    boxShadow.remove();
});
// Description
let description = document.getElementById("Description");
description.addEventListener("click", () => {
    boxShadow.classList.add("box-shadow");
    document.body.appendChild(boxShadow);
    // description element 
    let descriptionElement = document.createElement("p");
    // description text
    descriptionElement.innerHTML = `
    در ادبیات بورسی، حساب وکالتی به حسابی گفته می‌شود که برای خرید کالا از تالار بورس کالا از آن استفاده می‌شود. به این صورت که شما مبلغ مورد نیاز برای ورود به بازار را در این حساب قرار می‌دهید و به کارگزاری وکالت می‌دهید که تا پایان انجام عملیات این مبلغ را مسدود کند (یعنی شما تا پایان زمان معامله حق برداشت وجه را ندارید). اگر تا پایان روز معامله‌ای برای شما در تالار بورس کالا ثبت نشود، پول از حالت مسدودی خارج می‌شود. اما اگر معامله انجام شود، این پول از حساب شما برداشت و به حساب اتاق پایاپای بورس کالای ایران واریز می شود.
    `;
    // description paren container
    let descriptionContainer = document.createElement("div");
    // add class container
    descriptionContainer.classList.add("description-container");
    descriptionContainer.innerHTML = `
    <i class="fa fa-close" id="close-description"></i>
    `;
    // append element child
    descriptionContainer.appendChild(descriptionElement);
    // append to document
    document.body.appendChild(descriptionContainer);
    // close element
    const closeDescription = document.getElementById("close-description");
    closeDescription.addEventListener("click", () => {
        removeElement(descriptionContainer);
        boxShadow.remove();
    });
});
// remove element
function removeElement(element) {
    element.remove();
}
