const inputBox = document.querySelector(".input-box");

const serachBtn=document.getElementById("searchBtn");

const weather_img= document.querySelector(".weather-img");

const temperature = document.querySelector(".temperature");

const discription = document.querySelector(".discription");

const humidity= document.getElementById("humidity");

const wind_speed  =document.getElementById("wind-speed");

const location_not_found=document.querySelector('.location-not-found');

const weather_body= document.querySelector(".weather-body");

  async function checkWeather(city){
    const api_key="7218f470e4444bf884f28e38a72bc36a";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data =  await fetch(`${url}`).then(response => response.json());

    // console.log(weather_data);   ////check api key working or not
    
    if(weather_data.cod===`404`){
        // console.log("error")
        location_not_found.style.display="flex";
        weather_body.style.display="none"
        return;
    }
    weather_body.style.display="flex";

    temperature.innerHTML= `${Math.round(weather_data.main.temp-273.15)}°C`; /// temp data is calvin change to  degree celsius(-275.15) and use math.round

    discription.innerHTML=`${weather_data.weather[0].description}`;

    humidity.innerHTML=`${weather_data.main.humidity}%`;

    wind_speed.innerHTML=`${weather_data.wind.speed}Km/H`;

    ////upload image base on condition
    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src="clouds.png";
            break;
        
        case 'Clear':
            weather_img.src="clear-sky.png";
            break;

                
        case 'Rain':
                weather_img.src="rain.png.png";
                break;


        case 'Mist':
                weather_img.src="misty.png.png";
                break;

        case 'Snow':
               weather_img.src="snowing-png-24382.png"; 
               break;

               
        // case '':
        //       weather_img.src="";

        // case 'Mist':
        //         weather_img.src="";

    }

 }

 serachBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
 });

// let url="7218f470e4444bf884f28e38a72bc36a";

// console.log(url);