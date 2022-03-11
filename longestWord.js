let str = "fun password sun this is the longest word";

findLongestWord(str);

function findLongestWord() {
  let longestWord = [0, undefined];
  let re = /\b\w+\b/g;
  const matches = str.match(re);
  for ([index, match] of matches.entries()) {
    match.length > longestWord[0] ? (longestWord = [match.length, index]) : false;
  }
  console.log(matches[longestWord[1]]);
}
