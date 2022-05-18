// Easy Challenges on Leet Code //


// ======================================================= //

// **  C H A L L E N G E   0 0 1  ** //
// **  T W O   S U M  ** //

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

let nums = [2, 7, 11, 15];
let target = 9;

function twoSum (nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
      for (let j = i+1; j < nums.length; j++) {
          if (nums[j] == target - nums[i]) {
              findIndex1 = nums.findIndex((index) => index == nums[i]);
              result.push(findIndex1);
              findIndex2 = nums.findIndex((index) => index == nums[j]);
              result.push(findIndex2);
              return result;
          }
      }
  }
}

console.log(twoSum(nums, target));

// ======================================================= //

// **  C H A L L E N G E   0 0 2  ** //
// **  R E M O V E   D U P L I C A T E S  ** //

// Remove duplicate numbers from an array.

// Example 1:
// Input: nums = [1, 1, 2]
// Output: [1, 2]

// INCOMPETE!!!!!

var removeDuplicates = function(nums) {
  let result = [];
  for (let i = 0; i < nums; i++) {
      if (nums[i] != nums[i]-1) {
          result.push(nums[i]);
          return result;
      }
  }
};

console.log(removeDuplicates(nums));