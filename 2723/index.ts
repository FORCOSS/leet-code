type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
    let n1: number = await promise1;
    let n2: number = await promise2;
    return n1 + n2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
