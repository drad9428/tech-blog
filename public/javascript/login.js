const { response } = require("express")
const { use } = require("../../controllers/home-routes")

async function signupFormHandler(event){
    event.preventDefault()

    const username = document.querySelector('#username-signup').value.trim()
    const email = document.querySelector('#email-signup').value.trim()
    const password = document.querySelector('#password-signup').value.trim()

    if(useername && email && password){
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        })
        
        if(response.ok){
            console.log('success')
        }
        else{
            alert(response.statusText)
        }
    }
}

async function loginFormHandler(event){
    event.preventDefault()

    const email = document.querySelector('#email-login').value.trim()
    const password = document.querySelector('#password-login').value.trim()

    if(email && password){
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Contente-Type': 'application/json' }
        })

        if(response.ok){
            document.location.replace('/dashboard')
        }
        else{
            alert(response.statusText)
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler)