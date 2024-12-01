Testing Utility Functions Project
Overview
This project focuses on practicing testing for a set of utility functions. Each function performs a specific operation, and the accompanying tests ensure they work as expected. The tests were implemented using a JavaScript testing framework like Jest.

Features and Tested Functions
sum Function

Adds two numbers.
Test: Verifies that the function correctly calculates the sum of two numbers.
Example:
javascript
Copy code
sum(1, 2); // Returns: 3

capitalize Function

Capitalizes the first character of a string.
Test: Checks if the first letter of the input string is capitalized.
Example:
javascript
Copy code
capitalize("hamza"); // Returns: "Hamza"

reverseString Function

Reverses a given string.
Test: Confirms that the function correctly reverses the input string.
Example:
javascript
Copy code
reverseString("hamza"); // Returns: "azmah"
calculator Function

Performs basic arithmetic operations: addition, subtraction, multiplication, and division.
Test: Ensures the function calculates correctly based on the given inputs and operator.
Example:
javascript
Copy code
calculator(2, 5, "+"); // Returns: 7

analyzeArray Function

Analyzes an array of numbers and returns an object with:
Average value
Minimum value
Maximum value
Length of the array
Test: Validates that the function correctly analyzes the array and returns the expected object.
Example:
javascript
Copy code
analyzeArray([1, 8, 3, 4, 2, 6]);
// Returns:
// { average: 4, min: 1, max: 8, length: 6 }

caesarCipher Function

Encrypts a string using a Caesar cipher with a given shift.
Test: Verifies:
Wrapping from z to a.
Preservation of letter case.
Punctuation and spaces remain unchanged.
Example:
javascript
Copy code
caesarCipher("Hello, World!", 3); // Returns: "Khoor, Zruog!"
Running the Tests
Clone the Repository:

bash
Copy code
git clone <repository-url>
cd <repository-directory>
Install Dependencies (if needed):

bash
Copy code
npm install
Run Tests:

bash
Copy code
npm test
Purpose
The purpose of this project is to practice writing and executing tests to ensure code reliability. Testing is essential for identifying bugs early and improving code quality.

Tools Used
JavaScript
Jest (or similar testing framework)
Author
Created by [Hamza Sharif]. This project is part of a learning exercise in testing. Feedback is welcome!
