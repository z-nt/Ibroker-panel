const inputGetCode = document.getElementById("inputEmail4");
// form  button
const formLoginButtonSubmit = document.getElementById("log-in");
formLoginButtonSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputGetCode.value === "") {
        inputGetCode.placeholder = " لطفا کد را وارد کنید";
        inputGetCode.style.border = "1px solid red ";
    } else {
        return true;
    }
});
// timer
// element for timer
// form time container
// minutes
let minutes = document.getElementById("minutes");
// second
let second = document.getElementById("second");
// timer text
let timerText = document.getElementById("timer-text");
// start second
let startSecond = 59;
// end second
let endSecond = 0;
// end minutes
let endMinutes = 1;
// set interval
// function create Element
// create object again send button
// create object
function createElement(tagName, style, id, elementEvent) {
    let element = document.createElement(tagName);
    let timeContainer = document.getElementById("form-time-container");
    element.textContent = "ارسال دوباره";
    element.classList.add(style);
    element.setAttribute("id", `${id}`);
    element.addEventListener("click", elementEvent);
    timeContainer.appendChild(element);
}
// insert element

// restart the timer
// button
let sendAgainBtn = document.getElementById("send-code-again");
if (endMinutes !== 0 && startSecond !== 0) {
    let timer = setInterval(() => {
        if (startSecond === endSecond) {
            startSecond = 59;
            endMinutes = 0;
        } else {
            startSecond--;
        }
        if (startSecond === 0 && endMinutes === 0) {
            timerText.style.display = "none";
            clearInterval(timer);
            createElement("a", "send-again", "send-code-again", againSendCode);
        }
        second.innerText = startSecond;
        minutes.innerText = endMinutes;
    }, 1000);
}
// set  for a tag again send code
function againSendCode() {
    document
        .getElementById("send-code-again")
        .remove();
    timerText.style.display = "block";
    if (startSecond === 0 && endMinutes === 0) {
        startSecond = 59;
        endMinutes = 1;
        second.innerText = startSecond;
        minutes.innerText = endMinutes;
        setInterval(() => {
            if (startSecond === endSecond) {
                startSecond = 59;
                endMinutes = 0;
            } else {
                startSecond--;
            }
            if (startSecond === 0 && endMinutes === 0) {
                timerText.style.display = "none";
                createElement(
                    "a",
                    "send-again",
                    "send-code-again",
                    againSendCode
                );
            }
            second.innerText = startSecond;
            minutes.innerText = endMinutes;
        }, 1000);
    }
}
