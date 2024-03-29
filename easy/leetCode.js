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

let arr = [1, 1, 2]

var removeDuplicates = function (nums) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      i--;
      len--;
    }
  }
  return nums.length;
};

console.log('remove duplicates--', removeDuplicates(arr));

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
// **  L A S T   W O R D  ** //

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

// Example:
// s = 'hello world'
// output: 5

// Example 2:
// s = ' fly me to   the moon '
// output: 4

let lastWord1 = 'hello world'; // 5
let lastWord2 = 'fly me to the moon  '; // 4

// ==== FIRST ATTEMPT ==== //
// function lengthOfLastWord(s) {
//   let split = s.split(' ');
//   let lastWord = split.slice(-1);
//   let turnIntoString = lastWord.join('');
//   return turnIntoString.length;
// };

// ==== SECOND ATTEMPT ==== //
// NEED TO REMOVE EXTRA SPACES FOR IT TO FULLY WORK
// function lengthOfLastWord(s) {
//   let noExtraSpaces = s
//     .replace(/\s+/g, " ")
//     .replace(/^\s+|\s+$/g, "");
//   let split = noExtraSpaces.split(' ');
//   let lastWord = split.slice(-1);
//   let turnIntoString = lastWord.join('');
//   return turnIntoString.length;
// };

// ==== THIRD ATTEMPT ==== //
// found out about .trim to remove outer spaces
// simplified
function lengthOfLastWord(s) {
  let noExtraSpaces = s.trim();
  let split = noExtraSpaces.split(' ');
  let lastWord = split[split.length - 1];
  return lastWord.length;
};

console.log('length of last word--', lengthOfLastWord(lastWord2));

// ======================================================= //

// **  C H A L L E N G E   0 0 7  ** //
// **  R E M O V E   E L E M E N T  ** //

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1
// Input: nums = [3, 2, 2, 3], val = 3
// Output: 2, nums = [2, 2, _,  _]
// Return k = 2 with the first two elements of nums being 2.

// ** NOTE ** Does not matter what you leave behind the returned k (hence why they are underscores). Elements can be returned in any order.

let removeNums1 = [3, 2, 2, 3]; // val = 3... 2, [2, 2, _, _]
let removeNums2 = [0, 1, 2, 2, 3, 0, 4, 2]; //val = 2 ... 5, [0, 1, 4, 0, 3, _, _, _]

// === FIRST ATTEMPT === //
function removeElement(nums, val) {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
    if (nums[i] !== val) {
      answer++;
    }
  }
  console.log(nums);
  return answer;
};

// === REFACTOR === //
// function removeElement(nums, val) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === val) {
//       nums.splice(i, 1);
//       i--;
//     }
//   }
//   return nums.length; <<<< makes it so you don't need a count/answer variable
// };

console.log('remove element--', removeElement(removeNums2, 2));

// ======================================================= //

// **  C H A L L E N G E   0 0 8  ** //
// **  S E A R C H   I N S E R T   P O S I T I O N  ** //

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// Example 1
// Input: nums = [1, 3, 5, 6], target = 5
// Output: 2

// Example 2
// Input: nums = [1, 3, 5, 6], target = 2
// Output: 1

// Example 3
// Input: nums = [1, 3, 5, 6], target = 7
// Output: 4

let searchNums = [1, 3, 5, 6];

function searchInsert(nums, target) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    count++;
    if (nums[i] === target) {
      return i;
    }
    if (nums[i] > target) {
      return i;
    }
  }
  return count;
};

console.log('search insert--', searchInsert(searchNums, 7));

// ======================================================= //

// **  C H A L L E N G E   0 0 9  ** //
// **  V A L I D   P A R E N T H E S E S  ** //

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

//An input string is valid if:
// --- Open brackets must be closed by the same type of brackets.
// --- Open brackets must be closed in the correct order.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

let parenStr1 = '()'; // true
let parenStr2 = '()[]{}'; // true 
let parenStr3 = '(]'; // false

// ** REVISIT - works on here but doesn't pass leetcode challenges. research hashmaps? i've seen other peoplle use Object.freeze

function validParentheses(s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' && s[i + 1] === ')') { 
      return 'true';
    }
    if (s[i] === '[' && s[i + 1] === ']') {
      return 'true';
    }
    if (s[i] === '{' && s[i + 1] === '}') {
      return 'true';
    }
    else return 'false';
  }
};

console.log('valid parenteses--', validParentheses(parenStr3));

// ======================================================= //

// **  C H A L L E N G E   0 1 0  ** //
// **  P L U S   O N E  ** //

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Example 1:
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

// Example 2:
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].

// Example 3:
// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

