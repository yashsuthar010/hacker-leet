function minMax(arr) {
  let sum;
  for (let i = 0; i <= arr.length; i++) {
    let result = arr.shift();
    sum += arr[i];
    console.log(sum(...arr));

    // console.log(result);
  }
}

console.log(minMax([1, 1, 2, 3]));
