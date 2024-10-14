const scriptURL = 'https://script.google.com/macros/s/AKfycbx4o-nbaZ0_7DorAXvup7pZpKx0PxMW0tyMPwuiBvTDbtDaVrWI06J2HinkXOqGIeGB/exec'

const form = document.forms["form-submit"];

console.log(form);

console.log(new FormData(form))

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            // mode: 'cors',
            // credentials: 'same-origin',
            // headers: {
            //     "Access-Control-Allow-Origin": "*",
            //     'Content-Type': 'application/x-www-form-urlencoded',
            //     "Access-Control-Allow-Methods": "POST",
            //     "Access-Control-Allow-Headers": "Content-Type, Authorization",
                
            // },
            // redirect: 'follow',
            method: 'POST', 
            body: new FormData(form),
        })
        .then(response => alert("Gracias por tu mensaje! Nos pondremos en contacto contigo a la brevedad."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})
