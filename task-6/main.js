const personalInfo = document.getElementById('info-form');
const nameBtn = document.getElementById('name');
const emailBtn = document.getElementById('email');

window.addEventListener('DOMContentLoaded', function(){
    const saved = this.localStorage.getItem('info');
    if (saved){
        const {name, email} = JSON.parse(saved);
        nameBtn.value = name;
        emailBtn.value = email;
        console.log(nameBtn.value, emailBtn.value)
    }
})
personalInfo.addEventListener('submit', function(e){
    e.preventDefault();
    
    const formData = {
        name: nameBtn.value,
        email: emailBtn.value
    }
    localStorage.setItem('info', JSON.stringify(formData))
})
