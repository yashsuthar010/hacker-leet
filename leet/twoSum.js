// brute force

function twoSum(arr, target) {
  var result1 = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        // console.log(arr[i](i), arr[j](j), "hello");
        return [i, j];
      } else if (arr[i] + arr[j] != target) {
        arr[j]++;
      }
    }
  }
}

let result = twoSum([2, 4, 3, 8], 5);
console.log(result);

// function twoSum(nums, target) {
//   const indices = new Map();

//   for (let index = 0; index < nums.length; index++) {
//     const complement = target - nums[index];

//     if (indices.has(complement)) {
//       return [indices.get(complement), index];
//     }

//     indices.set(nums[index], index);
//   }
// }
