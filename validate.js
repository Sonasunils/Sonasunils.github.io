// In login page (validate.js)
function validate() {
    const username = document.login.username.value.trim();
    const password = document.login.password.value;
  
    if (username === "aryan123" && password === "aryannew") {
      sessionStorage.setItem("username", username);  // Store username in sessionStorage
      window.location.href = "welcome.html"; // Redirect to welcome page
      return false;
    } else {
      alert("Incorrect username or password.");
      return false;
    }
  }
  