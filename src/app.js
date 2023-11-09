
const axios = require('axios');


function randomQuote() {
    const url = "https://api.quotable.io";
    const randomURL = url + `/random`;

    axios({
        method: "get",
        url: randomURL,
        requestType: "json"
    }).then((res) => {
        const quote = res.data.content;
        const author = res.data.author;
        
        console.log(quote + " - " + author)
    })
}

randomQuote()