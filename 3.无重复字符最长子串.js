/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let curStr = '';
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    const curChar = s[i];
    const repeatIndex = curStr.indexOf(curChar);
    if (~repeatIndex) {
      curStr = curStr.substring(repeatIndex + 1);
    }
    curStr += curChar;
    if (maxLength < curStr.length) {
      maxLength = curStr.length;
    }
  }
  return maxLength;
}
