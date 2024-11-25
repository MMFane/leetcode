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
    // make new output arr
    // nextNum = get fn(arr[i])
    // look at output & binary search to find place to put nextNum
    // place newNum and continue
    // how do we apply this sorting to the original arr? work with pairs - arr[i] and fn(arr[i])?

    let output = [];

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        // console.log(item);
        const sortOrder = fn(item);
        const newItem = new SortOrder(item, sortOrder);
        // console.log(newItem);
        // output starts empty. binaryInsertionSort one at a time and then return output
        output = binaryInsertionSort(output, newItem);
        // // binary insertion sort
        // binaryInsertionSort(order, newItem);
    }

    // remove sort order and only return original values
    for (let i = 0; i < output.length; i++) {
        output[i] = output[i].item;
    }

    return output;
};

class SortOrder {
    item;
    sortOrder;

    constructor(item, sortOrder) {
        return { item, sortOrder };
    }
}

const binaryInsertionSort = (
    array,
    newValue,
    left = 0,
    right = array.length - 1
) => {
    let middle = Math.floor(array.length / 2);
    console.log("-------------------------");
    console.log("array", array);
    console.log("left", left, "middle", middle, "right", right);

    console.log("new sort", newValue?.sortOrder);
    console.log("left sort", array[left]?.sortOrder);
    console.log("right sort", array[right]?.sortOrder);

    // only two values left, insert new value between them
    if (left == middle || right == middle) {
        array.splice(left, 0, newValue);
        console.log("array after splice", array);
        return array;
    }
    // recurse with left half of the array
    if (
        array[left].sortOrder < newValue.sortOrder &&
        newValue.sortOrder < array[middle].sortOrder
    ) {
        right = middle;
        console.log("recurse on the left");
        return binaryInsertionSort(array, newValue, left, right);
    }
    // recurse with right half of the array
    if (
        array[middle].sortOrder < newValue.sortOrder &&
        newValue.sortOrder < array[right].sortOrder
    ) {
        left = middle;
        console.log("recurse on the right");
        return binaryInsertionSort(array, newValue, left, right);
    }
};

// Case 1
// const arr = [5, 4, 1, 2, 3];
// const fn = (x) => x;

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
