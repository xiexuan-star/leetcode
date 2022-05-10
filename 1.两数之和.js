/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    const other = map[target - cur];
    if (other != null && other !== i) {
      return [i, other];
    }
  }
};
