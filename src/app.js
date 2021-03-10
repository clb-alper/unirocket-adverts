const express = require('express');
const hbs = require('hbs')
const fetch = require('node-fetch');
const path = require('path')
const {adverts,advertsUniswap} = require('./adverts');

const app = express();
const port = process.env.PORT || 3002

const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views')



app.set('view engine', 'hbs');
app.set('views', viewsPath);



app.use(express.static(publicDirectoryPath, {
    extensions: ["html"]
}))

app.get('', (req,res)=>{
    res.send({
        advert: adverts,
        advertUniswap: advertsUniswap 
    })
})


app.listen(port, ()=>{
    console.log('Server is up on port.'+ port );
})