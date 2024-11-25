/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    // traverse arr
    // run fn(arr[i]) -> store arr[i] on fn(arr[i]) in output
    // return output

    const output = {};
    for (let i = 0; i < this.length; i++) {
        const item = this[i];
        const group = fn(item);
        if (!output[group]) {
            output[group] = [];
        }
        output[group].push(item);
    }
    return output;
};

// Case 1
// console.log([1, 2, 3].groupBy(String)); // {"1":[1],"2":[2],"3":[3]}

// Case 2
// const arr = [{ id: "1" }, { id: "1" }, { id: "2" }];

// const fn = function (item) {
//     return item.id;
// };

// Case 3
const arr = [
    [1, 2, 3],
    [1, 3, 5],
    [1, 5, 9],
];

const fn = function (list) {
    return String(list[0]);
};

console.log(arr.groupBy(fn));
