/**
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/length-of-last-word/
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let len = 0
  let i = s.length - 1

  // Remove empty spaces from the end
  while (s[i] === " ") {
    i--
  }

  // Iterate until we meet empty space or i = 0
  while (s[i] !== " " && i >= 0) {
    i--
    len++
  }

  return len
}

console.log(lengthOfLastWord("a"))
// console.log(lengthOfLastWord("luffy is still joyboy"))
// console.log(lengthOfLastWord("   fly me   to   the moon  "))
