// ======================================================= //

// **  C H A L L E N G E   0 1 3  ** //
// **  S I N G L E   N U M B E R   2  ** //

// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: nums = [2,2,3,2]
// Output: 3

// Example 2:
// Input: nums = [0,1,0,1,0,1,99]
// Output: 99

let singleTwo1 = [2, 2, 3, 2]; //3
let singleTwo2 = [0,1,0,1,0,1,99]; //99

function singleNumberTwo(nums) {
  let sorted = nums.sort((a,b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== sorted[i + 1] && sorted[i] !== sorted[i + 2]) {
      return sorted[i];
    }
    i = i + 2;
  }
};

console.log('singled number 2--', singleNumberTwo(singleTwo2));

// ======================================================= //

// **  C H A L L E N G E   0 1 6  ** //
// **  S I N G L E   N U M B E R   3  ** //

// Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

// You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

// Example 1:
// Input: nums = [1,2,1,3,2,5]
// Output: [3,5]
// Explanation:  [5, 3] is also a valid answer.

// Example 2:
// Input: nums = [-1,0]
// Output: [-1,0]

// Example 3:
// Input: nums = [0,1]
// Output: [1,0]

let singleThree1 = [1,2,1,3,2,5]; // [3, 5]
let singleThree2 = [-1, 0]; // [-1, 0]
let singleThree3 = [0, 1]; // [1, 0]
let singleThree4 = [ 0, 1, 1, 2 ]; // [0, 2]
let singleThree5 = [ 0, 1, 2, 2 ]; // [0, 1]

function singleNumberThree(nums) {
  let answer = [];
  let sorted = nums.sort((a,b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== sorted[i + 1]) {
      answer.push(sorted[i]);
      i--;
    }
    i++;
  }
  return answer;
};

console.log('single number 3--', singleNumberThree(singleThree1));

// ======================================================= //

// **  C H A L L E N G E   0 1 9  ** //
// **  C O N T A I N S   D U P L I C A T E   3  ** //

// Given an integer array nums and two integers k and t, return true if there are two distinct indices i and j in the array such that abs(nums[i] - nums[j]) <= t and abs(i - j) <= k.

// Example 1:
// Input: nums = [1,2,3,1], k = 3, t = 0
// Output: true

// Example 2:
// Input: nums = [1,0,1,1], k = 1, t = 2
// Output: true

// Example 3:
// Input: nums = [1,5,9,1,5,9], k = 2, t = 3
// Output: false

let dupNums1 = [1,2,3,1];
let dupNums2 = [1,0,1,1];
let dupNums3 = [1,5,9,1,5,9];

function containsNearbyAlmostDuplicate(nums, k, t) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) <= t && Math.abs(i - j) <= k) return true;
    }
  }
  return false;
};

console.log(containsNearbyAlmostDuplicate('almost duplicate--', dupNums1, 3, 0));