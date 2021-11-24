

const API1 = "https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=02406b4be4369ca9dae036bc9640837d";
let sky = document.querySelector(".sky")
let temperature = document.querySelector(".temperature");
let maxTemp = document.querySelector(".maxTemp");
let minTemp = document.querySelector(".minTemp");
let humidity = document.querySelector(".humidity")
let feelLike = document.querySelector(".feelLike")
let weatherDiv = document.querySelector(".weather-content");
let dayAdvice = document.querySelector(".dayAdvice");


getData = () => this.axios.get(API1)
                    





getData()
        .then(response => {console.log(response.data)

            var temp = Math.round(response.data.main.temp - 273)+"º";
            sky.innerHTML = response.data.weather[0].main
            temperature.innerHTML =temp
            humidity.innerHTML = response.data.main.humidity + "%";
            feelLike.innerHTML = Math.round(response.data.main.feels_like - 273);
            let main = response.data.weather[0].main;
            if(main == "Clouds") {weatherDiv.classList.add("clouds");}
            else if(main =="Clear") {
             weatherDiv.classList.add("clear");
            }
            else if(main == "Rain"){
                weatherDiv.classList.add("rain")
            }
        }
        
        
        )


let dayCounter = 0;



setInterval(()=>{
    if(dayCounter == 10){dayCounter = 0}
    else   { dayCounter++}
getDataAdvice(dayCounter);
}, 86400)



getDataAdvice = (dayCounter) => this.axios.get("https://api.adviceslip.com/advice/search/all").then((response) => {
dayAdvice.innerHTML = response.data.slips[dayCounter].advice;
console.log(response.data.slips[dayCounter].advice)});

getDataAdvice(0);
        