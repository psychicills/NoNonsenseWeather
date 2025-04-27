const express = require('express')
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const port = 3000; //do i change this? supabase? verecel? 

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile('public/home.html', {root: __dirname});
});

app.post('/', (req, res) => {
    res.header("Content-Type", "application/json")
    console.log("hittin api") //shows up in terminal
    const output = {
        "response": "hello"
    };
   
    res.send(JSON.stringify(output));
});

app.listen(port, () => {
    console.log(`express app lsitening on port ${port}`)
});


//"app js is the window.onload for the website" 