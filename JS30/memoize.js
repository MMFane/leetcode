/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = {};

    return function (...args) {
        console.log("cache", cache);
        if (!cache[args] && cache[args] !== 0) {
            console.log("No cache entry found");
            const result = fn(...args);
            cache[args] = result;
            console.log(cache);
            return result;
        } else {
            console.log("Already called, returning from cache");
            return cache[args];
        }
    };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
});
memoizedFn(0, 0); // 5
memoizedFn(0, 0); // 5
console.log(callCount); // 1

// const arg1 = args[0];
// const arg2 = args[1];

// console.log("cache", cache);
// console.log("cache includes arg1?", Object.keys(cache).includes(arg1));
// if (cache[arg1] && cache[arg1][arg2]) {
//     console.log(
//         "cache includes arg2?",
//         Object.keys(cache[arg1]).includes(arg2)
//     );
// }

// if (!cache[arg1] || !cache[arg1][arg2]) {
//     const result = fn(...args);
//     cache[arg1] = { [arg2]: result };
//     console.log(cache);
//     return result;
// } else {
//     console.log("Already called, returning from cache");
//     return cache[arg1][arg2];
// }
