function setup() {
    noCanvas();

    //Call this function which returns a promise
    delay(1000)
        //Wait for the promise to return Fulfilled
        .then(() => createP('hello'))
        //Wait for the promise to return rejected
        .catch((err) => console.error(err));
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