let plusOneDigits1 = [1, 2, 5]; // [1, 2, 6]
let plusOneDigits2 = [4, 3, 2, 1]; // [4, 3, 2, 2]
let plusOneDigits3 = [9]; // [1, 0]

// ** REVISIT - doesn't fully work. if the last element in the array appears earlier, it will not work. also didn't think of this but if it's 29, 39, etc, it will not work unless the answer is that anything ending in 9 would push [1,0] to the array.

function plusOne(digits) {
  let answer = [];
  let withOne = 0;
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] !== digits[digits.length - 1]) {
      answer.push(digits[i]);
    }
    if (digits[i] === digits[digits.length - 1]) {
      withOne = digits[i] + 1;
      if (withOne > 9) {
        answer.push(1);
        answer.push(0);
      }
      if (withOne < 9)  {
        answer.push(withOne);
      }
    }
  }
  return answer;
};

console.log('plus one--', plusOne(plusOneDigits3));

// ======================================================= //

// **  C H A L L E N G E   0 1 1  ** //
// **  C L I M B   S T A I R S  ** //

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// 5 = 8
// 6 = 13

function climbStairs(n) {
  if (0 < n && n < 4) {
    return n;
  }
  if (n <= 0) {
    return 0;
  }

  let temp = 0;
  let one = 1;
  let two = 2;

  for (let i = 3; i <= n; i++) {
    temp = one + two;
    one = two;
    two = temp;
  }
  return temp;
};

console.log('climb stairs--', climbStairs(3));

// ======================================================= //

// **  C H A L L E N G E   0 1 2  ** //
// **  S I N G L E   N U M B E R  ** //

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1

let single1 = [2,2,1] // 1
let single2 = [4,1,2,1,2] // 4
let single3 = [1] // 1

function singleNumber(nums) {
  let sorted = nums.sort((a,b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== sorted[i + 1]) {
      return sorted[i];
    }
    i++;
  }
};

console.log('single number--', singleNumber(single2));

// ======================================================= //

// **  C H A L L E N G E   0 1 4  ** //
// **  F I N D   T H E   D I F F E R E N C E  ** //

// You are given two strings s and t.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Return the letter that was added to t.

// Example 1:
// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.

// Example 2:
// Input: s = "", t = "y"
// Output: "y"

let s1 = 'abcd';
let t1 = 'abcde'; // e is added

let s2 = '';
let t2 = 'y'; // y is added

let s3 = "ymbgaraibkfmvocpizdydugvalagaivdbfsfbepeyccqfepzvtpyxtbadkhmwmoswrcxnargtlswqemafandgkmydtimuzvjwxvlfwlhvkrgcsithaqlcvrihrwqkpjdhgfgreqoxzfvhjzojhghfwbvpfzectwwhexthbsndovxejsntmjihchaotbgcysfdaojkjldprwyrnischrgmtvjcorypvopfmegizfkvudubnejzfqffvgdoxohuinkyygbdzmshvyqyhsozwvlhevfepdvafgkqpkmcsikfyxczcovrmwqxxbnhfzcjjcpgzjjfateajnnvlbwhyppdleahgaypxidkpwmfqwqyofwdqgxhjaxvyrzupfwesmxbjszolgwqvfiozofncbohduqgiswuiyddmwlwubetyaummenkdfptjczxemryuotrrymrfdxtrebpbjtpnuhsbnovhectpjhfhahbqrfbyxggobsweefcwxpqsspyssrmdhuelkkvyjxswjwofngpwfxvknkjviiavorwyfzlnktmfwxkvwkrwdcxjfzikdyswsuxegmhtnxjraqrdchaauazfhtklxsksbhwgjphgbasfnlwqwukprgvihntsyymdrfovaszjywuqygpvjtvlsvvqbvzsmgweiayhlubnbsitvfxawhfmfiatxvqrcwjshvovxknnxnyyfexqycrlyksderlqarqhkxyaqwlwoqcribumrqjtelhwdvaiysgjlvksrfvjlcaiwrirtkkxbwgicyhvakxgdjwnwmubkiazdjkfmotglclqndqjxethoutvjchjbkoasnnfbgrnycucfpeovruguzumgmgddqwjgdvaujhyqsqtoexmnfuluaqbxoofvotvfoiexbnprrxptchmlctzgqtkivsilwgwgvpidpvasurraqfkcmxhdapjrlrnkbklwkrvoaziznlpor"
let t3 = "qhxepbshlrhoecdaodgpousbzfcqjxulatciapuftffahhlmxbufgjuxstfjvljybfxnenlacmjqoymvamphpxnolwijwcecgwbcjhgdybfffwoygikvoecdggplfohemfypxfsvdrseyhmvkoovxhdvoavsqqbrsqrkqhbtmgwaurgisloqjixfwfvwtszcxwktkwesaxsmhsvlitegrlzkvfqoiiwxbzskzoewbkxtphapavbyvhzvgrrfriddnsrftfowhdanvhjvurhljmpxvpddxmzfgwwpkjrfgqptrmumoemhfpojnxzwlrxkcafvbhlwrapubhveattfifsmiounhqusvhywnxhwrgamgnesxmzliyzisqrwvkiyderyotxhwspqrrkeczjysfujvovsfcfouykcqyjoobfdgnlswfzjmyucaxuaslzwfnetekymrwbvponiaojdqnbmboldvvitamntwnyaeppjaohwkrisrlrgwcjqqgxeqerjrbapfzurcwxhcwzugcgnirkkrxdthtbmdqgvqxilllrsbwjhwqszrjtzyetwubdrlyakzxcveufvhqugyawvkivwonvmrgnchkzdysngqdibhkyboyftxcvvjoggecjsajbuqkjjxfvynrjsnvtfvgpgveycxidhhfauvjovmnbqgoxsafknluyimkczykwdgvqwlvvgdmufxdypwnajkncoynqticfetcdafvtqszuwfmrdggifokwmkgzuxnhncmnsstffqpqbplypapctctfhqpihavligbrutxmmygiyaklqtakdidvnvrjfteazeqmbgklrgrorudayokxptswwkcircwuhcavhdparjfkjypkyxhbgwxbkvpvrtzjaetahmxevmkhdfyidhrdeejapfbafwmdqjqszwnwzgclitdhlnkaiyldwkwwzvhyorgbysyjbxsspnjdewjxbhpsvj" // t is added

