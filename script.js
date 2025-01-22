const userInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const output = document.getElementById('result')

function cleanInputString(str) {
    const string = str.toString().toLowerCase();
    const regex = /[-\_().,:\s\/\\]/g;
    console.log("f1 works");
    return string.replace(regex, "");


}
function getUserInput(value) {
    const cleanString = cleanInputString(value);
    if (cleanString === "") {
        return alert("Please input a value")
    } else {
        return cleanString;
    }
}
function isPalindromeChecker() {
    const userInputValue = getUserInput(userInput.value);
    console.log(userInputValue);
    return userInputValue === userInputValue.split("").reverse().join("");

}
checkButton.addEventListener("click", () => {
    const result = isPalindromeChecker();
    console.log("Is Palindrome:", result);
    if (isPalindromeChecker() === true) {
        output.innerText = `${userInput.value} is a Palindrome`;
    }
    else {
        output.innerText = `${userInput.value} is not a Palindrome`;
    }
});
