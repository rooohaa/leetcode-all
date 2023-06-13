/**
 * Time O(n) | Space O(1)
 * https://leetcode.com/problems/sign-of-the-product-of-an-array/
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  function signFunc(x) {
    if (x > 0) {
      return 1
    } else if (x < 0) {
      return -1
    }
    return 0
  }

  let product = 1

  for (let num of nums) {
    product *= num
  }

  return signFunc(product)
}

console.log(arraySign([-1, -2, -3, -4, 3, 2, 1]))
