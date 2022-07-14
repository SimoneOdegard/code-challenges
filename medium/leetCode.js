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

// function singleNumberThree(nums) {
//   let answer = [];
//   let sorted = nums.sort((a,b) => a - b);
//   console.log(sorted);
//   for (let i = 0; i < sorted.length; i++) {
//     if (sorted[i] !== sorted[i + 1]) {
//       answer.push(sorted[i]);
//     }
//     if (sorted[i] !== sorted[i + 1] && sorted[i] !== sorted[sorted.length - 1]) {
//       answer.push(sorted[sorted.length - 1]);
//       return answer;
//     }
//     i++;
//   }
//   return answer;
// };

function singleNumberThree(nums) {
  let answer = [];
  let sorted = nums.sort((a,b) => a - b);
  console.log(sorted);
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