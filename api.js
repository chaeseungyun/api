
let button = document.getElementsByClassName('btn');
let lat = [36.814, 35.1795543, 37.413294];
let lon = [127.15, 129.0756416, 127.0016985];
const temp = document.getElementById('temp');
const rising = document.getElementById('rising');
const weather = document.getElementById('weather');
const falling = document.getElementById('falling');
const img = document.getElementById('img');

for(let i=0;i<button.length;i++){
    button[i].onclick = function() {find(lat[i],lon[i]);}
}
function find(lat, lon) {axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0be87df02cd14b1d08489cd0372b5b0e&lang=kr`)
.then((response)=>weatherinfo(response))
.catch((e)=>console.log(e))}
function addicon(icon){img.src = `http://openweathermap.org/img/wn/${icon}@2x.png`} 
function weatherinfo(res) {
    temp.innerHTML=res.data.main.temp-273.15;
    weather.innerHTML=res.data.weather[0].description;
    let risetime = res.data.sys.sunrise;
    let settime = res.data.sys.sunset;
    const sunrise = new Date(risetime*1000);
    const sunset = new Date(settime*1000);
    rising.innerHTML=sunrise;
    falling.innerHTML=sunset;
    console.log(res.data.weather[0].description);
    addicon(res.data.weather[0].icon);   
}
