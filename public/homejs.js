function callAPI(){
    fetch("/", {
        method: 'POST',
    })
    .then((response) => response.json())
    .then((responseJSON) =>{
        console.log("response", responseJSON) // this will show in browser
    })
}
window.onload = callAPI;