function checkNumber() {
    const number = parseFloat(document.getElementById('numberInput').value);
    let message;

    if (isNaN(number)) {
        message = "Please enter a valid number";
    } else if (number > 0) {
        message = "The entered number is positive";
    } else if (number < 0) {
        message = "The entered number is negative";
    } else {
        message = "The entered number is zero";
    }

    alert(message);
}

// Addendum for the footer
document.getElementById('addendum').textContent = `
    This JavaScript code checks if the entered number is positive, negative, or zero. 
    The user enters a number in the input field and clicks the "Check Number" button. 
    An alert box displays the result. Some challenges encountered included handling 
    non-numeric input and ensuring the input field was not empty, which were resolved 
    using the isNaN() function and conditional checks.
`;
