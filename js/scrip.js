wellcomeMessage();

// Function to display a welcome message and get the user's name
function wellcomeMessage() {

    // Prompt the user for their name
    let userName = prompt("Please enter your name:");
    if (userName) {
        document.getElementById("username").textContent = userName;
        alert("Welcome to my portfolio, " + userName + "!");
    } else {
        alert("Welcome to my portfolio");
    }
}   

// Function to validate the contact form
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    console.log(name, email, message); // For debugging purposes

        if (!name || !email || !message) {
            alert("All fields are required!");
        } else {
            alert("Thank you for your message, " + name + "!");
        }
    }