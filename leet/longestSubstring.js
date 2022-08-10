// function longestSubstring(s) {
//   let result = [];
//   for (let i = 0; i < s.length; i++) {
//     result.push(s[i]);
//   }
//   let uniqueChars = [...new Set(result)];
//   return uniqueChars.length;
// }
console.log(lengthOfLongestSubstring("pwwkew"));
// console.log(result);

function lengthOfLongestSubstring(s) {
  var max = 0,
    current_string = "",
    i,
    char,
    pos;

  for (i = 0; i < s.length; i += 1) {
    char = s.charAt(i);
    console.log(`char:`, char);
    pos = current_string.indexOf(char);
    console.log(`pos:`, pos);
    if (pos !== -1) {
      // cut "dv" to "v" when you see another "d"
      current_string = current_string.substr(pos + 1);
    }
    current_string += char;
    max = Math.max(max, current_string.length);
  }
  return max;
}
