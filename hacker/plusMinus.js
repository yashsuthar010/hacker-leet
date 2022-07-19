function plusMinus(arr) {
  let count = 0;
  //   let result = [];
  let positive = 0;
  let negative = 0;
  let zero = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else if (arr[i] == 0) {
      zero++;
    }
  }

  console.log(((positive / arr.length) % 6).toFixed(6));
  console.log(((negative / arr.length) % 6).toFixed(6));
  console.log(zero / arr.length);
}

let result = plusMinus([1, 1, -1, -1, 0]);
console.log(result);
