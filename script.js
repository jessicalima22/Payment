const form = document.getElementById('form')
const cardName = document.getElementById('cardName');
const cardNumber = document.getElementById('cardNumber');
const validityMonth = document.getElementById('month');
const validityYear = document.getElementById('year');
const cardCvc = document.getElementById('cardCvc');
const inputs = document.querySelectorAll('input');


//focus

inputs.forEach(input => {
    input.addEventListener('focus', ()=>{
        const borderGradient = input.closest('.borderGradient');
        borderGradient.style.backgroundImage = 'linear-gradient(to right, hsl(249, 99%, 64%), hsl(278, 94%, 30%))'; 
})});

//blur

inputs.forEach(input => {
input.addEventListener('blur', ()=>{
    const borderGradient = input.closest('.borderGradient');
    borderGradient.style.backgroundImage = 'none';
})});

//validation


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const cardNameValue = cardName.value;
    const cardNumberValue = cardNumber.value;
    const validityMonthValue = validityMonth.value;
    const validityYearValue = validityYear.value;
    const cardCvcValue = cardCvc.value;

    if(cardNameValue === '') {
        setErrorFor(cardName, "Can't be blank");
    } else {
        setSuccessFor(cardName);
    }

    if(cardNumberValue === '') {
        setErrorFor(cardNumber, "Can't be blank");
    } else if (isNaN(cardNumberValue)) { 
        setErrorFor(cardNumber, "Wrong format, numbers only");
    } else {
        setSuccessFor(cardNumber);
    }

    if(validityMonthValue === '') {
        setErrorFor(validityMonth, "Can't be blank");
    } else if (isNaN(validityMonthValue)) { 
        setErrorFor(validityMonth, "Wrong format, numbers only");
    } else {
        setSuccessFor(validityMonth);
    }

    if(validityYearValue === '') {
        setErrorFor(validityYear, "Can't be blank");
    } else if (isNaN(validityYearValue)) { 
        setErrorFor(validityYear, "Wrong format, numbers only");
    } else {
        setSuccessFor(validityYear);
    }

    if(cardCvcValue === '') {
        setErrorFor(cardCvc, "Can't be blank");
    } else if (isNaN(cardCvcValue)) { 
        setErrorFor(cardCvc, "Wrong format, numbers only");
    } else {
        setSuccessFor(cardCvc);
    }

};

function setErrorFor (input, message) {
    const formControl = input.closest('.control');
    const small = formControl.querySelector('small');
    small.style.display = 'inline';
    small.innerText = message;
    const borderGradient = input.closest('.borderGradient');
    borderGradient.style.backgroundColor = 'hsl(0, 100%, 66%)'; 
     
};

function setSuccessFor (input) {
    const borderGradient = input.closest('.borderGradient');
    borderGradient.style.backgroundImage = 'linear-gradient(to right, hsl(249, 99%, 64%), hsl(278, 94%, 30%))'; 
};

inputs.forEach(input => {
    input.addEventListener('keydown', ()=>{
    const borderGradient = input.closest('.borderGradient');
    borderGradient.style.backgroundColor = 'transparent';

    const formControl = input.closest('.control');
    const small = formControl.querySelector('small');
    small.style.display = 'none';  
})});


//modifying creditcard image

inputs.forEach(input => {
    input.addEventListener('keyup', ()=>{
    const cardNameValue = cardName.value;
    const cardNumberValue = cardNumber.value;
    const validityMonthValue = validityMonth.value;
    const validityYearValue = validityYear.value;
    const cardCvcValue = cardCvc.value;

    if(cardNameValue !== '') {
        const cardNameImg = document.querySelector('.cardNameImg');
        cardNameImg.textContent = cardNameValue.toUpperCase();
    } 

    if(cardNumberValue !== '') {
        const cardNumberImg = document.querySelector('.cardNumberImg');
        cardNumberImg.textContent = cardNumberValue;       
    }

    if(validityMonthValue !== '') {
        const cardValidityMonthImg = document.querySelector('.cardValidityMonthImg');
        cardValidityMonthImg.textContent = validityMonthValue;
    }

    if(validityYearValue !== '') {
        const cardValidityYearImg = document.querySelector('.cardValidityYearImg');
        cardValidityYearImg.textContent = validityYearValue;
    }

    if(cardCvcValue !== '') {
        const dadosCardBackImg = document.querySelector('.dadosCardBack');
        dadosCardBackImg.textContent = cardCvcValue;
    }


})});



