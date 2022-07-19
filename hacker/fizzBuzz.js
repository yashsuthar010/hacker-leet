//  function fizzBuzz(n) {
// if (n % 3 == 0 && n % 5 == 0) {
//   return "fizzbuzz";
// } else if (n % 3 == 0) {
//   return "fizz";
// } else if (n % 5 == 0) {
//   return "buzz";

let result = fizzBuzz(15);
console.log(result);

function fizzBuzz(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("fizzbuzz");
    } else if (i % 3 == 0) {
      console.log("fizz");
    } else if (i % 5 == 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}
