/**
 * Find the Longest Word in a String
 */
function findLongestWord(str) {
  var words = str.split(" ");
  var maxLength = words.reduce(function (acc, cur) {
    return cur.length > acc ? cur.length : acc;
  }, 0);
  return maxLength;
}
findLongestWord("The quick brown fox jumped over the lazy dog");