const personalInfo = document.getElementById('info-form');
const nameBtn = document.getElementById('name');
const emailBtn = document.getElementById('email');

const noteForm = document.getElementById('note-form')
const note = document.getElementById('temp-note');

const cookieBanner = document.getElementById('cookie-banner');
const cookiebtn = document.getElementById('accept-cookies');

window.addEventListener('DOMContentLoaded', function () {
    const savedInfo = localStorage.getItem('info');
    const savedNote = sessionStorage.getItem('note');
    const consentCookie = document.cookie.split('; ').find(cookie => cookie.startsWith('consent='));

    if (savedInfo) {
        const { name, email } = JSON.parse(savedInfo);
        nameBtn.value = name;
        emailBtn.value = email;
        console.log(nameBtn.value, emailBtn.value)
    }
    if (savedNote) {
        note.value = savedNote;
    }
    if (consentCookie) {
        cookieBanner.style.display = 'none';
    }

})

personalInfo.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = {
        name: nameBtn.value,
        email: emailBtn.value
    }
    localStorage.setItem('info', JSON.stringify(formData))
})

noteForm.addEventListener('submit', function (e) {
    e.preventDefault();

    sessionStorage.setItem('note', note.value)
})

cookieBanner.addEventListener('submit', function (e) {
    e.preventDefault();
 
    const date = new Date();                    
    date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);     
    const expires = date.toUTCString(); 
    const consent = true;
    
    document.cookie = `consent=${consent}; expires=${expires};`;
})