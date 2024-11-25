/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */

var sortBy = function (arr, fn) {
    // sort arr in ascending order by output of fn[arr[i]]
    // fn only returns nums
    // fn will never output duplicate nums

    // traverse arr
    // check fn(arr[i])
    // traverse arr backwards from j = i until you hit 0
    // if (fn(arr[i]) < fn(arr[i - 1])), swap them
    // return sorted array

    for (let i = 1; i < arr.length; i++) {
        const current = arr[i];
        let j = i - 1;
        while (j >= 0 && fn(arr[j]) > fn(current)) {
            arr[j + 1] = arr[j]; // move arr[j] to the right
            j--;
        }
        // when it breaks out, we either found j = -1
        // or arr[j] < current and current needs to be inserted to the right
        // this next line sets arr to the right of 0 or the next lowest number to current
        arr[j + 1] = current;
    }
    return arr;
};

// Case 1
// const arr = [5, 4, 1, 2, 3];
// const fn = (x) => x;

// console.log(arr);
// const temp = arr[1];
// arr[1] = arr[2];
// arr[2] = temp;
// console.log(arr);

// Case 2
const arr = [{ x: 1 }, { x: 0 }, { x: 2 }, { x: -1 }];
const fn = (d) => d.x;

// Case 3
// const arr = [
//     [3, 4],
//     [5, 2],
//     [10, 1],
// ];
// const fn = (x) => x[1];

console.log(sortBy(arr, fn));

// Insertion sort works on small test cases, but is too slow on larger ones