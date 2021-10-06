let randomImageAPI = 'https://source.unsplash.com/1600x900/?';
let randomWordAPI = 'https://random-word-api.herokuapp.com/word?number=1';


function setup() {
    noCanvas();
    test();
}

function test() {
    //Fetch returns a promise
    fetch(randomWordAPI)
        //Wait until fetch promise returns fulfilled
        //json also returns a promise
        .then(response => response.json())
        //Wait until json promise returns fulfilled
        .then(json => {
            let randomWord = json[0];
            createP(randomWord).addClass('text');
            return fetch(randomImageAPI + randomWord);
        })
        //Wait until the random image API returns fulfilled
        .then(response => {
            if(response.url != 'https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200') {
                console.log('img');
                createImg(response.url);
            } else {
                console.log('no image');
                removeElements();
                test();
            }
        })
        //If any promise returns rejected
        .catch(err => console.log(err))
}