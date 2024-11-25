/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    for (let i = arr.length; i >= 0; i--) {
        if (!fn(arr[i], i)) {
            arr.splice(i, 1);
        }
    }

    return arr;
};

const arr = [0, 10, 20, 30];
const greaterThan10 = (n) => {
    return n > 10;
};

console.log(filter(arr, greaterThan10));
