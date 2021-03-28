const form = document.getElementById('subscription');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs(){
    const emailValue = email.value.trim();

    emailValue === "" 
    ? setErrorFor(email, "Email cannot be empty")
    : setSuccessFor(email, "");
/*
    validEmail(email) 
    ? setSuccessFor(email, "")
    : setErrorFor(email, "Looks like this is not a valid email")
*/
}


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    small.innerText = message;
    formControl.className = "form-control error"
}

function setSuccessFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    small.innerText = message;
    formControl.className = "form-control success"
}

/*function validEmail(email) {
    return (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
  }

trouver pourquoi validEmail ne fonctionne pas ?? */

