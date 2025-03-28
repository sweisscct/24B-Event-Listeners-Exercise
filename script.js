let form = document.getElementById("login-form");
let passwordInput = document.getElementById("password");
let usernameInput = document.getElementById("username");

form.addEventListener("submit", (event) => {
    // Prevents the form from being submitted and the data sent to a server
    event.preventDefault();
    alert("The form has been submitted");
    
    let username = usernameInput.value;
    
    let password = passwordInput.value;

    if (username == "js" && password == "123") {
        alert("Sucessfully logged in");
    } else {
        alert("The username or password is incorrect. Please try again.")
    }
})


    /* Validations
    Upper case letter
    Lower case letter
    NUmber
    Special character
    Min length 8
    */


passwordInput.addEventListener("keypress", () => {
    // regular expressions
    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasNumber = false;
    let hasSpecial = false;

    let password = passwordInput.value;

    // for (let letter=0; letter<password.length; letter++) {
    //     if (password[letter] == password[letter].toUpperCase()) {
    //         hasUpperCase = true;
    //     }
    //     if (password[letter] == password[letter].toLowerCase()) {
    //         hasLowerCase = true;
    //     }
    //     if (Number(password[letter])) {
    //         hasNumber = true;
    //     }
    //     if (password[letter] == "!" || password[letter] =="£") {
    //         hasSpecial = true;
    //     }
    // }

    // if (password.length >= 8 && hasLowerCase && hasUpperCase && hasNumber && hasSpecial) {
    //     passwordInput.setAttribute("class", "valid-password");
    // }

    // regular expressions
     if (password.length >= 8 && 
        password.match("[0-9]") && 
        password.match("[a-z]") &&
        password.match("[A-Z]") &&
        password.match("[\\W]")
    ) {
        passwordInput.setAttribute("class", "valid-password");
    }   

    /*
    Password Reveal
    Two eye icons (open and shut)
    Toggle their display: none or display: block property
    Change the password input to a text input
        - get the current value of the password input
        - put that value into the text input
        - toggle their displays
    Trigger the toggle when either eye is clicked
    
    */
})