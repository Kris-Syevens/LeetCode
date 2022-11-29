// 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

var longestCommonPrefix = function (strs) {
  if (strs.length === 1) {
    if (strs[0] === "") {
      return "";
    }
    return strs[0][0];
  }

  if (strs.length > 1) {
    let prefix = "";
    let lastKnownMatches = 0;

    for (let i = 0; i < strs[0].length; i++) {
      let currentMatchesOfPrefix = 0;

      // slices
      strs.forEach((str) => {
        if (str.slice(0, i + 1) === strs[0].slice(0, i + 1)) {
          currentMatchesOfPrefix++;
        }
      });

      if (currentMatchesOfPrefix >= lastKnownMatches) {
        lastKnownMatches = currentMatchesOfPrefix;
        prefix = strs[0].slice(0, i + 1);
      }
    }

    return lastKnownMatches === strs.length ? prefix : "";
  }
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); //fl
console.log(longestCommonPrefix(["dog", "racecar", "car"])); //""
console.log(longestCommonPrefix([""])); //""
console.log(longestCommonPrefix(["ab"])); //"a"
console.log(longestCommonPrefix(["reflower", "flow", "flight"])); // ""
console.log(longestCommonPrefix(["", "dog"])); //""
console.log(longestCommonPrefix(["dog", ""])); //""
