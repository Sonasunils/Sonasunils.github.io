function validate() {
    const username = document.login.username.value.trim();
    const password = document.login.password.value;

    // Example hardcoded credentials
    if (username === "aryan123" && password === "aryannew") {
        // Store username in sessionStorage
        sessionStorage.setItem("username", username);

        // Redirect using JS to avoid GitHub Pages form POST issues
        window.location.href = "welcome.html";
        return false; // prevent form submission
    } else {
        alert("Incorrect username or password.");
        return false; // prevent form submission
    }
}

