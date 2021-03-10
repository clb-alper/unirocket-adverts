const express = require('express');
const hbs = require('hbs')
const fetch = require('node-fetch');
const path = require('path')
const app = express();
const adverts = require('./adverts');


const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views')



app.set('view engine', 'hbs');
app.set('views', viewsPath);



app.use(express.static(publicDirectoryPath, {
    extensions: ["html"]
}))

app.get('', (req,res)=>{
    res.send({
        advert: adverts 
    })
})

app.get('/adverts', (req,res)=>{

    fetch('http://localhost:3002/')
    .then(res => res.json()) // expecting a json response
    .then(json=> console.log(json.advert))
    
    //.then(json => console.log(JSON.parse(json)));

})


app.listen(3002, ()=>{
    console.log('Server is up on port 3002.');
})