
let date=document.getElementById('date');
let x=new Date();
date.innerHTML=x.toDateString();
let time=x.getHours();
// let time=6;
let background=document.getElementById('body');

let backgroundImageLocation;

if(time>4 && time<12){
    backgroundImageLocation = "/images/mornin.jpg";

    
}
else if(time>=12 && time <16){
    backgroundImageLocation= "/images/afteernoon.jpg";
}
else{
    backgroundImageLocation= "/images/night.png";
}

background.style.backgroundImage= `url(.${backgroundImageLocation})`;

// background.style.backgroundSize="100%";


let weather_info = {
    temperature: "",
    cityname: "",
    country_code: "",
    atmosphere: "",

}

async function getData(city) {

    document.getElementById('loader').style.visibility='visible';
    let mydata;
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bf3788efe7cbb7534a259fa50ffecd29&units=metric`;
    await fetch(url).then(res => res.json()).then(data => { mydata = data });
    weather_info.temperature = mydata.main['temp'];
    weather_info.country_code=mydata.sys['country'];
    weather_info.atmosphere=mydata.weather[0].main ;
    weather_info.atmosphere += ' | ' + mydata.weather[0].description;
    console.log(weather_info.atmosphere)
    // weather_info.humidity=mydata
    weather_info.cityname = city;
    // console.log(weather_info.temp);
    // console.log(weather_info.cityname)
    
    let country=document.getElementById('country_code');
    country.innerText=weather_info.country_code;
    let city_name = document.getElementById('city1');
    city_name.innerText = city;

    let temp = document.getElementById('temp');
    console.log(mydata)
    temp.innerText = weather_info.temperature;
    temp.innerHTML +="&#176;"
    document.getElementById('loader').style.visibility='hidden';
    let atmos_status=document.getElementById('atmosphere');
    atmos_status.innerText = weather_info.atmosphere;

}
let input = document.getElementById('input');
let button = document.getElementById('button');
button.addEventListener('click', function (){
    if (input.value) {
        getData(input.value);
    }
  
})
    


// console.log(city);

