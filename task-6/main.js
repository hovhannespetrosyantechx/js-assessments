const personalInfo = document.getElementById('info-form');
const nameBtn = document.getElementById('name');
const emailBtn = document.getElementById('email');

const noteForm = document.getElementById('note-form')
const note = document.getElementById('temp-note');


window.addEventListener('DOMContentLoaded', function () {
    const savedInfo = localStorage.getItem('info');
    const savedNote = sessionStorage.getItem('note');

    if (savedInfo) {
        const { name, email } = JSON.parse(savedInfo);
        nameBtn.value = name;
        emailBtn.value = email;
        console.log(nameBtn.value, emailBtn.value)
    }
    if (savedNote) {
        note.value = savedNote;
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
