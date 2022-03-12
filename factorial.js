// Find factorial with recursion

function factorialize(num) {
  if (!num || num == 1) return 1;
  return num * factorialize(num - 1);
}
console.log(factorialize(10));
