/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
    if (obj.length == 0 || Object.keys(obj).length == 0) {
        return true;
    }
    return false;
};

const obj = JSON.parse('{ "length": 0 }');
console.log(isEmpty(obj));
console.log(Object.keys({}).length);
