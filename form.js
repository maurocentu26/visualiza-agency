const scriptURL = 'https://script.google.com/macros/s/AKfycbx3xg8VAjbPUaqIdImVA0LkLp0kL96bGIyVURfxEK4PcHz9W9DyflIKp1Ie8bbmZVXK/exec'

const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            redirect: 'follow',
            method: 'POST', 
            body: new FormData(form),
        })
        .then(response => alert("Thank you! your form is submitted successfully." ))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})