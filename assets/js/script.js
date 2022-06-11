
//query selectors

var userFormEl= document.querySelector("#user-form");
var userCityInputEl = document.querySelector("#username");
var cityEl = document.querySelector("#city-container");
var weatherListEl = document.querySelector("#weather-list");



//Go to documentation link, example of request, copy url, paste url in variable. onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}



var getWeatherRepo = function(city){

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

// getWeatherRepo("London")


var formSubmitHandler = function(event){
    event.preventDefault();
    // console.log(event);
    
    //input from user
    var cityInput = userCityInputEl.value.trim();

    if (cityInput) {
        getWeatherRepo(cityInput);
        userCityInputEl.value = "";
    }
    else{
        alert("Please enter a valid city");
    }

}


var displayCities = function(city, searchTerm){
   
    weatherListEl.textContent="";
    
    // console.log("1",city);
    // console.log("2",searchTerm);
console.log("see if this works", city)
 
// City Name  weatherListEl
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


    

userFormEl.addEventListener("submit", formSubmitHandler);


