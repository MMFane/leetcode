/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
    //try to resolve before time limit
    return async function timeLimitedFn(...args) {
        const output = new Promise((resolve, reject) => {
            try {
                const result = fn(...args);
                setTimeout(() => {
                    // call the end
                    reject("Time Limit Exceeded");
                }, t);
                resolve(result);
            } catch (err) {
                throw new Error(err);
            }
        });
        // set timelimit

        return timeLimitedFn;
    };
};

const limited = timeLimit(
    (t) =>
        new Promise((res) => {
            console.log("setting fn timeout");
            setTimeout(() => {
                console.log("fn resolved");
                return res;
            }, t);
        }),
    100
);

limited(150).catch(console.log); // "Time Limit Exceeded" at t=100ms

// const fn = async (n) => {
//     await new Promise((res) => setTimeout(res, 100));
//     return n * n;
// };
// const inputs = [5];
// const t = 50;

// return async function (...args) {
//     return function fn(...args) {
//         setTimeout(() => {
//             reject("Time Limit Exceeded");
//         }, t);
//         return new Promise((resolve, reject) => {});
//     };
// };
