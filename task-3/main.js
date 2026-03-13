import { increment, reset } from "./counter.js";

const form = document.querySelector('#form')
const counterText = document.querySelector('#counter');
const incrementBtn = document.querySelector('#increment');
const resetBtn = document.querySelector('#reset');
const submitBtn = document.querySelector('#submit-button');
const submitSuccess = document.querySelector('#submit-success');
const submitFail = document.querySelector('#submit-fail');
const nameInput = document.querySelector('#name');

incrementBtn.addEventListener('click', () => {
    counterText.textContent = `Current Count: ${increment()}`;
});

resetBtn.addEventListener('click', () => {
    counterText.textContent = `Current Count: ${reset()}`;
})

form.addEventListener('submit', (e) =>{
    e.preventDefault();
})

submitBtn.addEventListener('click', () => {
    const inputValue = nameInput.value;
    if (inputValue.length >= 3) {
        submitSuccess.textContent = `Welcome, ${inputValue}!`;
        submitFail.textContent = '';
        nameInput.value = '';

    }
    else {
        submitFail.textContent = `Error: Please enter at least 3 characters`;
        submitFail.style.color = 'red';
        submitSuccess.textContent = '';

    }
})

