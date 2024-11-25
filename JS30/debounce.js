/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            functionCalled = false;
            return fn(...args);
        }, t);
    };
};

const log = debounce(console.log, 100);
log("Hello"); // cancelled
log("Hello"); // cancelled
log("Hello"); // Logged at t=100ms

/*
Call fn
Repeat (
    It waits t milliseconds to execute
    If called before t time passes, the first call is cancelled and a new one is created
)
If after t milliseconds, repeat whole thing
*/