function findTheDifference(s, t) {
  let splitS = s.split('');
  let splitT = t.split('');
  let sortedS = splitS.sort();
  let sortedT = splitT.sort();
  for (let i = 0; i < sortedT.length; i++) {
    if (sortedS[i] !== sortedT[i]) {
      return sortedT[i];
    }
  }
};

console.log('find the difference--', findTheDifference(s3, t3));

// ======================================================= //

// **  C H A L L E N G E   0 1 5  ** //
// **  M I S S I N G   N U M B E R  ** //

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Example 2:
// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

// Example 3:
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

let missingNum1 = [3, 0, 1]; // n = 3 ... 2
let missingNum2 = [0, 1]; // n = 2 ... 2
let missingNum3 = [9,6,4,2,3,5,7,0,1]; // n = 9 ... 8
let missingNum4 = [1];

function missingNumber(nums) {
  nums = nums.sort((a, b) => a - b);
  
  if (nums[0] === 1) {
    return 0;
  }

  for (let i = 0; i < nums.length; i++) {
    if ((nums[i + 1] - nums[i]) !== 1 ) {
      return nums[i] + 1;
    }
  } 
};

console.log('missing number--', missingNumber(missingNum4));

// ======================================================= //

// **  C H A L L E N G E   0 1 7  ** //
// **  C O N T A I N S   D U P L I C A T E  ** //

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

let dupNums1 = [1, 2, 3, 1]; // true
let dupNums2 = [1, 2, 3, 4]; // false
let dupNums3 = [1,1,1,3,3,4,3,2,4,2]; // true
let dupNums4 = [2,14,18,22,22]; // true
let dupNums5 = [8]; // false
let dupNums6 = [1,2,3,1]; // true

function containsDuplicate(nums) {
  if (nums.length <= 1) {
    return false;
  }

  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i+1]) {
      return true;
    }
  }
  return false;
};

console.log('contains duplicate--', containsDuplicate(dupNums6));

// ======================================================= //

// **  C H A L L E N G E   0 1 8  ** //
// **  C O N T A I N S   D U P L I C A T E   2  ** //

// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:
// Input: nums = [1,2,3,1], k = 3
// Output: true

// Example 2:
// Input: nums = [1,0,1,1], k = 1
// Output: true

// Example 3:
// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

let dupNumsTwo1 = [1, 2, 3, 1]; // k = 3 ... true
let dupNumsTwo2 = [1, 0, 1, 1]; // k = 1 ... true
let dupNumsTwo3 = [1,2,3,1,2,3]; // k = 2 ... false

function containsNearbyDuplicate(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
        return true;
      }
    }
  }
  return false;
};

console.log('contains nearby duplicate--', containsNearbyDuplicate(dupNumsTwo3, 2));

// ======================================================= //

// **  C H A L L E N G E   0 2 0  ** //
// **  C H E C K   I F   N   &   I T S   D O U B L E   E X I S T  ** //

// Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

// More formally check if there exists two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

// Example 1:
// Input: arr = [10,2,5,3]
// Output: true
// Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.

// Example 2:
// Input: arr = [7,1,14,11]
// Output: true
// Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.

