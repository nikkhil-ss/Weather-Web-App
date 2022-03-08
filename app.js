var temp;
var cityname;
var city = 'delhi';
var http = require('http');
var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bf3788efe7cbb7534a259fa50ffecd29&units=metric`;


var server = http.createServer(function (request, response) {
    var request = require('request');
    request(url, function (err, res, body) {
        var data = JSON.parse(body);
        // console.log("city name="+ data['name']+"-->")
        // console.log("temp="+data.main['temp']);
        // response.write("working");
        response.write(`<html><body><div id= 'container'>`);
        response.write(`<h1>`+ "City Name   :" + data['name'] + `<br>`+ `<h1>`)
        response.write(`<h2 id="temp">`+'Temperature   :'+data.main['temp']+ `<br>`+`<h2>`);
        response.write(`<h2>`+"Sunset Time   :"+ new Date(data.sys['sunset']*1000)+`<h2>`);
        // cityname = data['name'];
        // temp = data.main['temp'];
        response.end();
        
        
    })
}).listen(8081);




