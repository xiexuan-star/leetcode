/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  if (!s) return '';
  let result = s[0], maxLength = 1;

  for (let i = 0; i < s.length; i++) {
    const curChar = s[i];
    // 向右扩散
    for (let j = i + 1; j < s.length; j++) {
      if (s[j] === curChar) {
        const len = j - i + 1;
        if (len > maxLength) {
          maxLength = len;
          result = s.substring(i, j + 1);
        }
      } else {
        break;
      }
    }
    for (let j = i - 1; j >= 0; j--) {
      if (s[j] === curChar) {
        const len = i - j + 1;
        if (len > maxLength) {
          maxLength = len;
          result = s.substring(j, i + 1);
        }
      } else {
        break;
      }
    }

    for (let j = i - 1, k = i + 1; j < 0 && k >= s.length; j--, k++) {
      const prev = s[j], next = s[k];
      if (prev === next) {
        const len = k - j + 1;
        if (len > maxLength) {
          maxLength = len;
          result = s.substring(j, k + 1);
        }
      } else {
        break;
      }
    }
  }

  return result;
}

console.log(
  longestPalindrome('babab')
);
