function primeFactors(num) {
  const factors = [];

  let factor = 2;

  while (num > 1) {
    if (num % factor === 0) {
      factors.push(factor);

      num /= factor;
    } else {
      factor++;
    }
  }

  return factors;
}

console.log(primeFactors(40));

// The time complexity of this function is O(sqrt(n)) where n is the given number.
// This is because the largest prime factor of a number cannot be greater than its square root.
