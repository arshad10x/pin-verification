var pin = 1234; // your desired pin
var maxAttempts = 3; // maximum number of attempts
var attempts = 0; // current number of attempts

// function to verify the pin
function verifyPin() {
    var userInput = parseInt(document.getElementById("pin").value); // get user input and parse it to number
    var message = document.getElementById("message"); // get message element to display results

    if (userInput === pin) {
        message.innerHTML = `
        <i class="bi bi-check-all"></i>
        Pin Verified Sucessfully
        `.fontcolor("green").bold();
        attempts = 0;
        
    } else {
        if (attempts < maxAttempts) {
            attempts++;
            message.innerHTML = `Incorrect pin. Attempts remaining: ${maxAttempts - attempts}`;
        } else {
            message.innerHTML = "Too many attempts. Access denied.".fontcolor("red").bold();
        }
    }
}
