
function callAPI(){
    fetch("/", {
        method: 'POST',
    })
    .then((response) => response.json())
    .then((responseJSON) =>{
        console.log("response", responseJSON) // this will show in browser
    })
}


//something like loginfunc(username) after a callDatabse() that has
//a const username array to check in login func to make sure that there
//isnt two ?

function callData(){
  fetch("/login",{
    method: 'GET',
  })
  .then((response) => response.json() )
  .then((responseJSON) =>{
    loginFunc(responseJSON)
    console.log(responseJSON)
    console.log("FUCKKKKK")
  })
}

// add responseJSON back

function loginFunc(){
  document.getElementById("accountForm").addEventListener("submit", function(event){
    event.preventDefault()
    callData();
    const un = document.getElementById("userName");
    const pw = document.getElementById("passWord");
    console.log(un)
    console.log(pw)

  });
}


async function randWeather() {
    const latitude = (Math.random() * 180 - 90).toFixed(2);
  const longitude = (Math.random() * 360 - 180).toFixed(2);
  console.log(latitude)
  console.log(longitude)
  document.getElementById("loc").textContent = `Location: ${latitude}, ${longitude}`
   await fetch (`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`)
    .then((response) => response.json())
    .then((weath) =>{
        //const time = weath.hourly.time[weath.hourly.time.length - 1]
        //console.log(time)
        try{
            const temp = weath.hourly.temperature_2m[weath.hourly.temperature_2m.length - 1]
            console.log (temp)
            const temp2 = (temp * (9/5)) + 32;
            document.getElementById("temp").textContent = `Latest Temperature: ${temp2.toFixed(2)}° F`
        }catch (error){
            document.getElementById("temp").textContent = `Latest Temperature: Not Availiable/API Down`
        }
      })
}

function chartFunc(){
  var c;
    document.getElementById("searchForm").addEventListener("submit", async function(event) {
      event.preventDefault();
      let lat = document.getElementById("sLookLat").value;
      let long = document.getElementById("sLookLong").value;
       getLocation(lat, long);
      if (c) {
        c.destroy();
      }

        const ctx = document.getElementById('myChart');
        let {time, temp} = await wData()

        console.log(time)
        console.log(temp)
      c = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: time, 
          datasets: [{
            label: 'Temperature (°F)',  
            data: temp, 
            backgroundColor: ' rgb(126, 178, 238)',  
            borderColor: 'rgba(0, 0, 0, 0.7)',  
            borderWidth: 1
      }]
      },
      options: {
        scales: {
          x: {
            ticks: {
              autoSkip: true,
            }
          }
      }
    }
    });
    document.getElementById('myChart').style.backgroundColor= "rgb(255, 255, 255)";
  });
 
}

async function getLocation(latitude, longitude){
  let cit = ""
  let cont = ""
  await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
   .then(response =>  response.json())
  .then(data => {
  console.log(data)
      cit = data.locality;
      cont = data.countryCode;
      console.log(cit)
      document.getElementById("city").textContent = `${cit}, ${cont}`
})
 
}

async function wData(){
  
 let lat = document.getElementById("sLookLat").value;
 let long = document.getElementById("sLookLong").value;
  
  let time = ""
  let temp = ""


   await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m&forecast_days=3&temperature_unit=fahrenheit`)
    .then(response => response.json())
    .then(data =>{
      console.log(data)
      time = data.hourly.time;
      temp = data.hourly.temperature_2m;
      console.log(time)
      console.log(temp)
      
    })
    return {time, temp}
  
}

//window.onload = callData;