const form = document.querySelector('form');

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const address1 = document.getElementById('address-1');
const address2 = document.getElementById('address-2');
const city = document.getElementById('city');
const state = document.getElementById('state');
const postal = document.getElementById('postal-code');
const phone = document.getElementById('phone-Number');
const email = document.getElementById('email');
const howHeard = document.getElementById('how');
const otherInput = document.getElementById('other-input');
const otherSection = document.getElementById('other-section');

const feedback = document.getElementById('feedback');
const suggestions = document.getElementById('suggestions');
const checkboxes = document.querySelectorAll('input[name="recommend"]');

const yesCheckbox = document.getElementById('yes');
const maybeCheckbox = document.getElementById('maybe');
const noCheckbox = document.getElementById('no');

const nameSection = document.querySelector('.name-sections');
const addressSection = document.querySelector('.address-section');
const phoneSection = document.querySelector('.phone-section');
const howSection = document.querySelector('.how-section');

const ref1Name = document.getElementById('reference-1-name');
const ref1Address = document.getElementById('reference-1-address');
const ref1Contact = document.getElementById('reference-1-contact');
const ref2Name = document.getElementById('reference-2-name');
const ref2Address = document.getElementById('reference-2-address');
const ref2Contact = document.getElementById('reference-2-contact');

const successScreen = document.getElementById('success-screen');
const main = document.querySelector('main');


function isEmpty(value) {
    return value === '';
}

function isValidPhone(value) {
   return /^[0-9]+$/.test(value);
}

function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}


function showError(input) {
    input.style.borderColor = 'var(--dark-red)';
    const error = input.parentElement.querySelector('.error');
}

function clearError(input) {
    input.style.borderColor = '';
    const error = input.parentElement.querySelector('.error');
}


function showSectionError(section) {
    section.classList.add('section-error');

    const error = section.querySelector('.error');
    if (error) error.textContent = '!This section is Required';
}

function clearSectionError(section) {
    section.classList.remove('section-error');

    const error = section.querySelector('.error');
    if (error) error.textContent = '';
}


howHeard.addEventListener('change', function () {
    if (howHeard.value === 'Other') {
        otherSection.style.display = 'block';
    } else {
        otherSection.style.display = 'none';
        otherInput.value = '';
    }
});



form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;

    let nameValid = true;

    if (isEmpty(firstName.value.trim())) {
        showError(firstName);
        nameValid = false;
    } else clearError(firstName);

    if (isEmpty(lastName.value.trim())) {
        showError(lastName);
        nameValid = false;
    } else clearError(lastName);

    if (!nameValid) {
        showSectionError(nameSection);
        isValid = false;
    } else clearSectionError(nameSection);

    let addressValid = true;

    if (isEmpty(address1.value.trim())) {
        showError(address1);
        addressValid = false;
    } else clearError(address1);

    if (isEmpty(city.value.trim())) {
        showError(city);
        addressValid = false;
    } else clearError(city);

    if (isEmpty(state.value.trim())) {
        showError(state);
        addressValid = false;
    } else clearError(state);

    if (isEmpty(postal.value.trim())) {
        showError(postal);
        addressValid = false;
    } else clearError(postal);

    if (!addressValid) {
        showSectionError(addressSection);
        isValid = false;
    } else clearSectionError(addressSection);

    let phoneValid = true;

    if (isEmpty(phone.value.trim())) {
        showError(phone);
        phoneValid = false;
    } else if (!isValidPhone(phone.value.trim())) {
        showError(phone);
        phoneValid = false;
    } else clearError(phone);

    if (!phoneValid) {
        showSectionError(phoneSection);
        isValid = false;
    } else clearSectionError(phoneSection);

    if (!isEmpty(email.value.trim()) && !isValidEmail(email.value.trim())) {
        showError(email, 'Invalid email');
        isValid = false;
    } else clearError(email);

    let howValid = true;

    if (isEmpty(howHeard.value) || howHeard.value === '#') {
        showError(howHeard);
        howValid = false;
    } else clearError(howHeard);

    if (howHeard.value === 'Other' && isEmpty(otherInput.value.trim())) {
        showError(otherInput);
        howValid = false;
    } else clearError(otherInput);

    if (!howValid) {
        showSectionError(howSection);
        isValid = false;
    } else clearSectionError(howSection);


    if (!isValid) {
        document.querySelector('.section-error')?.scrollIntoView({
            behavior: 'smooth'
        });
        return;
    }



    const recommend = [];
    checkboxes.forEach(cb => {
        if (cb.checked) recommend.push(cb.value);
    });

    const formData = {
        firstName: firstName.value.trim(),
        lastName: lastName.value.trim(),
        address1: address1.value.trim(),
        address2: address2.value.trim(),
        city: city.value.trim(),
        state: state.value.trim(),
        postal: postal.value.trim(),
        phone: phone.value.trim(),
        email: email.value.trim(),
        howHeard: howHeard.value,
        otherText: otherInput.value.trim(),
        feedback: feedback.value.trim(),
        suggestions: suggestions.value.trim(),
        recommend: recommend,
        references: [
            {
                name: ref1Name.value.trim(),
                address: ref1Address.value.trim(),
                contact: ref1Contact.value.trim()
            },
            {
                name: ref2Name.value.trim(),
                address: ref2Address.value.trim(),
                contact: ref2Contact.value.trim()
            }
        ]
    };

    console.log(formData);

    form.reset(); 
    otherSection.style.display = 'none'; 
    main.style.display = 'none';
    successScreen.style.display = 'flex';

});