/**
 * HashSet
 * Time O(n + m) | Space O(n + m)
 * https://leetcode.com/problems/find-the-difference-of-two-arrays/description/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const list1 = []
  const list2 = []
  const set1 = new Set(nums1)
  const set2 = new Set(nums2)

  set1.forEach((num) => {
    if (!set2.has(num)) {
      list1.push(num)
    }
  })

  set2.forEach((num) => {
    if (!set1.has(num)) {
      list2.push(num)
    }
  })

  return [list1, list2]
}

console.log(findDifference([1, 2, 3], [2, 4, 6]))
