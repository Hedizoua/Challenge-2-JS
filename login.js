var Email=document.getElementById('Email');
var Password=document.getElementById('Password');
var Validation = true


function Login(event) {
    event.preventDefault()

    if (Email.value == "") {
        Email.classList.add('is-invalid');
        Email.classList.remove('is-valid');
        Validation = false
    } else {
        Email.classList.add('is-valid');
        Email.classList.remove('is-invalid');
    }

    if (Password.value == "") {
        Password.classList.add('is-invalid');
        Password.classList.remove('is-valid');
        Validation = false
    } else {
        Password.classList.add('is-valid');
        Password.classList.remove('is-invalid');
    }

    if (Validation == true) {
        var users = JSON.parse(localStorage.getItem('users')) || [];
        var found = users.find(element=> (element.Email===Email.value)&& (element.Password===Password.value)) 
if (found !== undefined) {
    localStorage.setItem("connected ",JSON.stringify(found))
    document.location.href = "p3.html"
}
    } 
}