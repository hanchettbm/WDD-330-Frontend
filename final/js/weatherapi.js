// Set Defualts 
let latitude = "43.82538";
let longitude = "-111.792824";

window.addEventListener('storage', function(e){
    latitude = localStorage.getItem('latitude');
    longitude = localStorage.getItem('longitude');
    console.log(latitude);
    console.log(longitude);
    const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&exclude=minutely&appid=53aea94dcf1ed49f207e0bf80bd4f100`;
    fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {
            let temp = Math.round(jsObject.current.temp);
            let description = jsObject.current.weather[0].description;
            let speed = Math.round(jsObject.current.wind_speed);
            let unix_sunrise = jsObject.current.sunrise;
            let unix_sunset = jsObject.current.sunset;
            let visibility = jsObject.current.visibility;

            // Get sunrise
            var date = new Date(unix_sunrise * 1000);
            var hours = date.getHours();
            var minutes = "0" + date.getMinutes();
            var sunrise = hours + ':' + minutes + ' AM';

            // Get sunset
            var date = new Date(unix_sunset * 1000);
            var hours = date.getHours();
            if (hours > 12) { // Change military time to AM/PM
                hours -= 12;
            };
            var minutes = date.getMinutes();
            var sunset = hours + ':' + minutes + ' PM';

            if ((temp <= 50) && (speed > 3)){
            var f = Math.round(35.74 + (0.6215 * temp) - (35.75 * (speed **0.16)) + (0.4275 * temp * (speed **0.16))) + "°F";
            } else {
            var f = "N/A";
            }

            document.querySelector('#description').innerHTML = `Current Status: ${description}`;

            document.querySelector('#current-temp').innerHTML = `Current Temperature: ${temp}&#8457;`;

            document.querySelector('#humidity').innerHTML = `Humidity: ${jsObject.current.humidity}%`

            document.querySelector('#speed').innerHTML = `Wind Speed: ${speed} mph`;

            document.querySelector("#chill").textContent = f;

            document.querySelector('#sun-rise').innerHTML = `Sunrise: ${sunrise}`;

            document.querySelector('#sun-set').innerHTML = `Sunset: ${sunset}`;

            document.querySelector('#visibility').innerHTML = `Visibility: ${Math.round(visibility / 1609.344)} Miles`;
            

            const currentDate = new Date;
            const today = currentDate.getDay();
            let i = today;
            let dayOfTheWeek;
            const days = document.querySelectorAll('.week-day');

            const weekDayNames = {
                0: 'SUN',
                1: 'MON',
                2: 'TUE',
                3: 'WED',
                4: 'THUR',
                5: 'FRI',
                6: 'SAT',
            }

            days.forEach((day) => {
                Object.keys(weekDayNames).forEach((day) => {
                    if (i > 6) {
                        i = 0;
                    }
                    if (day == i) {
                        dayOfTheWeek = weekDayNames[i];
                    }
                })
                day.innerHTML = dayOfTheWeek;
                i += 1;
            })

            const weeklyImages = document.querySelectorAll('.weekly-image');

            const weeklyTemp = document.querySelectorAll('.weekly-temp');

            jsObject.daily.forEach((item, i) => {
                if (i < 5) {
                    let weeklyWeather = Math.round(item.temp.day);
                    weeklyTemp[i].innerHTML = `${weeklyWeather}&#8457;`;
                    let imagesrc = `https://openweathermap.org/img/w/${jsObject.daily[i].weather[0].icon}.png`;
                    weeklyImages[i].setAttribute('src', imagesrc);
                }
                
            });
    })


 });


// Api call based on users city input: Can I get latt and long from somewhere?

