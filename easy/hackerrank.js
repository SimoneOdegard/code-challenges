// ======================================================= //

// **  C H A L L E N G E   0 0 1  ** //
// **  R E P E A T E D   S T R I N G  ** //

// There is a string, s, of lowercase English letters that is repeated infinitely many times. Given an integer, n, find and print the number of letter a's in the first  letters of the infinite string.

// Example
// s = 'abcac'
// n = 10

// The substring we consider is abcacabcac, the first 10 characters of the infinite string. There are 4 occurrences of a in the substring.

let s = 'abcacabcacbcabc';
let n = 10;

function repeatedString(s, n) {
  let count = 0;
  let split = s.split('');
  //console.log(split.length);

  for (let i = 0; i < split.length; i++) {
    if (split[i] === 'a') {
      count++
    }
    if (i === n) {
      return count;
    }
  }
}

console.log('repeated string--', repeatedString(s, n))

// ======================================================= //

// **  C H A L L E N G E   0 0 2  ** //
// **  J U M P I N G   O N   C L O U D S  ** //

// There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2. The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting position to the last cloud. It is always possible to win the game.

// For each game, you will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided.

// Example
// c = [0, 1, 0, 0, 0, 1, 0]
// Index the array from 0...6. The number on each cloud is its index in the list so the player must avoid the clouds at indices 1 and 5. They could follow these two paths:
// 0 -> 2 -> 4 -> 6 or 0 -> 2 -> 3 -> 4 -> 6.
// The first path takes 3 jumps while the second takes 4. Return 3.

let c = [0, 0, 1, 0, 0, 1, 0];

// ----- F I R S T   A T T E M P T ----- //
// function jumpingOnClouds(c) {
//   let count = 0;
//   for (let i = 0; i < c.length; i++) {
//     // 2 jumps
//     if (c[i+2] === 0) {
//       count++;
//       i = i + 2;
//     }
//     // 1 jump
//     if (c[i+1] === 0) {
//       count++;
//       i++;
//     }
//   }
//   return count;
// }

// ----- S E C O N D   A T T E M P T -----//
// need index variable. doesn't work with just using i from for loop.
function jumpingOnClouds(c) {
  let count = 0;
  let index = 0;

  for (let i = 0; i < c.length; i++) {
    if (c[index + 2] === 0) {
      count++;
      index = index + 2;
    }
    if (c[index + 1] === 0) {
      count++;
      index++;
    }
  }
  return count;
}

console.log('jumping on clouds--', jumpingOnClouds(c));

// ======================================================= //

// **  C H A L L E N G E   0 0 3  ** //
// **  C O U N T   V A L L E Y S  ** //

// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly STEPS steps, for every step it was noted if it was an uphill, U, or a downhill, D step. Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. We define the following terms:

// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

// Example:
// steps = 8 path = [DDUUUUDD]
// The hiker first enters a valley 2 units deep. Then they climb out and up onto a mountain 2 units high. Finally, the hiker returns to sea level and ends the hike.

// int steps = number of steps on the hike
// string path = a string describing the path
// returns the number of valleys traversed

let steps = 8;
let valleyStr = 'UDDDUDUU';
// output should be 1
let valleyStr2 = 'DDUUDDUU';
// output should be 2

function countValleys(steps, str) {
  let up = 0;
  let down = 0;
  let sea = 0;
  let valley = 0;
  for (let i = 0; i < steps; i++) {
    if (str[i] === 'U') {
      up++;
      sea = sea + up;
      if (sea === 0) {
        valley++;
      }
    }
    if (str[i] === 'D') {
      down++;
      sea = sea - down;
    }
  }
  return valley;
}

function countValleysRefact(steps, str) {
  let sea = 0;
  let valley = 0;
  for (let i = 0; i < steps; i++) {
    if (str[i] === 'U') {
      sea++
      if (sea === 0) {
        valley++;
      }
    }
    if (str[i] === 'D') {
      sea--;
    }
  }
  return valley;
}

console.log('counting valleys--', countValleysRefact(steps, valleyStr));

// ======================================================= //

// **  C H A L L E N G E   0 0 4  ** //
// **  S A L E S   B Y   M A T C H  ** //

// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example
// n = 7
// arr = [1, 2, 1, 2, 1, 3, 2];

// There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

let socks = [1, 2, 1, 2, 1, 3, 2];
let socks2 = [1, 2, 1, 2, 1, 2, 1, 3];

function sockMatch(arr, n) {
  let count = 0;
  let sorted = arr.sort();
  for (let i = 0; i < n; i++) {
    if (sorted[i] === sorted[i + 1]) {
      count++;
      i++;
    }
  }
  return count;
};

console.log('sock match--', sockMatch(socks2, 7));

// ======================================================= //

