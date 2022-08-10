// let newHashMap = new Map([
//   [1, "first"],
//   [2, "second"],
// ]);

// console.log(`hashmap`, newHashMap);

function validAnagram(s, t) {
  if (s.length != t.length) return `false`;
  if (s.split("").sort().join() == t.split("").sort().join()) {
    return `${s} and ${t} are anagram`;
  } else return `${s} and ${t} are not anagram`;
}

console.log(validAnagram("hello", "holll"));
