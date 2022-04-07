// Listen for a storage update after a new google location update.
window.addEventListener('storage', function(e){
    // If we get a location update, update the weather accordingly
    new Promise(function(resolve, reject) {
    getWeather(resolve, reject);
    });
});

/*************
 * Gets Weather Data
 * Based on open 
 * weather API
**************/

async function getWeather() {
    // Set coordinates defualts 
    let latitude = "43.82538";
    let longitude = "-111.792824";

    // Get the new coordinates from local storage.
    latitude = localStorage.getItem('latitude');
    longitude = localStorage.getItem('longitude');

    // Connect to OpenWeather API Using the Location given
    const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&exclude=minutely&appid=53aea94dcf1ed49f207e0bf80bd4f100`;
    let jsObject = "";
    try {
        const response = await  fetch(apiURL);
        jsObject = await response.json();
    } catch {
        console.log("Error Getting weather API Data!");
    }
        // Set the variables based on the response
        let temp = Math.round(jsObject.current.temp);
        let description = jsObject.current.weather[0].description;
        let speed = Math.round(jsObject.current.wind_speed);
        let unix_sunrise = jsObject.current.sunrise;
        let unix_sunset = jsObject.current.sunset;
        let visibility = jsObject.current.visibility;

        // Get sunrise
        var date = new Date(unix_sunrise * 1000); // Chnage the Unix sunrise date to readable date
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var sunrise = hours + ':' + minutes + ' AM';  // Set the string

        // Get sunset
        var date = new Date(unix_sunset * 1000); // Chnage the Unix sunrise date to readable date
        var hours = date.getHours();
        if (hours > 12) { // Change military time to AM/PM
            hours -= 12;
        };
        var minutes = date.getMinutes();
        var sunset = hours + ':' + minutes + ' PM';// Set the string

        // Caclulate wind chill based on speed and temp
        if ((temp <= 50) && (speed > 3)){
        var f = Math.round(35.74 + (0.6215 * temp) - (35.75 * (speed **0.16)) + (0.4275 * temp * (speed **0.16))) + "°F";
        } else {
        var f = "N/A";
        }

        // Change the DOM to match new data
        document.querySelector('#description').innerHTML = `Current Status: ${description}`;
        document.querySelector('#current-temp').innerHTML = `Current Temperature: ${temp}&#8457;`;
        document.querySelector('#humidity').innerHTML = `Humidity: ${jsObject.current.humidity}%`
        document.querySelector('#speed').innerHTML = `Wind Speed: ${speed} mph`;
        document.querySelector("#chill").textContent = f;
        document.querySelector('#sun-rise').innerHTML = `Sunrise: ${sunrise}`;
        document.querySelector('#sun-set').innerHTML = `Sunset: ${sunset}`;
        document.querySelector('#visibility').innerHTML = `Visibility: ${Math.round(visibility / 1609.344)} Miles`;
        
        /***********************
         * Format Forecast Data
        ***********************/
        const currentDate = new Date;
        const today = currentDate.getDay(); // Get the day today
        let i = today;
        let dayOfTheWeek;
        const days = document.querySelectorAll('.week-day'); 

        const weekDayNames = {  // For table display
            0: 'SUN',
            1: 'MON',
            2: 'TUE',
            3: 'WED',
            4: 'THUR',
            5: 'FRI',
            6: 'SAT',
        }
        // Run through each day and display the forecast only for the next 5 days (rotation)
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
        // Content for table
        const weeklyImages = document.querySelectorAll('.weekly-image');
        const weeklyTemp = document.querySelectorAll('.weekly-temp');
        // Get the image icons that OpenWeather provides based on the weather of each day
        jsObject.daily.forEach((item, i) => { // Rotate through each day
            if (i < 5) {
                let weeklyWeather = Math.round(item.temp.day);
                weeklyTemp[i].innerHTML = `${weeklyWeather}&#8457;`;
                let imagesrc = `https://openweathermap.org/img/w/${jsObject.daily[i].weather[0].icon}.png`; // Get the icon
                weeklyImages[i].setAttribute('src', imagesrc); // Set the image
            }
            
        });

        try {
        // Update the embedded map with new location data from local storage. 
        document.querySelector('#maps').src = `https://www.google.com/maps/embed/v1/view?key=AIzaSyBWMLZWN3xinFxMBfTD8ea-HrkLy-9yLTA&center=${latitude},${longitude}&zoom=18&maptype=satellite`;
        } catch {
            console.log("Error Getting Maps Data!")
        }
 };


