function callAPI(){
    fetch("/", {
        method: 'POST',
    })
    .then((response) => response.json())
    .then((responseJSON) =>{
        console.log("response", responseJSON) // this will show in browser
    })
}

async function randWeather() {
    const latitude = (Math.random() * 180 - 90).toFixed(2);
  const longitude = (Math.random() * 360 - 180).toFixed(2);
  console.log(latitude)
  console.log(longitude)
  document.getElementById("loc").textContent = `Location: ${latitude}, ${longitude}`
  /* await fetch (`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`)
    .then((response) => response.json())
    .then((weath) =>{
        //const time = weath.hourly.time[weath.hourly.time.length - 1]
        //console.log(time)
        const temp = weath.hourly.temperature_2m[weath.hourly.temperature_2m.length - 1]
        console.log (temp)
        const temp2 = (temp * (9/5)) + 32;
        document.getElementById("temp").textContent = `Latest Temperature: ${temp2.toFixed(2)}° F`
    })*/
}


//add location trying this api later
//https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en