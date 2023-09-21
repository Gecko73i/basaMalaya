document.getElementById("loginButton").addEventListener("click", function() {
    // Get the entered username and password
    var enteredUsername = document.getElementById("username").value;
    var enteredPassword = document.getElementById("password").value;

    // Replace these values with your valid usernames and passwords
    var studentUser = "student1";
    var studentPass = "1234";

    var adminUser = "admin";
    var adminPass = "admin";

    // Check if the entered credentials match the student account
    if (enteredUsername === "student1" && enteredPassword === "1234") {
        // Redirect to the student's page
        window.location.href = "Basa_Malaya.html"; // Replace with your student page HTML file
    }
    // Check if the entered credentials match the admin account
    else if (enteredUsername === "admin" && enteredPassword === "admin") {
        // Redirect to the admin page
        window.location.href = "admin_page.html"; // Replace with your admin page HTML file
    }
    // Handle incorrect credentials
    else {
        alert("Invalid username or password. Please try again.");
    }
});