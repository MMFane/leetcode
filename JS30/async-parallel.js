/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
    // execute each function and gather their results or catch their errors
    // return a promise when all other functions have resolved
    const promises = functions.map((func) => func());
    return promises;
};

const promise = promiseAll([
    () => new Promise((resolve) => setTimeout(() => resolve(5), 200)),
    () => new Promise((resolve) => setTimeout(() => resolve(1), 200)),
    () =>
        new Promise((resolve, reject) =>
            setTimeout(() => reject("Error"), 100)
        ),
]);
promise.then(console.log); // [42]

// const startPromises = async (functions) => {
//     const promises = [];
//     for (let i = 0; i < functions.length; i++) {
//         const promise = new Promise((resolve, reject) => {
//             try {
//                 resolve(functions[i]());
//             } catch (err) {
//                 reject(err);
//             }
//         });
//         const result = await promise;

//         promises.push(result);
//     }
//     return promises;
// };
// const promises = startPromises(functions).then(
//     new Promise((resolve, reject) => {
//         try {
//             resolve(promises);
//         } catch (err) {
//             reject(err);
//         }
//     })
// );
