// 1. It must have a capital letter.
// 2. It must contain at least one number.
// 3. It must contain a punctuation mark or mathematical symbol.
// 4. It cannot have the word "password" in the string.
// 5. It must be longer than 7 characters and shorter than 31 characters.

//For example: if str is "apple!M7" then your program should return "true"

let str = "apple!M7".trim();
const re = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\\!\.,\+=':";%\*-])(?=^.{8,30}$)(?!.*password)/g;
console.log(re.test(str));
