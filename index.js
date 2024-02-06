

let day1, apis, final_Apis, ArrayApi, hourNow, theDayNow, g, countryName,day3,  hours3,fac_src3, condition4,condition2,fac_src2,condition3 ,fac_src,hours2,day2, search,final_serch,theAfterDay;
search = document.getElementById('search');
async function getWeather(country) {
     apis = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=7a079b9a0f5d48cb96a134835240401&q=${country}&days=3`);
     final_Apis = await apis.json();
   // console.log(final_Apis.forecast)
    ArrayApi = final_Apis.forecast;
    countryName = final_Apis.location.name;
    day1=ArrayApi.forecastday[0]
    var hours = ArrayApi.forecastday[0].hour
    
    
    
     hourNow = new Date().getHours();
    
    for (let i = 0; i < hours.length; i++) {
        if (hourNow == i) {
            document.getElementById('temp-in-c').innerHTML = hours[i].temp_c + '\u00B0' + 'C';
            fac_src = hours[i].condition.icon;
            condition2=hours[i].condition.text;
       }
        
    }
    document.getElementById('img-icon').setAttribute('src',fac_src)
    document.getElementById('nameOfCountry').innerHTML = countryName;
    document.getElementById('nameOfCountry2').innerHTML = countryName;
    document.getElementById('nameOfCountry3').innerHTML = countryName;
    document.getElementById('condition').innerHTML = condition2;
    
    day2=ArrayApi.forecastday[1]
    var hours2 = ArrayApi.forecastday[1].hour
    
     for (let i = 0; i < hours2.length; i++) {
        if (hourNow == i) {    
            document.getElementById('temp-in-c2').innerHTML = hours2[i].temp_c + '\u00B0' + 'C';
            fac_src2 = hours2[i].condition.icon;
            condition3=hours2[i].condition.text;
       }
        
    }
    document.getElementById('img-icon2').setAttribute('src', fac_src2);
    document.getElementById('condition2').innerHTML = condition3;
    
     day3=ArrayApi.forecastday[2]
    hours3= ArrayApi.forecastday[2].hour
     for (let i = 0; i < hours3.length; i++) {
        if (hourNow == i) {    
            document.getElementById('temp-in-c3').innerHTML = hours3[i].temp_c + '\u00B0' + 'C';
            fac_src3 = hours3[i].condition.icon;
            condition4=hours3[i].condition.text;
       }
        
    }
     document.getElementById('img-icon3').setAttribute('src', fac_src3);
    document.getElementById('condition3').innerHTML = condition4;
}
 getWeather('cairo');
 $("#sercbtn").click(function () {
        final_serch = search.value;
       
        getWeather(final_serch);
    })
//countryName=
//'\u00B0'
var week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]


    const now = new Date();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 const dayOfWeek = daysOfWeek[now.getDay()];
const dayOfWeek2 = daysOfWeek[now.getDay()+1];
const dayOfWeek3 = daysOfWeek[now.getDay()+2];

var monthNames = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"];

var d = new Date();
let monthName= monthNames[d.getMonth()];


var numberDay = new Date().getDate();
var numberDay2 = new Date().getDate() + 1;
var numberDay3 = new Date().getDate()+2;
 document.getElementById('id1').innerHTML = dayOfWeek;
document.getElementById('id2').innerHTML = numberDay + ' ' + monthName;

 document.getElementById('id1_1').innerHTML = dayOfWeek2;
document.getElementById('id2_1').innerHTML = numberDay2 + ' ' + monthName;
 document.getElementById('id1_2').innerHTML =dayOfWeek3;
document.getElementById('id2_2').innerHTML = numberDay3 + ' ' + monthName;