// **  C H A L L E N G E   0 0 5  ** //
// **  L E F T   R O T A T I O N  ** //

// A left rotation operation on an array shifts each of the array's elements 1 unit to the left. For example, if 2 left rotations are performed on array [1, 2, 3, 4, 5], then the array would become [3, 4, 5, 1, 2]. Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.

// Given an array a of n integers and a number, d, perform d left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

let rotation = [1, 2, 3, 4, 5];

function leftRotation(arr, d) {
  let spliced = arr.splice(d);
  console.log('spliced arr--', spliced);
  for (let i = 0; i < arr.length; i++) {
    if (i < d) {
      spliced.push(arr[i]);
    }
  }
  return spliced;
};

console.log('left rotation--', leftRotation(rotation, 2));

// ======================================================= //

// **  C H A L L E N G E   0 0 6  ** //
// **  B U B B L E   S O R T  ** //

// for (int i = 0; i < n; i++) {
//   for (int j = 0; j < n - 1; j++) {
//       // Swap adjacent elements if they are in decreasing order
//       if (a[j] > a[j + 1]) {
//           swap(a[j], a[j + 1]);
//       }
//   }
// }

// Given an array of integers, sort the array in ascending order using the Bubble Sort algorithm above. Once sorted, print the following three lines:

// 1. Array is sorted in numSwaps swaps., where numSwaps is the number of swaps that took place.
// 2. First Element: firstElement, where firstElement is the first element in the sorted array.
// 3. Last Element: lastElement, where lastElement is the last element in the sorted array.
// HINT: add a variable that keeps a tally of all swaps that occur during execution

let bubble = [3, 2, 1];
// 3 swaps will take place
let bubble2 = [4, 2, 3, 1];
// 5 swaps
let bubble3 = [1, 2, 3];
// 0 swaps

function bubbleSort(arr) {
  let swaps = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j + 1]) {
        swaps++;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(`Array is sorted in ${swaps} swaps.`);
  console.log('First Element:', arr[0]);
  console.log('Last Element:', arr[arr.length - 1]);
  // return ['Number of Swaps:', swaps, 'First Element:', arr[0], 'Last Element:', arr[arr.length - 1]];
  return arr;
};

console.log('bubble sort--', bubbleSort(bubble2));

// ======================================================= //

// **  C H A L L E N G E   0 0 7  ** //
// **  M A R K   A N D   T O Y S  ** //

// Mark and Jane are very happy after having their first child. Their son loves toys, so Mark wants to buy some. There are a number of different toys lying in front of him, tagged with their prices. Mark has only a certain amount to spend, and he wants to maximize the number of toys he buys with this money. Given a list of toy prices and an amount to spend, determine the maximum number of gifts he can buy.

// Note Each toy can be purchased only once.

// Example
// prices = [1, 2, 3, 4];
// k = 7;

// The budget is 7 units of currency. He can buy items that cost [1, 2, 3] for 6, or [3, 4] for 7 units. The maximum is 3 items.

let toyPrices = [1, 2, 3, 4];
let toyPrices2 = [3, 7, 2, 9, 4];
let toyPrices3 = [5, 1, 6, 1, 7];

function maximumToys(prices, k) {
  let items = 0;
  let sum = 0;
  let sorted = prices.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] < k) {
      sum += sorted[i];
      if (sum <= k) {
        items++;
      } else break;
    }
    if (sorted[i] === k) {
      return 1;
    }
  }
  return items;
};

console.log('mark and toys--', maximumToys(toyPrices3, 5));

// ======================================================= //

// **  C H A L L E N G E   0 0 8  ** //
// **  A N A G R A M S  ** //

// A student is taking a cryptography class and has found anagrams to be very useful. Two strings are anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency. For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

// The student decides on an encryption scheme that involves two large strings. The encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Determine this number.

// Given two strings, a and b, that may or may not be of the same length, determine the minimum number of character deletions required to make a and b anagrams. Any characters can be deleted from either of the strings.

// Example
// a = 'cde'
// b = 'dcf'

// delete e from a and f from b so that the remaining strings are cd and dc which are anagrams. This takes 2 character deletions.

let stringA = 'cde';
let stringB = 'abc';
// sample output: 4

let stringA2 = 'fcrxzwscanmligyxyvym';
let stringB2 = 'jxwtrhvujlmrpdoqbisbwhmgpmeoke';
// sample output: 30?

function makeAnagram(a, b) {
  let count = 0;
  let sum = a.length + b.length;
  for (let i = 0; i < a.length; i++) {
    if (a.includes(a[i]) && b.includes(a[i])) {
      b = b.replace(a[i], '');
      count++;
    }
  }
  let answer = sum - (count * 2);
  return answer;
};

  console.log('anagram--', makeAnagram(stringA2, stringB2));