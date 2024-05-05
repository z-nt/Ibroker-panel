/**captchaCode**/
const captchaCode = document.getElementById("input-captcha-code");
/**captchaCode**/
/**input-captcha**/
const inputCaptcha = document.getElementById("input-zip");
/**input-captcha**/
const captchaButton = document.getElementById("captcha-btn");
captchaButton.addEventListener("click", createCaptchaCode);
// function create code
function createCaptchaCode() {
    captchaCode.value =  getRandomInt(100000,999999).toString();
}
// function check input value
function generate() {
    if (captchaCode.value === inputCaptcha.value) {
        alert("به بورس خوش آمدید");
    } else {
        inputCaptcha.classList.add("emptyError");
        inputCaptcha.placeholder = " کد را اشتباه وارد کردید";
        inputCaptcha.style.color = "red";
        inputCaptcha.style.border = "1px solid red ";
    }
}
/******captcha-code******/
const formLoginButtonSubmit = document.getElementById("log-in");
formLoginButtonSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputCaptcha.value === "") {
        inputCaptcha.placeholder = " لطفا کد را وارد کنید";
        inputCaptcha.style.color = "red ";
        inputCaptcha.style.border = "1px solid red ";
    } else {
        if (captchaCode.value !== inputCaptcha.value) {
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
});

// random number
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}