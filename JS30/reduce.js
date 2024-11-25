/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    let current = init;

    for (let i = 0; i < nums.length; i++) {
        current = fn(current, num);
    }

    return current;
};

const nums = [1, 2, 3, 4];
const fn = function sum(accum, curr) {
    return accum + curr * curr;
};
const init = 100;

console.log(reduce(nums, fn, init));
