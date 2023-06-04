/**
 * Hash Set
 * Time O(n) | Space O(n)
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const set = new Set(nums)
  return set.size !== nums.length
}
