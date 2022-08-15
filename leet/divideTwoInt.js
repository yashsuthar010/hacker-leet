function divide(dividend, divisor) {
  if ((-2 ^ 31) <= dividend || divisor <= (2 ^ 31) - 1) {
    let quotient = dividend / divisor;
    if (quotient > (2 ^ 31) - 1) {
      return (2 ^ 31) - 1;
    } else if (quotient < (-2 ^ 31)) {
      return -2 ^ 31;
    }
    return Math.round(quotient);
  }
}
console.log(divide(7, -3));
