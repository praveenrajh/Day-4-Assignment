//Day 4 Assignment 3

var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=()=>{
    var data=JSON.parse(request.response);
     for (let i=0;i<data.length;i++)
    console.log(`Name: ${data[i].name}, region: ${data[i].region}, subregion: ${data[i].subregion}, population: ${data[i].population}`);
      
}