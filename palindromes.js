// return true if the string is a palindrome

const pal1 = "Was it a car or a cat I saw";
const pal2 = "Step on no pets";
const pal3 = "Never odd or even";
const pal4 = "A Santa dog lived as a devil god at NASA";
const pal5 = "Doc, note, I dissent. A fast never prevents a fatness. I diet on cod";

console.log(checkIfPalindrome(pal1));
console.log(checkIfPalindrome(pal2));
console.log(checkIfPalindrome(pal3));
console.log(checkIfPalindrome(pal4));
console.log(checkIfPalindrome(pal5));

function checkIfPalindrome(str) {
  const re = /[\[\]"',.!@%#$^&*()_\-+={}:;<>?\/\\]/g;
  const removePunctuation = str.replace(re, "");
  const removeSpaces = removePunctuation.trim().toLowerCase().split(" ").join("");
  return removeSpaces.split("").reverse().join("") === removeSpaces;
}
