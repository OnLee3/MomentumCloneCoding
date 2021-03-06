const API_KEY="ed878c4c12458724e9bfb0c3b163ce3a";
const weatherBox = document.querySelector("#weather");

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerText = data.name;
        //Fade In 효과
        weatherBox.classList.add(FADEINANI__INIT);
        setTimeout(function () {
            weatherBox.classList.add(FADEINANI__FIN);
        }, 30)
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);