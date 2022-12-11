var Nom = document.getElementById('Nom');
var Prénom = document.getElementById('Prénom');
var Email = document.getElementById('Email');
var Password = document.getElementById('Password');
var Password2 = document.getElementById('Password2');

var Validation = true

var users = JSON.parse(localStorage.getItem('users')) || [];




function valider(event) {
    event.preventDefault()

    if (Nom.value == "") {
        Nom.classList.add('is-invalid');
        Nom.classList.remove('is-valid');
        Validation = false

    } else {
        Nom.classList.add('is-valid');
        Nom.classList.remove('is-invalid');
    }

    if (Prénom.value == "") {
        Prénom.classList.add('is-invalid');
        Prénom.classList.remove('is-valid');
        Validation = false
    } else {
        Prénom.classList.add('is-valid');
        Prénom.classList.remove('is-invalid');
    }

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

    if (Password2.value == "") {
        Password2.classList.add('is-invalid');
        Password2.classList.remove('is-valid');
        Validation = false
    } else {
        Password2.classList.add('is-valid');
        Password2.classList.remove('is-invalid');
    }


    if (Validation == true) {


        const user = {
            Nom: Nom.value,
            Prénom: Prénom.value,
            Email: Email.value,
            Password: Password.value,
            Password2: Password2.value,
        }


        users.push(user)
        localStorage.setItem("users", JSON.stringify(users));

        document.location.href = "p1.html"
    }

}
