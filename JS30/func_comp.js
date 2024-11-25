/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
    return function (x) {
        let result = x;

        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
            console.log(result);
        }
    };
};

// const fn = compose([(x) => x + 1, (x) => 2 * x]);
const fn = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
console.log(fn(4)); // 9
