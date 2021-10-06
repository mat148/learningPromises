let randomImageAPI = 'https://source.unsplash.com/1600x900/?';
let randomWordAPI = 'https://random-word-api.herokuapp.com/word?number=1';


function setup() {
    noCanvas();
    wordImg().then(results => {
        if(results.img != 'https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200') {
            createP(results.word);
            createImg(results.img);
        } else {
            wordImg();
        }
    }). catch(err => console.error(err));
}

async function wordImg() {
    let response1 = await fetch(randomWordAPI);
    let json = await response1.json();
    let randomWord = json[0];
    let response2 = await fetch(randomImageAPI + randomWord);
    let img_url = response2.url;

    return {
        word: randomWord,
        img: img_url
    }
}