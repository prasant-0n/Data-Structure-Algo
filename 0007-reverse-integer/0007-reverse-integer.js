/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;
    
    let rev = 0;

    while (x !== 0) {
        const digit = x % 10;
        x = (x / 10) | 0; // truncate toward zero

        // Overflow check
        if (rev > INT_MAX / 10 || (rev === INT_MAX / 10 && digit > 7)) {
            return 0;
        }
        if (rev < INT_MIN / 10 || (rev === INT_MIN / 10 && digit < -8)) {
            return 0;
        }

        rev = rev * 10 + digit;
    }

    return rev;
};
