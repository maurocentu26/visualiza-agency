const scriptURL = 'https://script.google.com/macros/s/AKfycby98wxK4rclI8Djz7behMRy8Wu_BaiGwIP2hQD58Zwk2OZYyEn58w1eV6bA7woeXPzB/exec'

const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            mode: 'no-cors',
            redirect: 'follow',
            method: 'POST', 
            body: new FormData(form),
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/x-www-form-urlencoded',
                "Access-Control-Allow-Methods": "POST",
            },
        })
        .then(response => alert("Thank you! your form is submitted successfully." ))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})
