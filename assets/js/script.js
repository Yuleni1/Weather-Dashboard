
//query selectors

var userFormEl= document.querySelector("#user-form");
var userCityInputEl = document.querySelector("#username")


//Go to documentation link, example of request, copy url, paste url in variable. onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}



var getWeatherRepo = function(city){

    //format the github api url
    var apiUrl = 
   "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&APPID=f1b34903d7c2cdaa6a859360c95e902f"

 //if request was successful
fetch(apiUrl)
.then(function(response){
    if(response.ok){
        response.json().then(function(data){
            displayCities(data, city);
            console.log("request successfull",data);
            console.log("this should look like an array", response)
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
    console.log(event);

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

    console.log("1",city);
    console.log("2",searchTerm);

}

userFormEl.addEventListener("submit", formSubmitHandler);


