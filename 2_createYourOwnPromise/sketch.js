function setup() {
    noCanvas();

    //Call this function which returns a promise
    delayES8(1000)
        //Wait for the promise to return Fulfilled
        .then(() => createP('hello'))
        //Wait for the promise to return rejected
        .catch((err) => console.error(err));
}

async function delayES8(time) {
    //If a function returns a promise, you can use the await keword to wait for a promise
    await delay(time);
}

//Create a function that takes in a variable time
function delay(time) {
    //This function returns a new Promise
    return new Promise((resolve, reject) => {
        if (isNaN(time)) {
            //Reject promise
            return reject(new Error('Delay requires a vaild number'));
        }
        //Resolve promise
        setTimeout(resolve, time);
    });
}