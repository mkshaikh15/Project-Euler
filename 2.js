function fiboEvenSum(n) {
    var number1 = 0;
    var number2 = 1;
    var temp = number2;
    var output = 0;
    while (number1 + number2 <= n) {
        if ((number1 + number2) %2 == 0) {
            output += number1+number2;
        }
        temp = number1 + number2;
        number1 = number2;
        number2 = temp;
    }
    return output;
}
