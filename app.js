/*
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
DONT FORGET TO NPM INSTALL DEPENDENCIES WHEN PICK BACK UP ON OTHER
COMPUTER
npm install @supabase/supabase-js
npm install body-parser

supda todo:
add check for if user already exists?

other todo:
finish about page
finish login page
    make login pw hidden
finish deployment
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/

const express = require('express')
const supabaseClient = require('@supabase/supabase-js')
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const port = 3000; 

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);
//left off at 35:46

app.get('/login', async (req, res) => {
    console.log('attempting to GET login info');
    const {data, error} = await supabase
    .from('user').select();
    if (error){
        console.log(`Error: ${error}`)
        res.statusCode = 400;
        res.send(error)
    }
    res.send(data)
})

app.post('/user', async(req, res) => {
    console.log('adding user')
    console.log(req.body);
    const username = req.body.username;
    const pw = req.body.password;
    
    const {data, error} = await supabase
    .from('user')
    .insert({
        user_username: username,
         user_password:pw
        })
    .select()
    if (error){
        console.log(`Error: ${error}`)
        res.statusCode = 500;
        res.send(error)
    }
    res.send()
    console.log(req)
})


//from node js lecture
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