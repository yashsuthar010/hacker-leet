console.log(findLongestSubString("abcabcbb"));

// function lengthOfLongestSubstring(s) {
//   var max = 0,
//     current_string = "",
//     i,
//     char,
//     pos;

//   for (i = 0; i < s.length; i += 1) {
//     char = s.charAt(i);
//     console.log(`char:`, char);
//     pos = current_string.indexOf(char);
//     console.log(`pos:`, pos);
//     if (pos !== -1) {
//       current_string = current_string.substr(pos + 1);
//     }
//     current_string += char;
//     max = Math.max(max, current_string.length);
//   }
//   return max;
// }

//
// using "Sliding Window Approach"

function findLongestSubString(s) {
  let start = 0;
  let result = 0;
  let sofar = {};

  for (let end = 0; end < s.length; end++) {
    let storeEnd = s[end];
    sofar[storeEnd] = sofar[storeEnd] + 1 || 1;
    console.log(sofar);

    while (sofar[storeEnd] > 1) {
      let left = s[start];

      if (sofar[left] > 1) {
        sofar[left]--;
      } else {
        delete sofar[left];
      }
      start++;
    }
    result = Math.max(result, end - start + 1);
  }
  return result;
}
