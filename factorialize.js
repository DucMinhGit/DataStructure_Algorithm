/**
 * Factorialize a Number
 */
function factorialize(num) {
  if (num === 0) return 1;

  for (var i = num - 1; i >= 1; i--) num *= i;

  return num;
}

function factory(n) {
  if (n === 0) return 1;

  return n * factory(n - 1);
}