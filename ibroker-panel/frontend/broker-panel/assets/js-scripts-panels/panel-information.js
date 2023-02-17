// continu button
const continueButton = document.getElementById("continue");
continueButton.addEventListener("click", checkStarsInputs);

//  check stars input
function checkStarsInputs() {
    let inputs = document.querySelectorAll(".form-control");
    inputs.forEach((input) => {
        if (input.value === "") {
            input.style.border = "1px solid red ";
            input.placeholder = "لطفا موارد را پرکنید";
        }
    });
}
