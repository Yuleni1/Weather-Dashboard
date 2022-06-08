

//Go to documentation link, example of request, copy url, paste url in variable. onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f1b34903d7c2cdaa6a859360c95e902f"


fetch(apiUrl)
.then(function(response){
    return response.json();
})

.then(function(data){
    console.log(data)
})