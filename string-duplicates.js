let str = "helloworld"; // output: h1e1l3o2w1r1d1
let letterArray = str.toLowerCase().trim().split(" ").join("").split("");

let duplicates = {};

letterArray.forEach(function (v, i, a) {
  duplicates[v] ? duplicates[v].push(v) : (duplicates[v] = [v]);
});

function countCharacters() {
  let result = "";
  for (value of Reflect.ownKeys(duplicates)) {
    result += value + duplicates[value].length;
  }
  return result;
}
console.log(countCharacters());
