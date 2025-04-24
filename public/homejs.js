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
    const latitude = (Math.random() * 180 - 90).toFixed(6);
  const longitude = (Math.random() * 360 - 180).toFixed(6);
  console.log(latitude)
  console.log(longitude)
   // fetch (`https://api.open-meteo.com/v1/forecast?
     //   latitude=52.52&longitude=13.41&hourly=temperature_2m`)
}
