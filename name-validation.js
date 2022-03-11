// Codeland Username Validation
// Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

// 1. The username is between 4 and 25 characters.
// 2. It must start with a letter.
// 3. It can only contain letters, numbers, and the underscore character.
// 4. It cannot end with an underscore character.
// 5/ Cannot contain sql

let str = "User1987";
let re = /^(?!.*sql)[A-Za-z]\w{3,24}(?<!_)$/g;

console.log(str.match(re));
