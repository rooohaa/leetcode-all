/**
 * HashMap
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = {}

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    let candidate = target - num

    if (map[candidate] !== undefined) {
      return [i, map[candidate]]
    }

    map[num] = i
  }
}

console.log(twoSum([2, 7, 11, 15], 9))
