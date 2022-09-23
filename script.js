const form = document.getElementById('form')
const cardName = document.getElementById('cardName');
const cardNumber = document.getElementById('cardNumber');
const validityMonth = document.getElementById('month');
const validityYear = document.getElementById('year');
const cardCvc = document.getElementById('cardCvc');

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
        setErrorFor(cardName, 'preenchimento obrigató');
    }


};

function setErrorFor (input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.style.display = 'inline';
    
    small.innerText = message;
};