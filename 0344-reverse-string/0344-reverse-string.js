/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // // i starts at the end, j starts at the beginning
    // for (let i = s.length - 1, j = 0; j < i; i--, j++) {
    //     // Swap elements
    //     let temp = s[i];
    //     s[i] = s[j];
    //     s[j] = temp;
    // }

    let left = 0;
    let right = s.length -1;

    while( left < right){
        [s[left], s[right]] = [s[right],s[left]];

        left++;
        right --;
    }
};