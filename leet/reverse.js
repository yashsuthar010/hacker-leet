// function reverse(num) {
//   let result = parseInt(String(num).split("").reverse().join(""), 10);
//   console.log(result);
// }

function reverse(num) {
  //   return (n > 0 || -1) * Math.abs(n).toString().split("").reverse().join("");
  let negative = num < 0 ? true : false;
  let revNum = Math.abs(num).toString().split("").reverse().join("");
  if (revNum < Math.pow(-2, 31) || revNum > Math.pow(2, 31) - 1) return 0;
  else return negative ? revNum * -1 : revNum;
}

let reversed = reverse(1534236469);
console.log(reversed);
