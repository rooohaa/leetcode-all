/**
 * Reverse iteration
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let max = -1

  for (let i = arr.length - 1; i >= 0; i--) {
    let newMax = Math.max(max, arr[i])
    arr[i] = max
    max = newMax
  }

  return arr
}

console.log(replaceElements([17, 18, 5, 4, 6, 1]))
