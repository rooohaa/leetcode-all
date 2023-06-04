/**
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/is-subsequence/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let j = 0

  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[j]) j++
  }

  return j === s.length
}

console.log(isSubsequence("abc", "ahbgdc"))