// Example 3:
// Input: arr = [3,1,7,11]
// Output: false
// Explanation: In this case does not exist N and M, such that N = 2 * M.

let checkArr1 = [10,2,5,3]; // true
let checkArr2 = [7,1,14,11]; // true
let checkArr3 = [3,1,7,11]; // false
let checkArr4 = [-2,0,10,-19,4,6,-8]; // false
let checkArr5 = [-20,8,-6,-14,0,-19,14,4]; // true

// function checkIfExist(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] * 2 === arr[j] && i !== j) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

// ========== REFACTOR ========== //
function checkIfExist(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      i++;
    }
    if (arr.includes(arr[i]*2)) {
      return true;
    }
  }
  return false;
};

console.log('check for n and double--', checkIfExist(checkArr5));

// ======================================================= //

// **  C H A L L E N G E   0 2 1  ** //
// **  K E E P   M U L T I P L Y I N G   F O U N D ** //
// **  V A L U E S   B Y   T W O  ** //

// You are given an array of integers nums. You are also given an integer original which is the first number that needs to be searched for in nums.

// You then do the following steps:

// If original is found in nums, multiply it by two (i.e., set original = 2 * original).
// Otherwise, stop the process.
// Repeat this process with the new number as long as you keep finding the number.
// Return the final value of original.

// Example 1:
// Input: nums = [5,3,6,1,12], original = 3
// Output: 24
// Explanation: 
// - 3 is found in nums. 3 is multiplied by 2 to obtain 6.
// - 6 is found in nums. 6 is multiplied by 2 to obtain 12.
// - 12 is found in nums. 12 is multiplied by 2 to obtain 24.
// - 24 is not found in nums. Thus, 24 is returned.

// Example 2:
// Input: nums = [2,7,9], original = 4
// Output: 4
// Explanation:
// - 4 is not found in nums. Thus, 4 is returned.

let multiplyVals1 = [5,3,6,1,12]; // original = 3 ... output 24
let multiplyVals2 = [2,7,9]; // original = 4 ... output 4

function findFinalValue(nums, original) {
  nums.sort((a,b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === original) {
      original = original * 2;
    }
  }
  return original;
};

console.log('find final value--', findFinalValue(multiplyVals1, 3));


// ======================================================= //

// **  C H A L L E N G E   0 2 2  ** //
// **  B E S T   T I M E   T O   B U Y  ** //
// **  &   S E L L   S T O C K  ** //

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

let stockPrices1 = [7,1,5,3,6,4]; // 5
let stockPrices2 = [7,6,4,3,1]; // 0

function maxProfit(prices) {
  let buy = Infinity;
  let sell = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
    }
    sell = Math.max(sell, prices[i] - buy);
  }
  return sell;
};

console.log('max profit--', maxProfit(stockPrices1));

// ======================================================= //

// **  C H A L L E N G E   0 2 3  ** //
// **  M A J O R I T Y   E L E M E N T  ** //

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

let elementNums1 = [3, 2, 3]; // 3
let elementNums2 = [2,2,1,1,1,2,2]; // 2

// only works when there are 2 numbers.
// function majorityElement(nums) {
//   let count1 = 0;
//   let count2 = 0;
//   nums.sort((a,b) => a - b);
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[0]) {
//       count1++;
//     } else if (nums[i] !== nums[0]) {
//       count2++;
//     }
//   }
//   if (count1 > count2) {
//     return nums[0];
//   } else return nums[nums.length-1];
// };

function majorityElement(nums) {
  nums.sort((a,b) => a - b);
  return nums[Math.floor(nums.length/2)];
}

console.log('majority elemnt--', majorityElement(elementNums2));

// ======================================================= //

// **  C H A L L E N G E   0 2 4  ** //
// **  N U M B E R   O F   1   B I T S  ** //

// Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

// Note:
// Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.
 

// Example 1:
// Input: n = 00000000000000000000000000001011
// Output: 3
// Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.

// Example 2:
// Input: n = 00000000000000000000000010000000
// Output: 1
// Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.

// Example 3:
// Input: n = 11111111111111111111111111111101
// Output: 31
// Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.

let find1bits1 = 00000000000000000000000000001011; // 3
let find1bits2 = 00000000000000000000000010000000; // 1
let find1bits3 = 11111111111111111111111111111101; // 31

function hammingWeight(n) {
  let binary = n.toString(2);
  let count = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '1') {
      count++;
    }
  }
  return count;
};

console.log('find 1 bits--', hammingWeight(find1bits3));

// ======================================================= //

// **  C H A L L E N G E   0 2 6  ** //
// **  H A P P Y   N U M B E R  ** //

function isHappy(n) {

};

console.log('is happy--', isHappy(19));