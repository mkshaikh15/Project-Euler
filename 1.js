function multiplesOf3and5(number) {
  var output = 0;
  for (var i = number-1; i > 0; i--) {
    if (i%3 == 0 || i%5 == 0) {
      output += i;
    }
  }
  return output;
}

console.log(multiplesOf3and5(1000));
