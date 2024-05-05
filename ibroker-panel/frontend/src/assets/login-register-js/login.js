/******login-form******/
/**user-name**/
const usernameInput = document.getElementById("user-name");
/**user-name**/
/**user-password**/
const userPassword = document.getElementById("user-password");
/**user-password**/
/**captchaCode**/
const captchaCode = document.getElementById("input-captcha-code");
/**captchaCode**/
/**input-captcha**/
const inputCaptcha = document.getElementById("input-zip");
/**input-captcha**/

/**form-button-submit**/
const formLoginButtonSubmit = document.getElementById("log-in");
/**form-button-submit**/
// refresh button
const refreshIcon = document.getElementById("refresh-icon");

/**Character-limit**/
const characterLimitUsername = [
    "/",
    "*",
    "%",
    "$",
    "&",
    "+",
    "-",
    "@",
    "(",
    ")",
    "{",
    "}",
    "[",
    "]",
    "=",
    " ",
];
/**Character-limit**/
/**form-login**/
const formLogin = document.getElementById("form-login");
/**form-login**/
/**select user-input**/
const userInput = document.querySelectorAll(".user-input");
/**select user-input**/

/**function submit form login**/
formLoginButtonSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputCaptcha.value === "") {
        inputCaptcha.classList.add("emptyError");
        inputCaptcha.placeholder = " لطفا کد را وارد کنید";
        inputCaptcha.style.border = "1px solid red ";
    } else {
        if (captchaCode.value !== inputCaptcha.value) {
            inputCaptcha.classList.add("emptyError");
            inputCaptcha.value = " ";
            inputCaptcha.placeholder = " کد را اشتباه وارد کردید";
            inputCaptcha.style.color = "red";
            inputCaptcha.style.border = "1px solid red ";
        } else {
            inputCaptcha.style.color = "green";
            inputCaptcha.style.border = "1px solid green ";
            return true;
        }
    }
    userInput.forEach((input) => {
        if (input.value === "") {
            input.classList.add("emptyError");
            input.placeholder = " لطفا موارد را پر کنید";
            input.style.border = "1px solid red ";
        } else {
            return false;
        }
    });
});
/**function submit form login**/
function check() {
    // user-name
    if (usernameInput.value === Number(usernameInput.value)) {
        usernameInput.classList.add("emptyError");
        usernameInput.placeholder = " لطفا حروف وارد کنید";
        usernameInput.style.color = "red";
        usernameInput.style.border = "1px solid red ";
        return false;
    }
    // user-password
    if (userPassword.value.length < 8) {
        userPassword.classList.add("emptyError");
        userPassword.placeholder = " حداقل 8 کارکتر";
        userPassword.style.color = "red";
        userPassword.style.border = "1px solid red ";
        return false;
    }
}
/******login-form******/
/******captcha-code******/
refreshIcon.addEventListener("click", createCaptchaCode);
// create code
function createCaptchaCode() {
    captchaCode.value =  getRandomInt(100000,999999).toString();
}
// check input value
function generateCaptchaCode() {
    if ((captchaCode.value = "")) {
        inputCaptcha.placeholder = " لطفا کد را وارد کنید";
        inputCaptcha.style.border = "1px solid red ";
    } else if (captchaCode.value !== inputCaptcha.value) {
        inputCaptcha.classList.add("emptyError");
        inputCaptcha.placeholder = " کد را اشتباه وارد کردید";
        inputCaptcha.style.border = "1px solid red ";
    }
}
// random number
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/******captcha-code******/
