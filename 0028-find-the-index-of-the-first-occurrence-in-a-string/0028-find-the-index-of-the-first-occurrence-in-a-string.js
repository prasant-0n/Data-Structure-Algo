/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    const hLen = haystack.length;
    const nLen = needle.length;



    if (nLen > hLen) return -1;

    for (let index = 0; index <= hLen - nLen; index++) {
        if (haystack.substring(index, index + nLen) === needle) return index;
    }
    return -1;
};