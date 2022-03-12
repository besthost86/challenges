let str = "fun password sun this is the longest word";

findLongestWord(str);
findLongestWord2(str);

// variant 1
function findLongestWord() {
  let longestWord = [0, undefined];
  let re = /\b\w+\b/g;
  const matches = str.match(re);
  for ([index, match] of matches.entries()) {
    match.length > longestWord[0] ? (longestWord = [match.length, index]) : false;
  }
  console.log(matches[longestWord[1]]);
}

// variant 2
function findLongestWord2(str) {
  str = str.split(" ");
  str.sort((a, b) => b.length - a.length);
  console.log(str[0]);
}
