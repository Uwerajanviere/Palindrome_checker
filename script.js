// Define objects
const textInput = document.querySelector('#text-input');
const checkBtn = document.querySelector('#check-btn');
const result = document.querySelector('#result');

function palindromeCheck() {

    const textInputValue = textInput.value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const textInputValueReversed = textInputValue.split('').reverse().join('');

    if (textInputValue == '') {
        alert('Please input a value.')
    } else if (textInputValue == textInputValueReversed) {
        result.innerText = `${textInput.value} is a palindrome.`
    } else {
        result.innerText = `${textInput.value} is not a palindrome.`
    }
}

checkBtn.addEventListener('click', palindromeCheck)
