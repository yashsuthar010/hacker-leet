// brute force

function threeSum(nums) {
  nums.sort((a, b) => a - b);

  let a = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[i] == nums[i - 1]) continue;
      for (let k = j + 1; k < nums.length; k++) {
        if (k > j + 1 && nums[i] == nums[i - 1]) continue;

        if (nums[i] + nums[j] + nums[k] == 0) {
          a.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return a;
}

let result = threeSum([0, 0, 0, 0]);
console.log(result);
