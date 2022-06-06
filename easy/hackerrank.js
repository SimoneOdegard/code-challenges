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
  console.log(split.length);

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