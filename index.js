const express = require('express')
const axios = require('axios');
require('dotenv').config()

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/yogurt",  async (req, res) => {
    await axios.get("https://api.apilayer.com/spoonacular/food/products/search?query=greek%20yogurt", {
        headers: { "apikey": process.env.API_KEY } },
    )
    .then(response => {
        res.send(response.data);
    })} );



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})