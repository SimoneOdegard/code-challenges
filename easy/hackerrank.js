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
    if (c[index+2] === 0) {
      count++;
      index = index+2;
    }
    if (c[index+1] === 0) {
      count++;
      index++;
    }
  }
  return count;
}

console.log('jumping on clouds--', jumpingOnClouds(c));