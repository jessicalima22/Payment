const form = document.getElementById('form')
const cardName = document.getElementById('cardName');
const cardNumber = document.getElementById('cardNumber');
const validityMonth = document.getElementById('month');
const validityYear = document.getElementById('year');
const cardCvc = document.getElementById('cardCvc');
const input = document.querySelector('input');

//focus

input.addEventListener('focus', border)

function border (event) {
    const borderGradient = input.closest('.borderGradient');
    borderGradient.style.backgroundImage = 'linear-gradient(to right, hsl(249, 99%, 64%), hsl(278, 94%, 30%))'; ;
}

//blur

input.addEventListener('blur', noBorder)

function noBorder (event) {
    const borderGradient = input.closest('.borderGradient');
    borderGradient.style.backgroundImage = 'none';
}

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
    } else {
        setSuccessFor(cardNumber);
    }

    if(validityMonthValue === '') {
        setErrorFor(validityMonth, "Can't be blank");
    } else {
        setSuccessFor(validityMonth);
    }

    if(validityYearValue === '') {
        setErrorFor(validityYear, "Can't be blank");
    } else {
        setSuccessFor(validityYear);
    }

    if(cardCvcValue === '') {
        setErrorFor(cardCvc, "Can't be blank");
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



input.addEventListener('keydown', noError)

function noError (event) {
    const borderGradient = input.closest('.borderGradient');
    borderGradient.style.backgroundColor = 'transparent';

    const formControl = input.closest('.control');
    const small = formControl.querySelector('small');
    small.style.display = 'none';
    
}