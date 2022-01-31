// min API nyckel
const apiKey = "b3a0bc0ec18d41b3bd7d7d8e9f5bd934";
const subBtn = document.getElementById("submit");
subBtn.addEventListener("click", searchWeather);
subBtn.addEventListener('click', removeOldSearch());


function searchWeather(){
    if(document.getElementById("searchBar").value === ""){
        alert("Var vänlig och försök igen!")
    }else{
    const city = document.getElementById("searchBar").value

    
//API URL 

const currWeatUrl = "https://api.weatherbit.io/v2.0/current?city=" + city + "&key=" + apiKey + "&lang=sv" + "&response=json"   


//Fetch metod till att få dagens väder url som returnerar responsen. annars ett error skrivas ut på sidan

        fetch(currWeatUrl).then(
            function (response) {
                console.log(response);
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                }
                else {
                    document.getElementById("error-message").textContent = 'Ett okänt fel inträffade'
                }
            })
    .then(function (text) {

        var descriptionNode = 'Dagens väder: ' + text.data[0].weather.description
        var tempNode = "Temperatur: " + Math.round(text.data[0].temp) + " °C"
        var windNode = "Vindhastighet " + Math.round(text.data[0].wind_spd) + " m/s"
        var humidityNode = "Luftfuktighet " + text.data[0].rh + " %"
        var weatherIcon = new Image
        weatherIcon.src = "https://www.weatherbit.io/static/img/icons/" + text.data[0].weather.icon + ".png"
        weatherIcon.alt = 'Ett okänt fel inträffade med ladning';
        document.getElementById("current-description").textContent = descriptionNode;
        document.getElementById("current-temp").textContent = tempNode;
        document.getElementById("current-wind").textContent = windNode;
        document.getElementById("current-humidity").textContent = humidityNode;
        document.getElementById("current-weather-img").src = weatherIcon.src
    });
        
       

    }
}
