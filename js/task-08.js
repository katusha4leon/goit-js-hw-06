const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    if (email.value === "" || password.value === "") {
        alert("All fields must be filled!");
    }
    console.log({ Email: email.value, Password: password.value });
    event.currentTarget.reset();
}
