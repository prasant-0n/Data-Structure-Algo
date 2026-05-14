/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            // Found a mismatch! We have two choices:
            // 1. Skip the left char OR 2. Skip the right char
            return isPurePalindrome(s, left + 1, right) || 
                   isPurePalindrome(s, left, right - 1);
        }
        left++;
        right--;
    }

    return true;
};

// Helper function to check a specific range
function isPurePalindrome(s, i, j) {
    while (i < j) {
        if (s[i] !== s[j]) return false;
        i++;
        j--;
    }
    return true;
}