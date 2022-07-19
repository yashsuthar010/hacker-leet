function medianOfArray(arr1, arr2) {
  // sorting the array
  let sortedArray = arr1.concat(arr2);
  sortedArray.sort((a, b) => a - b);

  let middle = Math.floor(sortedArray.length / 2);
  //   console.log(middle);

  if (sortedArray.every((item) => item === 0)) {
    return 0;
  } else if (sortedArray.length % 2 != 0) {
    return sortedArray[middle];
  } else if (sortedArray.length % 2 == 0) {
    return (sortedArray[middle] + sortedArray[middle - 1]) / 2;
  }
}

let result = medianOfArray([0, 1], [0, 1, 0]);
console.log(result);
