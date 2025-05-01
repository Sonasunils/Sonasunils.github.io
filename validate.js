function validate() {
    const username = document.login.username.value.trim();
    const password = document.login.password.value;
  
    if (username === "aryan123" && password === "aryannew") {
      sessionStorage.setItem("username", username);
      window.location.href = "welcome.html"; // no 405, just JS redirect
      return false;
    } else {
      alert("Incorrect username or password.");
      return false;
    }
  }
  
