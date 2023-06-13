/**
 * Two pointers
 * Time O(n + m) | Space O(n)
 * https://leetcode.com/problems/merge-strings-alternately/description/
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let ans = []

  let i = 0
  let j = 0

  while (i < word1.length && j < word2.length) {
    ans.push(word1[i++], word2[j++])
  }

  while (i < word1.length) {
    ans.push(word1[i++])
  }

  while (j < word2.length) {
    ans.push(word2[j++])
  }

  return ans.join("")
}

console.log(mergeAlternately("abc", "pqrst"))
