
//query selectors

var userFormEl= document.querySelector("#user-form");
var userCityInputEl = document.querySelector("#username");
var cityEl = document.querySelector("#city-container");
var weatherListEl = document.querySelector("#weather-list");



//Go to documentation link, example of request, copy url, paste url in variable. onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}


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
   
    weatherListEl.textContent="";
    
    var cityNameEl = document.createElement("h2");
    var cityInfo = city.name;
    cityNameEl.textContent =cityInfo;
    cityEl.appendChild(cityNameEl);
 
   
  
 
        
        var ListEl = document.createElement("li");
        var ListEl2 = document.createElement("li");
        var ListEl3 = document.createElement("li");
        var weatherTemp = city.main.temp;
        var weatherWind = city.wind.speed;
        var weatherHumid= city.main.humidity;
        ListEl.textContent = ("Temp:" + weatherTemp)
        ListEl2.textContent = ("Wind Speed" + weatherWind + "MPH")
        ListEl3.textContent = ("Humidity" + weatherHumid);
        weatherListEl.appendChild(ListEl);
        weatherListEl.appendChild(ListEl2);
        weatherListEl.appendChild(ListEl3);
        
  


}

//-------------------------------------------------------------------------------------------------------------------------
//GETS GEO CODE
var geoCodeing = function(city){

    fetch("http://api.openweathermap.org/geo/1.0/direct?q="+city+"&limit=1&appid=f1b34903d7c2cdaa6a859360c95e902f")
    .then(function(response){
        return response.json()

    })

    .then(function(data){
        
        console.log("geocodeing", data)
        return data;
    })
}
geoCodeing("Texas")



var getWeatherForcast = function(city){
    
     //fetch("http://api.openweathermap.org/data/2.5/forecast?q="+city+"&exclude=current,hourly,minutely,alerts&units=imperial&appid=f1b34903d7c2cdaa6a859360c95e902f")
    fetch("http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&exclude=current,hourly,minutely,alerts&units=imperial&appid=f1b34903d7c2cdaa6a859360c95e902f")
    .then(function(response){
        return response.json()

    })

    .then(function(data){
    
        console.log("get weather" , data)
        return data
    })
}
getWeatherForcast("Texas")






var getForcast = function(city){

    //format the github api url
    var apiUrl = 
   "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=imperial&APPID=f1b34903d7c2cdaa6a859360c95e902f"

 //if request was successful
fetch(apiUrl)
.then(function(response){
    if(response.ok){
        response.json().then(function(data){
            displayCities(data, city);
            // console.log("request successfull",data);
            // console.log("this should look like an array", response)
//check if api has paginated issues

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


//////////////////-----------------------------------------------------------------------------------------------
//SUMITS CITY
var formSubmitHandler = function(event){
    event.preventDefault();
    // console.log(event);
    
    //input from user
    var cityInput = userCityInputEl.value.trim();

    if (cityInput) {
        getWeather(cityInput);
        userCityInputEl.value = "";
    }
    else{
        alert("Please enter a valid city");
    }

}

    

userFormEl.addEventListener("submit", formSubmitHandler);


