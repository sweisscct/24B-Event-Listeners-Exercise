let form = document.getElementById("login-form");

form.addEventListener("submit", (event) => {
    // Prevents the form from being submitted and the data sent to a server
    event.preventDefault();
    alert("The form has been submitted");
    let usernameInput = document.getElementById("username");
    let username = usernameInput.value;
    let passwordInput = document.getElementById("password");
    let password = passwordInput.value;

    if (username == "js" && password == "123") {
        alert("Sucessfully logged in");
    } else {
        alert("The username or password is incorrect. Please try again.")
    }
})