const Promise_all = (promises) =>
  new Promise((resolve, reject) => {
    const result = [];

    if (!promises.length) resolve(result);

    let promisesChain;

    for (let promise of promises) {
      if (!promisesChain) {
        promisesChain = promise;
      } else {
        promisesChain = promisesChain.then(
          (value) => {
            result.push(value);

            return promise;
          },
          (e) => reject(e)
        );
      }
    }

    promisesChain.then((value) => {
      result.push(value);

      resolve(result);
    });
  });

Promise_all([]).then((array) => {
  console.log("This should be []:", array);
});
function soon(val) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(val), Math.random() * 500);
  });
}
Promise_all([soon(1), soon(2), soon(3)]).then((array) => {
  console.log("This should be [1, 2, 3]:", array);
});
Promise_all([soon(1), Promise.reject("X"), soon(3)])
  .then((array) => {
    console.log("We should not get here");
  })
  .catch((error) => {
    if (error != "X") {
      console.log("Unexpected failure:", error);
    }
  });
