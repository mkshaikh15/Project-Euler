function isProductPalindrome(n1, n2) {
  var str = (n1 * n2).toString();
  var len = Math.floor(str.length / 2);
  for (var i = 0; i < len; i++) {
    if (str[i] !== str[str.length - i - 1])
      return false;
  }
  return true;
}
function largestPalindromeProduct(n) {
  var result = 0;
  for (var i = 10**(n-1); i < 10**n; i++) {
    for (var j = 10**(n-1); j < 10**n; j++) {
      if (isProductPalindrome(i, j)) {
        result = (i * j) > result ? i * j : result; 
      }
    }
  }
  return result;
}
