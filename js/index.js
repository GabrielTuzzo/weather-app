const apiKey = '54612c6877bb9835962ac00a226ca1b6'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const searchBox = document.querySelector('.search-input')
const searchBtn = document.querySelector('.btn')
const weatherIcon = document.querySelector('.img-weather')

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await response.json()

    if(response.status === 404 || response.status === undefined) {
        document.querySelector(".error").style.display = "block"
        document.querySelector('.weather').style.display = 'none'
        searchBox.style.borderColor = "red"
    } else {
        document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c'
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
    document.querySelector('.wind').innerHTML = data.wind.speed + ' Km/h'

    if(data.weather[0].main == 'Clouds') {
        weatherIcon.src = 'imgs/clouds.png'
    }
    else if (data.weather[0].main == 'Clear') {
        weatherIcon.src = 'imgs/clear.png'
    }
    else if (data.weather[0].main == 'Rain') {
        weatherIcon.src = 'imgs/rain.png'
    }
    else if (data.weather[0].main == 'Drizzle') {
        weatherIcon.src = 'imgs/drizzle.png'
    }
    else if (data.weather[0].main == 'Mist') {
        weatherIcon.src = 'imgs/mist.png'
    }
 

    searchBox.style.borderColor = "black"
    document.querySelector(".error").style.display = "none"
    document.querySelector('.weather').style.display = 'block'
    }


} 

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value)
})

checkWeather()

