var createCounter = function (n) {
    let callCount = 0;

    return function () {
        const output = n + callCount;
        callCount++;
        return output;
    };
};

const counter = createCounter(10);
console.log(counter());

console.log("Hello World");
