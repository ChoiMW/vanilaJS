let API_KEY="";

fetch('../string.text')
	.then(response => response.text())
    .then(text => API_KEY = text);



function onGeoOK(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(lat);
    console.log(lng);
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        weather.innerText = data.name;
        city.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(){
    alert("Can't find you");
}


navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);