//Capitalize beggining of each word
let str0 = "I’m a little tea pot";
let str = "HERE IS MY HANDLE HERE IS MY SPOUT";

function capitalize(str) {
  str = str.toLowerCase().split(" ");
  for ([index, word] of str.entries()) {
    str[index] = word[0].toUpperCase() + word.substring(1);
  }
  return str.join(" ");
}

console.log(capitalize(str0));
