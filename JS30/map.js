/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    const newArr = [];
    arr.forEach((item, index) => {
        newArr[index] = fn(item, index);
    });

    return newArr;
};

const arr = [1, 2, 3];
const plusone = (n) => n + 1;

const plusI = (n, i) => n + i;
const constant = (n, i) => 42;

console.log(map(arr, plusone));
console.log(map(arr, plusI));
console.log(map(arr, constant));

// var map_with_args = function (arr, fn) {
//     const newArr = [];
// arr.forEach((item, index) => {
//     newArr[index] = fn(item);
// });

// return newArr;
// };
