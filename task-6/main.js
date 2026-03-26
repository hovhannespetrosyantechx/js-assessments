const personalInfo = document.getElementById('info-form');
const nameBtn = document.getElementById('name');
const emailBtn = document.getElementById('email');

const noteForm = document.getElementById('note-form')
const note = document.getElementById('temp-note');

const cookieBanner = document.getElementById('cookie-banner');
const cookiebtn = document.getElementById('accept-cookies');

const clearAllBtn = document.getElementById('clear-all');
const date = new Date();

const getJokebtn = document.getElementById('get-joke');
const jokeArea = document.getElementById('joke-area');

const startCountdown = document.getElementById('start-countdown');
const countdownArea = document.getElementById('show-countdown');
let countdown = null;

const startTicking = document.getElementById('start-ticking');
const stopTicking = document.getElementById('stop-ticking');
const tickArea = document.getElementById('tick-area');
let tick = null;

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const noteError = document.getElementById('note-error');

function isEmpty(input) {
    return input === '';
}
function hasNum(input) {
    return /\d/.test(input);
}
function isEmail(input) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)
}

function getConsentCookie() {
    return document.cookie.split('; ').find(c => c.startsWith('consent='));
}

window.addEventListener('DOMContentLoaded', function () {
    const savedInfo = localStorage.getItem('info');
    const savedNote = sessionStorage.getItem('note');

    if (savedInfo) {
        const { name, email } = JSON.parse(savedInfo);
        nameBtn.value = name;
        emailBtn.value = email;
        console.log(nameBtn.value, emailBtn.value);
    }
    if (savedNote) {
        note.value = savedNote;
    }
    if (getConsentCookie()) {
        cookieBanner.style.display = 'none';
    }

})

personalInfo.addEventListener('submit', function (e) {
    e.preventDefault();
    const nameVal = nameBtn.value.trim()
    const emailVal = emailBtn.value.trim()

    if (isEmpty(nameVal)) {
        nameError.textContent = 'input should not be empty';
        nameError.style.color = 'var(--error)';
    }
    else if (hasNum(nameVal)) {
        nameError.textContent = 'input should not contain numbers';
        nameError.style.color = 'var(--error)';
    }
    else {
        nameError.textContent = '';
    }

    if (isEmpty(emailVal)) {
        emailError.textContent = 'input should not be empty';
        emailError.style.color = 'var(--error)';
    }
    else if (!isEmail(emailVal)) {
        emailError.textContent = 'enter valid email';
        emailError.style.color = 'var(--error)';
    }
    else {
        emailError.textContent = '';
    }

    const formData = {
        name: nameVal,
        email: emailVal,
    }
    localStorage.setItem('info', JSON.stringify(formData))
})

noteForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const noteVal = note.value.trim()

    if (isEmpty(noteVal)) {
        noteError.textContent = 'input should not be empty';
        noteError.style.color = 'var(--error)';
    }
    else {
        noteError.textContent = '';
    }

    sessionStorage.setItem('note', note.value)
})

cookieBanner.addEventListener('submit', function (e) {
    e.preventDefault();

    date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    const consent = true;

    document.cookie = `consent=${consent}; expires=${expires}; path=/`;
    cookieBanner.style.display = 'none';
})

clearAllBtn.addEventListener('click', function () {
    localStorage.clear();
    sessionStorage.clear();

    if (getConsentCookie()) {
        document.cookie = 'consent=true; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
    }
    console.log('All storage cleared!');

})

getJokebtn.addEventListener('click', function () {
    jokeArea.textContent = 'Loading...'
    async function getJoke() {
        try {
            const response = await fetch('https://icanhazdadjoke.com/slack');
            const data = await response.json();

            jokeArea.textContent = data.attachments[0].text;
        }
        catch {
            jokeArea.textContent = 'Failed to fetch joke.';
        }
    }
    getJoke();
})

startCountdown.addEventListener('click', function () {
    if (countdown) clearInterval(countdown);
    let count = 5;
    countdownArea.textContent = count;
    countdown = setInterval(() => {
        count--;
        if (count > 0) {
            countdownArea.textContent = count;
        } else {
            countdownArea.textContent = 'GO!';
            clearInterval(countdown);
            countdown = null;
        }
    }, 1000)
})

startTicking.addEventListener('click', function () {
    if (!tick) {
        tick = setInterval(() => {
            tickArea.textContent += ' Tick';
        }, 1000)
    }

})

stopTicking.addEventListener('click', function () {
    clearInterval(tick);
    tickArea.textContent = '';
    tick = null;
})

