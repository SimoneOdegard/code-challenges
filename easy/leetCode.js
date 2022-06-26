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

// ======================================================= //

// **  C H A L L E N G E   0 0 4  ** //
// **  S T E P S   T O   Z E R O   ?  ** //

// Given an integer num, return the number of steps to reduce it to zero.

// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

// Example
// Input: num = 14
// Output: 6
// Explanation: 
// Step 1) 14 is even; divide by 2 and obtain 7. 
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3. 
// Step 4) 3 is odd; subtract 1 and obtain 2. 
// Step 5) 2 is even; divide by 2 and obtain 1. 
// Step 6) 1 is odd; subtract 1 and obtain 0.

var numberOfSteps = function(num) {
  let count = 0;

  // if num is 0, then you don't have to do any steps to get to 0
  if (num === 0) {
    return 0;
  }

  // while num is not equal to 0 you need to continue with the loop
  while (num !== 0) {

    // if num is even, then divide by 2. increase count.
    if (num % 2 === 0) {
      num = num/2;
      count++;
    }

    // else num is odd, then minus 1. increase count.
    else {
      num = num - 1;
      count++
    }
  }
  return count;
};

// 14, outcome would be 6
// 8, outcome would be 4

console.log('steps to zero--', numberOfSteps(8));

// ======================================================= //

// **  C H A L L E N G E   0 0 5  ** //
// **  L O N G E S T   C O M M O N   P R E F I X  ** //

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

let strs1 = ["flower","flow","flight"];
let strs2 = ["dog","racecar","car"];

function longestCommonPrefix(arr) {
  let answer = '';
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[0][i] !== arr[j][i]) {
        return answer;
      }
    }
    answer += arr[0][i];
  }
  return answer;
};

console.log('longest common prefix--', longestCommonPrefix(strs1))

// ======================================================= //

// **  C H A L L E N G E   0 0 6  ** //
// **  I S   P A L I N D R O M E   ?  ** //

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

// Example:
// s = 'hello world'
// output: 5

// Example 2:
// s = ' fly me to   the moon '
// output: 4

let lastWord1 = 'hello world'; // 5
let lastWord2 = 'fly me to the moon '; // 4

// ==== FIRST ATTEMPT ==== //
// function lengthOfLastWord(s) {
//   let split = s.split(' ');
//   let lastWord = split.slice(-1);
//   let turnIntoString = lastWord.join('');
//   return turnIntoString.length;
// };

// ==== SECOND ATTEMPT ==== //
// NEED TO REMOVE EXTRA SPACES FOR IT TO FULLY WORK
function lengthOfLastWord(s) {
  let noExtraSpaces = s
    .replace(/\s+/g, " ")
    .replace(/^\s+|\s+$/g, "");
  let split = noExtraSpaces.split(' ');
  let lastWord = split.slice(-1);
  let turnIntoString = lastWord.join('');
  return turnIntoString.length;
};


console.log('length of last word--', lengthOfLastWord(lastWord2));