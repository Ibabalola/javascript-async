const fetch = require('node-fetch');

const API_KEY = '6a261986f3f12a7a244a8abaf9c589d2';
const url = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${API_KEY}`;

fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(e => `Error: ${e}`)

