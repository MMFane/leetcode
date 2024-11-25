/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
    console.log(args);
    return args.length;
};

console.log(argumentsLength({}, null, "3")); // 3
