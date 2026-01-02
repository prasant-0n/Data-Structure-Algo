/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
    // let res = [];
    // let i = num.length - 1;
    // let carry = k;

    // while (i >= 0 || carry > 0) {
    //     if (i >= 0) {
    //         carry += num[i];
    //         i--;
    //     }
    //     res.push(carry % 10);
    //     carry = Math.floor(carry / 10);
    // }

    // return res.reverse();


    /**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
    let sum = BigInt(num.join('')) + BigInt(k);
    let convertSum = sum.toString().split('').map((num) => parseInt(num));
    return convertSum;

};
