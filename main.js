// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={0e6fabe44b343c5a937dacc7a4b7e8e2}
// 0e6fabe44b343c5a937dacc7a4b7e8e2
const errorContainer = document.querySelector(".errorContainer");
const button_Close = document.querySelector(".buttonClose")
const close_error = document.querySelector(".errorContainer .error .top span")
const search_location = document.querySelector(".search_location")
const cloudImg = document.querySelector(".cloudImg img")
const weather_dis = document.querySelector(".weather_dis")
const cloud = document.querySelector(".weather_degree_section h1")
const lonNdlat = document.querySelector(".weather_degree_section p")
const humidity = document.querySelector(".humidity p")
const seaLevel = document.querySelector(".sea_level p")
const wind = document.querySelector(".wind p")
const country = document.querySelector(".country")
const sunSet = document.querySelector(".sunSet")
const sunRise = document.querySelector(".sunRise")

fetch(`https://api.openweathermap.org/data/2.5/weather?q=Nigeria&appid=0e6fabe44b343c5a937dacc7a4b7e8e2&units=metric`)
.then((res) => res.json())
.then((data) => {
    cloudImg.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
    console.log(data)
    weather_dis.textContent = data.weather[0].description;
    cloud.textContent = data.clouds.all;   
    lonNdlat.textContent = data.coord.lat + "/" + data.coord.lon
    humidity.textContent = data.main.humidity + "%"
    seaLevel.textContent = data.main.sea_level
    wind.textContent = data.wind.speed + " hpm"
    country.textContent = data.sys.country;
    sunSet.textContent = data.sys.sunset;
    sunRise.textContent = data.sys.sunrise;
})

search_location.addEventListener("keypress", (event) =>{
    const getInputValue = search_location.value
    if(event.key === "Enter"){
        event.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getInputValue}&appid=0e6fabe44b343c5a937dacc7a4b7e8e2&units=metric`)
        .then((res) => res.json())
        .then((data) => {
            cloudImg.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
            console.log(data)
            weather_dis.textContent = data.weather[0].description;
            cloud.textContent = data.clouds.all;   
            lonNdlat.textContent = data.coord.lat + "/" + data.coord.lon
            humidity.textContent = data.main.humidity + "%"
            seaLevel.textContent = data.main.sea_level
            wind.textContent = data.wind.speed + " hpm"
            country.textContent = data.sys.country;
            sunSet.textContent = data.sys.sunset;
            sunRise.textContent = data.sys.sunrise;
        }).catch(() =>{
            errorContainer.style.display = "block"
        })
    }
})

close_error.addEventListener("click", () => {
    errorContainer.style.display = "none"
})

button_Close.addEventListener("click", () => {
    errorContainer.style.display = "none"
})