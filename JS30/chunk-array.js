/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    // start and grab first size entries -> put them in their own array at output[0]
    // count ++
    // start at arr[size * count] -> grab the next size entries -> put them in their own array at output[count]
    // once we find a chunk that is < size size, we stop. What to do if array size evenly divides by chunk
    let count = 0;

    const getnextChunk = (arr, size, output) => {
        const startingIndex = count * size;

        if (startingIndex >= arr.length) {
            return output;
        }

        const nextChunk = arr.slice(startingIndex, startingIndex + size);
        output.push(nextChunk);
        count++;
        getnextChunk(arr, size, output);
    };

    const output = [];
    getnextChunk(arr, size, output);
    return output;
};

// Case 1
// const arr = [1, 2, 3, 4, 5];
// size = 1;
// console.log(chunk(arr, size));

// Case 2
// const arr = [1, 9, 6, 3, 2];
// size = 3;
// console.log(chunk(arr, size));

// Case 3
// const arr = [8, 5, 3, 2, 6];
// size = 6;
// console.log(chunk(arr, size));

// Case 4
const arr = [];
size = 1;
console.log(chunk(arr, size));
