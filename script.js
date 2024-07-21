const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'e75ec25507msh246ec60f3993535p106414jsnf429a36f4919',
		'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
	}
};

const getWeather = (city) => {

    fetch('https://weather-api138.p.rapidapi.com/weather?city_name=' + city, options)
    .then(response => response.json())
    .then((response) =>{
        console.log(response)
        cityName.innerHTML = 'Here are the weather details for ' + city + ':';
        feels_like.innerHTML = (response.main.feels_like - 273).toPrecision(2) + '&deg;C'
        grnd_lvl.innerHTML = response.main.grnd_level 
        humidity.innerHTML = response.main.humidity
        pressure.innerHTML = response.main.pressure
        sea_lvl.innerHTML = response.main.sea_level
        temp.innerHTML = (response.main.temp - 273).toPrecision(2) + '&deg;C'
        sunrise.innerHTML = convertTimestamp(response.sys.sunrise)
        sunset.innerHTML = convertTimestamp(response.sys.sunset)
        visibility.innerHTML = response.visibility
        degree.innerHTML = response.wind.deg + '&deg;'
        speed.innerHTML = ((response.wind.speed)*18/5).toPrecision(2) + ' kmph'
        all.innerHTML = response.clouds.all
    })
    .catch(err => console.error(err));
}

const options2 = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'e75ec25507msh246ec60f3993535p106414jsnf429a36f4919',
		'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
	}
};

const getForecast = (city) => {

    fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=' + city + '&format=json&u=f', options2)
    .then(response => response.json())
    .then((response) =>{
        console.log(response)
        city_nm.innerHTML = 'Here is a quick future weather overview of ' + city + ':'
        day1.innerHTML = response.forecasts[1].day
        day2.innerHTML = response.forecasts[2].day
        day3.innerHTML = response.forecasts[3].day
        day4.innerHTML = response.forecasts[4].day
        day5.innerHTML = response.forecasts[5].day
        day6.innerHTML = response.forecasts[6].day
        day7.innerHTML = response.forecasts[7].day
        day8.innerHTML = response.forecasts[8].day
        min1.innerHTML = F2C(response.forecasts[1].low) + '&deg;C'
        min2.innerHTML = F2C(response.forecasts[2].low) + '&deg;C'
        min3.innerHTML = F2C(response.forecasts[3].low) + '&deg;C'
        min4.innerHTML = F2C(response.forecasts[4].low) + '&deg;C'
        min5.innerHTML = F2C(response.forecasts[5].low) + '&deg;C'
        min6.innerHTML = F2C(response.forecasts[6].low) + '&deg;C'
        min7.innerHTML = F2C(response.forecasts[7].low) + '&deg;C'
        min8.innerHTML = F2C(response.forecasts[8].low) + '&deg;C'
        max1.innerHTML = F2C(response.forecasts[1].high) + '&deg;C'
        max2.innerHTML = F2C(response.forecasts[2].high) + '&deg;C'
        max3.innerHTML = F2C(response.forecasts[3].high) + '&deg;C'
        max4.innerHTML = F2C(response.forecasts[4].high) + '&deg;C'
        max5.innerHTML = F2C(response.forecasts[5].high) + '&deg;C'
        max6.innerHTML = F2C(response.forecasts[6].high) + '&deg;C'
        max7.innerHTML = F2C(response.forecasts[7].high) + '&deg;C'
        max8.innerHTML = F2C(response.forecasts[8].high) + '&deg;C'
        text1.innerHTML = response.forecasts[1].text
        text2.innerHTML = response.forecasts[2].text
        text3.innerHTML = response.forecasts[3].text
        text4.innerHTML = response.forecasts[4].text
        text5.innerHTML = response.forecasts[5].text
        text6.innerHTML = response.forecasts[6].text
        text7.innerHTML = response.forecasts[7].text
        text8.innerHTML = response.forecasts[8].text
    })
    .catch(err => console.error(err));
}

document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();

    getWeather(city.value);
    getForecast(city.value);
})

function convertTimestamp(timestamp) {
    var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
        
        hh = d.getHours(),
        h = hh,
        min = ('0' + d.getMinutes()).slice(-2),     // Add leading 0.
        ampm = 'AM',
        time;

    if (hh > 12) {
        h = hh - 12;
        ampm = 'PM';
    } else if (hh === 12) {
        h = 12;
        ampm = 'PM';
    } else if (hh == 0) {
        h = 12;
    }

    // ie: 2014-03-24, 3:00 PM
    time = h + ':' + min + ' ' + ampm;
    return time;
}

const F2C = function(tC){
    const tF = (((tC - 32)/180) * 100).toPrecision(2);

    return tF
} 