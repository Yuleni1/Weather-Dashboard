
//query selectors

var userFormEl= document.querySelector("#user-form");
var userCityInputEl = document.querySelector("#username");
var cityEl = document.querySelector("#city-container");
var weatherListEl = document.querySelector("#weather-list");
var fiveDayEl = document.querySelector("#five-day")
console.log("for",fiveDayEl)

//GETS WEATHER
var getWeather = function(city){

    //format the github api url
    var apiUrl = 
   "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=imperial&APPID=f1b34903d7c2cdaa6a859360c95e902f"

 //if request was successful
fetch(apiUrl)
.then(function(response){
    if(response.ok){
        response.json().then(function(data){
            displayCities(data, city);
           
            
           
    

            if(response.headers.get("link")){
                console.log("bad link");
                            }

        });

     }else {
         // if not successful, redirect
         document.location.replace("./index.html"); 
         console.log("redirected");
     }
    });
};


//DISPLAYS WEATHER
var displayCities = function(city, searchTerm){
//    console.log("this is the data", city.dt)
   var day = new Date(city.dt*1000)
//    console.log(day.toDateString())

    weatherListEl.textContent="";
    
    var cityInfo = city.name;
    var cityDate = day.toDateString();
    var weatherTemp = city.main.temp;
    var weatherWind = city.wind.speed;
    var weatherHumid= city.main.humidity;    
    var testingDiv = document.querySelector("#city-container");

    var htmlBlocks = `
        <h1 class="testingH1">${cityInfo}</h1>
        <h3>${cityDate}</h3>
        <ul>
            <li>Temp: ${weatherTemp} F</li>
            <li>Wind Speed: ${weatherWind}</li>
            <li>Humidity: ${weatherHumid}</li>
        </ul>
    `

    testingDiv.insertAdjacentHTML('afterend', htmlBlocks);

}


var getWeatherForcast = function(city){
    
     fetch("http://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=imperial&appid=f1b34903d7c2cdaa6a859360c95e902f")
    // fetch("http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&exclude=current,hourly,minutely,alerts&units=imperial&appid=f1b34903d7c2cdaa6a859360c95e902f")
    .then(function(response){
        return response.json()

    })

    .then(function(data){
    
         console.log("get weather" , data)
         
        displayForcast(data, city)
        



        //  return data
    })
}

// getWeatherForcast("London");



var displayForcast = function(city){


    var date1 = new Date(city.list[8].dt*1000)
    var cityDate1=date1.toDateString();
    var dayTemp1 = city.list[8].main.temp;
    var dayWind1 = city.list[8].wind.speed;
    var dayHumid1 = city.list[8].main.humidity;
    var icon1 = city.list[8].weather[0].icon;
   
    var date2 = new Date(city.list[16].dt*1000)
    var cityDate2=date2.toDateString();
    var dayTemp2 = city.list[16].main.temp;
    var dayWind2 = city.list[16].wind.speed;
    var dayHumid2 = city.list[16].main.humidity;
    var icon2 = city.list[16].weather[0].icon;

    
    var date3 = new Date(city.list[24].dt*1000)
    var cityDate3=date3.toDateString();
    var dayTemp3 = city.list[24].main.temp;
    var dayWind3 = city.list[24].wind.speed;
    var dayHumid3 = city.list[24].main.humidity;
    var icon3 = city.list[24].weather[0].icon;

    var date4 = new Date(city.list[32].dt*1000)
    var cityDate4=date4.toDateString();
    var dayTemp4 = city.list[32].main.temp;
    var dayWind4 = city.list[32].wind.speed;
    var dayHumid4 = city.list[32].main.humidity;
    var icon4 = city.list[32].weather[0].icon;
   
    var date5 = new Date(city.list[39].dt*1000)
    var cityDate5=date5.toDateString();
    var dayTemp5 = city.list[39].main.temp;
    var dayWind5 = city.list[39].wind.speed;
    var dayHumid5 = city.list[39].main.humidity;
    var icon5 = city.list[39].weather[0].icon;
   

        var forcastDiv = document.querySelector(".forcastday1");


        var htmlForcast = `
        
        <div class="day">
        <h10>${cityDate1}</h10>
        <img src="https://openweathermap.org/img/w/${icon1}.png"></img>
        <ul>
        <li>Temp: ${dayTemp1} F</li>
        <li>Wind: ${dayWind1}</li>
        <li>Humidity: ${dayHumid1}%</li>
        </ul>
        </div>
        

        <div class="day">
        <h10>${cityDate2}</h10>
        <img src="https://openweathermap.org/img/w/${icon2}.png"></img>
        <ul>
        <li>Temp: ${dayTemp2} F</li>
        <li>Wind: ${dayWind2}</li>
        <li>Humidity: ${dayHumid2}%</li>
        </ul>
        </div>

        <div class="day">
        <h10>${cityDate3}</h10>
        <img src="https://openweathermap.org/img/w/${icon3}.png"></img>
        <ul>
        <li>Temp: ${dayTemp3} F</li>
        <li>Wind: ${dayWind3}</li>
        <li>Humidity: ${dayHumid3}%</li>
        </ul>
        </div>

        <div class="day">
        <h10>${cityDate4}</h10>
        <img src="https://openweathermap.org/img/w/${icon4}.png"></img>
        <ul>
        <li>Temp: ${dayTemp4} F</li>
        <li>Wind: ${dayWind4}</li>
        <li>Humidity: ${dayHumid4}%</li>
        </ul>
        </div>

        <div class="day">
        <h10>${cityDate5}</h10>
        <img src="https://openweathermap.org/img/w/${icon5}.png"></img>
        <ul>
        <li>Temp: ${dayTemp5} F</li>
        <li>Wind: ${dayWind5}</li>
        <li>Humidity: ${dayHumid5}%</li>
        </ul>
        </div>
        `

        forcastDiv.insertAdjacentHTML('afterend', htmlForcast);
       

}

//////////////////-----------------------------------------------------------------------------------------------
//SUMITS CITY
var formSubmitHandler = function(event){
    event.preventDefault();
    // console.log(event);
    
    //input from user
    var cityInput = userCityInputEl.value.trim();

    if (cityInput) {
        getWeather(cityInput);
        getWeatherForcast(cityInput);
        userCityInputEl.value = "";
    }
    else{
        alert("Please enter a valid city");
    }

}

    

userFormEl.addEventListener("submit", formSubmitHandler);


