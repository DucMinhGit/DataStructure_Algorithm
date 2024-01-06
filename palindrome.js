/**
 * Check for Palindromes
 */
function isPalindrome(string)
{
  string = string.toLowerCase();
  string = string.replace(/[^a-z0-9]/g, '');
  
  return string = string.split('').reverse().join('');
}

const inputString = "A man, a plan, a canal, Panama";
const result = isPalindrome(inputString);

