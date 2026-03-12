import { increment, reset } from "./counter.js";

const counterText = document.querySelector('#counter');
const incrementBtn = document.querySelector('#increment');
const resetBtn = document.querySelector('#reset');
const submitBtn = document.querySelector('#submit-button');
const submitText = document.querySelector('#submit-text');
const nameInput = document.querySelector('#name');

incrementBtn.addEventListener('click', () => {
    counterText.textContent = `Current Count: ${increment()}`;
});

resetBtn.addEventListener('click', () => {
    counterText.textContent = `Current Count: ${reset()}`;
})

submitBtn.addEventListener('click', () => {
    const inputValue = nameInput.value
    if (inputValue.length >= 3) {
        submitText.textContent = `Welcome, ${inputValue}!`;
    }
    else {
        submitText.textContent = `Error: Please enter at least 3 characters`;
        submitText.style.color = 'red';
    }
})