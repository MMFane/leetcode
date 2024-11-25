const binaryInsertionSort = (
    array,
    newValue,
    left = 0,
    right = array.length - 1
) => {
    let middle = Math.floor(array.length / 2);

    // only two values left, insert new value between them
    if (left == middle || right == middle) {
        array.splice(left + 1, 0, newValue);
        return array;
    }
    // recurse with left half of the array
    if (array[left] < newValue && newValue < array[middle]) {
        right = middle;
    }
    // recurse with right half of the array
    if (array[middle] < newValue && newValue < array[right]) {
        left = middle;
    }
    return binaryInsertionSort(array, newValue, left, right);
};

// add comparison fn so we can handle {number, sortOrder}

console.log(binaryInsertionSort([1, 3, 5, 8, 9, 12, 15, 21, 26], 10));
console.log(binaryInsertionSort([], 10));
console.log(binaryInsertionSort([1, 12], 10));
