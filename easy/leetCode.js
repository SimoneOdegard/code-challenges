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

function twoSum(nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
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

console.log('two sum', twoSum(nums, target));

// ======================================================= //

// **  C H A L L E N G E   0 0 2  ** //
// **  R E M O V E   D U P L I C A T E S  ** //

// Remove duplicate numbers from an array.

// Example 1:
// Input: nums = [1, 1, 2]
// Output: [1, 2]

// INCOMPETE!!!!!

let arr = [1, 1, 2]

var removeDuplicates = function (arr) {
  // create new empty array to put numbers that are not duplicates into
  let result = [];

  // loop through the array
  for (let i = 0; i < arr; i++) {

    // if statement. if the number at x index is not equal to the number at x index - 1 then push that number into the new array. return the new array
    if (arr[i] != arr[i - 1]) {
      result.push(arr[i]);
      return result;
    }
  }
};

console.log('remove duplicates', removeDuplicates(arr));

// ======================================================= //

// **  C H A L L E N G E   0 0 3  ** //
// **  I S   P A L I N D R O M E   ?  ** //

// Determine if input is a palindrome

// Example 1:
// Input: x = 121
// Output: true

// Example 2:
// Input: x = -121
// Output: false

// !!! current code works on strings and palindrome numbers. does not work on non-palindrome numbers

// let x = 121
// let x = 'dad'
let x = 123

var isPalindrome = function(x) {
  // make it easier to read
  let int = x
  
  // negative numbers won't work
  if (int < 0) {
      return false;
  }
  
  // less than 10 will work because single digit
  if (int < 10) {
      return true;
  }
  
  // loop through half of integer
  for (let i = 0; i < int.length / 2; i++) {

      // check if first and last parts are same
      if (int[i] !== int[int.length - 1 - i]) {
          return false;
      }
  }
  return true;
};

console.log('is palindrome', isPalindrome(x));