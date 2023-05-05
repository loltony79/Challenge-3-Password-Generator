// Assignment Code
var generateBtn = document.querySelector("#generate");
var generateBtn = document.querySelector("#generate");


alert("This is a Password Generator");
// This is the debugging section of my code, this runs if they entered an invalid length of password
var invalid = true;
while (invalid == true) {
    // Prompts the user to enter the length of their password and assigns it to a variable
    var length = Number(prompt("Enter password length between 12 to 128: "));
    //  Prompts the user to enter the amount of numbers they want and assigns it to a variable
    var numbers_count = Number(prompt("How many numbers do you want in your password: "));
    //  Prompts the user to enter the amount of upper-case they want and assigns it to a variable
    var upper_case_letter_count = Number(prompt("How many upper-case letters do you want in your password: "));
    //  Prompts the user to enter the amount of lower-case they want and assigns it to a variable
    var lower_case_letter_count = Number(prompt("How many lower-case letters do you want in your password: "));
    //  Prompts the user to enter the amount of special-case they want and assigns it to a variable
    var special_letter_count = Number(prompt("How many special letters do you want in your password: "));
    alert("Your password length: " + length +
    "\nNumbers: " + numbers_count +
    "\nUpper-case letters: " + upper_case_letter_count +
    "\nLower-case letters: " + lower_case_letter_count +
    "\nSpecial letters: " + special_letter_count);
    // If the amount of numbers, lowercase, uppercase, and special letters doesn't add up to the length then the function is recalled until it is valid 
    if (length != numbers_count + upper_case_letter_count + lower_case_letter_count + special_letter_count) {
        alert("This doesn't add up: ")
        invalid = true;
    // Exits the debugging if the user enters the valid amounts
    } else {
        alert("Good job, you are almost there.");
        invalid = false;
    }
}


// Write password to the #password input
// This is the function for the write password, if the generate password button is clicked then this function is called
function writePassword() {
    // sets variable password to what the generate password returns
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    // sets textbox to password 
    passwordText.value = password;
}

// Generate password function
function generatePassword() {
    // empty local password variable
    var password = "";
    // password = password + return value of the random_number_generator
    password += random_number_generator(numbers_count);
    // password = password + return value of the random_upper_case_letter_generatorr
    password += random_upper_case_letter_generator(upper_case_letter_count);
    // password = password + return value of the random_lower_case_letter_generator
    password += random_lower_case_letter_generator(lower_case_letter_count);
    // password = password + return value of the random_number_generator
    password += random_special_letter_generator(special_letter_count);
    return password;
}

// This function generates random numbers 
function random_number_generator(x) {
    var max = 10;
    var min = 0;
    var generate = "";
    // the run time of this loop is dependent on how many numbers the user wants
    for (var i = 0; i < x; i ++) {
        // generate a random number between 0 and 9
        var number = String(Math.floor(Math.random() * (max - min) + min));
        // concatenates all the numbers as string in generate variable
        generate += number;
    }
    // returns the numbers generated
    return generate;
}

// This function generates random upper-case 
function random_upper_case_letter_generator(x) {
    var max = 26;
    var min = 0;
    var generate = "";
    // assigns all the upper-case letters as string
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // the run time of this loop is dependent on how many upper-case numbers the user wants
    for (var i = 0; i < x; i ++) {
        // generates a random number between 0 and 25 thus generating a random upper-case letter and assigns it to upper_letter
        var upper_letter = upper.charAt(Math.floor(Math.random() * (max - min) + min));
        // concatenates all the upper_letter as string in generate variable
        generate += upper_letter;
    }
    // returns the upper_letters generated
    return generate;
}

// This function generates random lower-case 
function random_lower_case_letter_generator(x) {
    var max = 26;
    var min = 0;
    var generate = "";
    // assigns all the lower-case letters as string
    var lower = "abcdefghijklmnopqrstuvwxyz";
    // the run time of this loop is dependent on how many lower-case the user wants
    for (var i = 0; i < x; i ++) {
        // generates a random number between 0 and 25 thus generating a random upper-case letter and assigns it to lower_letter
        var lower_letter = lower.charAt(Math.floor(Math.random() * (max - min) + min));
        // concatenates all the lower_letter as string in generate variable
        generate += lower_letter;
    }
    // returns the lower_letters generated
    return generate;
}

// This function generates random special-case 
function random_special_letter_generator(x) {
    var max = 12;
    var min = 0;
    var generate = "";
    // assigns all the special-case letters as string
    var special = "!@#$%^&*()_+";
    // the run time of this loop is dependent on how many special-case the user wants
    for (var i = 0; i < x; i ++) {
        // generates a random number between 0 and 1 thus generating a random upper-case letter and assigns it to special_letter
        var special_letter = special.charAt(Math.floor(Math.random() * (max - min) + min));
        // concatenates all the special_letter as string in generate variable
        generate += special_letter;
    }
    // returns the special_letters generated
    return generate;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);