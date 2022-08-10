// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

function phoneNumCombination(digits) {
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  // global result
  const result = [];

  // check digit len empty or not
  if (digits.length === 0) return [];

  // helper recursion
  let helper = (i, digits, current) => {
    // base case
    if (i === digits.length) {
      result.push(current.join(""));
      return;
    }

    // recursive case
    let chars = map[digits[i]];

    for (let char of chars) {
      current.push(char);
      helper(i + 1, digits, current);
      current.pop();
    }
  };
  helper(0, digits, []);
  return result;
}

console.log(phoneNumCombination("2"));
