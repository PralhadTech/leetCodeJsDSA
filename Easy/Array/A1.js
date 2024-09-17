// TWO SUM ==>
//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.

//inputs
let nums = [2, 7, 11, 15];
let target = 9;
function twoSum() {
  let numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let result = target - nums[i];
    if (numMap.has(result)) {
      let ans = [numMap.get(result), i];
      console.log(ans);
    }
    let res = numMap.set(nums[i], i);
  }
  return [];
}
twoSum();
