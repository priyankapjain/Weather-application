var urlIp = "https://weathersync101.herokuapp.com/ip";
var urlLocation = "https://weathersync101.herokuapp.com/weather/";
  var city='';
function loadDoc(url) {
  var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      url==='ip'?getResultForIpDetails(this.responseText):getDetailsForWeather(this.responseText);
    }
  };
   url==='ip'?xhttp.open("GET", this.urlIp, true):xhttp.open("GET", this.urlLocation, true);
  xhttp.send();
}

function getResultForIpDetails(xhttp) {
 console.log(xhttp);
 let data = JSON.parse(xhttp);
 this.city = data.city;
 getDetailsForWeather(data.location,'function1')
} 
function getDetailsForWeather(location,from) {
  if(from === 'function1'){
  this.urlLocation  = this.urlLocation +location.latitude +','+location.longitude;
  loadDoc('location');
  } else{
    let data = JSON.parse(location);
     document.getElementById('city').innerText =this.city;
    document.getElementById('temp').innerText = parseFloat(Number(((data.main.temp*9)/5) - 459.67).toFixed(2));
   document.getElementById('weatherSrcId').src= 'http://openweathermap.org/img/w/'+data.weather[0].icon+'.png';
   document.getElementById('weatherState').innerText = data.weather[0].main;
    document.getElementById('symbolShow').style.display ='inline';
  }
  
}
