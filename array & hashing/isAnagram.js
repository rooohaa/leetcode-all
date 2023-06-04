/**
 * HashMap - Frequency Counter
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false

  let sMap = buildCounter(s)
  let tMap = buildCounter(t)

  for (let char in sMap) {
    if (tMap[char] === undefined) return false
    if (tMap[char] !== sMap[char]) return false
  }

  return true
}

function buildCounter(str) {
  let map = {}

  for (let char of str) {
    map[char] = (map[char] || 0) + 1
  }

  return map
}

console.log(isAnagram("anagram", "nagaram"))
