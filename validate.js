function validate() {
    var username = document.login.username.value.trim();
    var password = document.login.password.value;

    // Basic validation: check if username and password are entered
    if (!username || !password) {
        alert("Please enter both username and password.");
        return false;
    }

    // Example hardcoded credentials (replace with your own authentication logic)
    if (username === "aryan123" && password === "aryannew") {
        // Store username in sessionStorage for use on the welcome page
        sessionStorage.setItem("username", username);
        return true; // Allow form to submit and redirect to welcome.html
    } else {
        alert("Incorrect username or password.");
        return false; // Prevent form submission
    }
}
