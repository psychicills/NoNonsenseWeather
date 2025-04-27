
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
  /* await fetch (`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`)
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

function chartFunc(){
    document.getElementById("searchForm").addEventListener("submit", async function(event) {
      event.preventDefault();
      //delete chart? (add later hit https 429 too many request skull emoji x2)
      //instructions never specify to be able to search twice
   
     /* if (c) {
        c.destroy();
      }

    const ctx = document.getElementById('myChart');

    //console.log(tickData())
    const {prices, time} = await tickData();;
    const tflat = time.flat()
    const pflat = prices.flat()
    console.log(prices)
    console.log(time)
   c = new Chart(ctx, {
      type: 'line',
      data: {
        labels: tflat,
        datasets: [{
          label: '$ Stock Price',
          data: pflat,
          fill: false,
          tension: .04
        }]
      },
    });
 */
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
  document.getElementById("searchButt").addEventListener("click", function(){
 let lat = document.getElementById("sLookLat").value;
 let long = document.getElementById("sLookLong").value;
  getLocation(lat, long);
  });
  
 //const apiKey = process.env.WEATHER_API_API_KEY;
  //console.log(apiKey)
  
  /*
    
  console.log(tConvertedPrevious)
  let pr = [];
  let t = [];
  console.log("here")
   await fetch(`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m`)
    .then(response => response.json()).then(data =>{
      console.log("here2")
      pr.push(data.results.map(st => st.c))

    //  console.log(r)

      t.push( data.results.map(t=> new Date(t.t).toISOString().split("T")[0]))

     // pr.push(r)
      //t.push(time)
      console.log(pr)
      console.log(t)
    })
    console.log("here3")

    console.log(pr)
    console.log(t)
  return {prices:pr, time:t}
*/
}






//add location trying this api later
//https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en
/*
for coordinate search within the usa 
 const latitude = (Math.random() * (49.5 - 24.5) + 24.5).toFixed(2);
  const longitude = (Math.random() * (-66.9 - (-125)) + (-125)).toFixed(2);
*/

