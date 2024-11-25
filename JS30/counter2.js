/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let currentValue = init;

    const increment = () => {
        currentValue++;
        return currentValue;
    };

    const reset = () => {
        currentValue = init;
        return currentValue;
    };

    const decrement = () => {
        currentValue--;
        return currentValue;
    };

    return {
        increment,
        reset,
        decrement,
    };
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
