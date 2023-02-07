//Agafem els elements del DOM que necessitem
let icon = document.getElementById("icon");
let temperature = document.getElementById("temperature");
let tempDescription = document.getElementsByClassName(
  "temperature-description"
)[0];
let place = document.getElementsByClassName("location")[0];
let notification = document.getElementsByClassName("notification")[0]
let apiKey = "82005d27a116c2880c8f0fcb866998a0";

//Fem que demane si vols donar la ubicació, si es afirmatiu s'ejecutarà tot el codi
//per contra si denega no ho fa mostra un missatge d'error
navigator.geolocation.getCurrentPosition((pos) => {
  let lat = pos.coords.latitude;
  let lon = pos.coords.longitude;
  //instacia les coordenades per posar-les dins del fetch a la api
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
      lat +
      "&lon=" +
      lon +
      "&appid=" +
      apiKey
  )
    .then((data) => data.json())
    //transformem les dades a json
    .then((values) => {
      //console.log(values);
      icon.setAttribute("src", "icons/" + values.weather[0].icon + ".png");
      //Canvia el src de la imatge segons la rebuda
      //Calcula els graus celsius i li dona 2 decimals
      let celsius = (parseFloat(values.main.temp) - 273.15).toFixed(2);
      temperature.innerHTML = celsius + "º <span>C</span>";
      temperature.setAttribute("class", "celsius");
      //Canvia el contingut de l'element temperatura i li dona la classe celsius per indicar els graus
      temperature.addEventListener("click", () => {
        let fahrenheit = (celsius * 1.8 + 32).toFixed(2);
        if (temperature.className == "celsius") {
          temperature.innerHTML = fahrenheit + "º <span>F</span>";
          temperature.className = "fahrenheit";
        } else {    
          temperature.innerHTML = celsius + "º <span>C</span>";
          temperature.className = "celsius";
        }
      });
      //Métode click que canvia el contingut de temperatura segons si la seua classes es celsius o fahrenheit
      //canviant entre les classes celsius i fahrenheit
      //Canvia el contingut de la descripció i la localització per els obtesos.
      tempDescription.innerHTML =
        "<p>" + values.weather[0].description + "</p>";
      place.innerHTML = "<p>"+values.name + "," + values.sys.country+"</p>"
    });
},(rej)=>{
  notification.style.display = "block";
  notification.innerHTML = "<p>"+rej.message+"</p>"

});


