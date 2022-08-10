//   var prefix = strs[0];
//   for (let i = 1; i < strs.length; i++)
//     while (strs[i].indexOf(prefix) != 0) {
//       prefix = prefix.substring(0, prefix.length() - 1);
//       if (prefix.isEmpty()) return "";
//     }
//   return prefix;
// }
function longestCommon(strs) {
  if (strs.length == 0) return "";
  var prefix = strs[0];
  for (let i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) != 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === 0) return "";
    }
  }
  return prefix;
}

let result = longestCommon(["flag", "flower", "flew"]);
console.log(result);
