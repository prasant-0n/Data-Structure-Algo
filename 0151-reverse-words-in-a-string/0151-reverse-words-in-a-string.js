/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    // let words = s.split(' ');
    // let res = [];

    // for (let i = words.length - 1; i >= 0; i--) {
    //     if (words[i]) {
    //         res.push(words[i]);
    //     };
    // };

    // return res.join(' ');



    // let words = s.split(' ').filter(word => word !== "");
    // let left = 0;
    // let right = words.length - 1;

    // while (left < right) {
    //     [words[left], words[right]] = [words[right], words[left]];
    //     left++;
    //     right--;
    // }

    // return words.join(' ');

    return s.split(' ').filter(word => word !=='').reverse().join(' ');

};