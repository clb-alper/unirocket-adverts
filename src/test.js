const fetch = require('node-fetch');

fetch('https://unirocket-advert.herokuapp.com/')
    .then(res => res.json()) // expecting a json response
    .then(json=> console.log(json.advert))
    
    //.then(json => console.log(JSON.parse(json)));