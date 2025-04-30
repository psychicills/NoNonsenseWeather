# Table of Contents

- [NoNonsenseWeather](#nononsenseweather)
- [Target Browsers](#target-browsers)
- [Further Reading](#further-reading)
- [Dependencies](#how-to-install-dependencies)
- [Running The App](#how-to-run-the-application-on-a-server)
- [Testing](#important-tests)
- [API Endpoints](#api-endpoints-get-and-post)
- [Future roadmap](#future-roadmap)

# NoNonsenseWeather

No Nonsense Weather is an app that is a service used to be able to search and find
different weather forcast(s) for locations that are desried by the user.

# Target Browsers

The app works the best in Google Chrome and is meant to be a desktop application, iOS and Android
may look a bit off however funcitonality is the same.

# Further Reading

Click this link: [developer-manual](#Developer-Manual) in order to view the developer manual for further reading.

# Developer Manual

This portion covers technical specifications for the project.

# How to install Dependencies

For this project there are a few depedencies that need to be installed in order for the project to function as intended.
This would be include:

- NVM
- Node js express
- Supabase
- Nodemon
- Body-parser

The process for each goes as following:

## Install NVM

- First: Download NVM from the github repo: https://github.com/coreybutler/nvm-windows and check that it has been installed by running this command to check the version:

```bash
npm -v
```

## Node js Express

```bash
npm install express
```

## Nodemon

```bash
npm install -g nodemon
```

## Supabase

```bash
npm install @supabase/supabase-js
```

## Body Parser

```bash
npm install body-parser
```

# How to run the application on a server

This application was developed using supabase and the requirements for running it require a superbase url and supabase key. These were hidden in an environment file then uploaded to vercel. The installation for the .env is as follows

```bash
    npm install dotenv
```

Within your .env, which is specified to be ignored in the .gitignore you must have two variables named:

```javascript
    SUPABASE_URL = your key
    SUPABASE_ANON_KEY = your key
```

These two will be the keys that allow you to run on supabase.

Once you have all of those installed all you need to do to start the server is:

```bash
npm start
```

If you are adding code and want to quickly restart the server, WHILE the server is running enter

```bash
rs
```

And the server will restart.

# Important Tests

Within the index.js file, there are some key console.log() that will indicate whether or not your server is up and running, or if you are actually reaching those portions of the app. Otherwise you will be thrown an error. These messages are:

```javascript
console.log("attempting to GET login info"); //The GET message for Supabase
console.log("adding user"); //The POST message for Supabase
console.log(`express app lsitening on port ${port}`); //Indication that your server is running on your desired port, 3000 was used in the index.js
```

# API Endpoints GET and POST

Within this application, there are two important API endpoints that have been authored for the purpose of retrieving and writing information to the Supabase database. This is mainly attached to the Login function of the site.

The function below is the GET endpoint. What the function does is retrieve all of the login information from the data base in order to verify if someone is a new user, returning user, or checks when someone is creating a user, they are not creating an account with the same username as another. If there is an issue in retreival there will be a 400 error.

```javascript
app.get("/login", async (req, res) => {
  console.log("attempting to GET login info");
  const { data, error } = await supabase.from("user").select();
  if (error) {
    console.log(`Error: ${error}`);
    res.statusCode = 400;
    res.send(error);
  }
  res.send(data);
});
```

The function below is the POST endpoint of the app. What the function does is when someone is creating a new account, it is sending a username and password to the database to write to a new row. With each new user there is an associated timestamp for when the account was created and an id number in the database. If there is an issue in sending the data there will be a 500 error.

```javascript
app.post("/user", async (req, res) => {
  console.log("adding user");
  console.log(req.body);
  const username = req.body.username;
  const pw = req.body.password;

  const { data, error } = await supabase
    .from("user")
    .insert({
      user_username: username,
      user_password: pw,
    })
    .select();
  if (error) {
    console.log(`Error: ${error}`);
    res.statusCode = 500;
    res.send(error);
  }
  res.send();
  console.log(req);
});
```

# Future roadmap

There are currently no known bugs that hinder the website in its functionality.

Given the current function of the website there are several more implementations that would like to be added:

- Live weather map (location can be inserted for better reference)
- More sources of forecasting information
- Historical Forecasting
- Saved forecasting search w/ information

Some or all of these may be done by API calls from other services that possibly require an API key in order to be able to use them. These API keys would have to be inserted into the .env file in order to ensure secrecy from the outside world to prevent abuse.
