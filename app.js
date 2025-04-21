const express = require('express')

const app = express();

const port = 3000; //do i change this? supabase? verecel? 

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile('public/home.html', {root: __dirname});
});

app.post('/', (req, res) => {

   /* const response = fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m")
    .then((response) => response.json())
    .then((rj) =>{
       const temp = rj.hourly.temperature_2m
       const time = rj.hourly.time
        res.render('index', {temp, time})
    })
*/
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