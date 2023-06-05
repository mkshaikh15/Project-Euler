function isPrimeNumber(number) {
  var isPrime = true;
  for (var i = 2; i < number; i++) {
    if (number%i == 0)
      isPrime = false;
  }
  return isPrime;
}
function isPrimeFactor(number, factor) {
  if (number % factor == 0)
    if (isPrimeNumber(factor))
      return true;
}
function largestPrimeFactor(number) {
  var maxPrimeFactor;
  
  for (var factor = 0; factor <= number; factor++) {
    if (isPrimeFactor(number, factor)) {
      maxPrimeFactor = factor;
    }
  }

  return maxPrimeFactor;
}
