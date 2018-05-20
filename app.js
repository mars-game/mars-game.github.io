let API_KEY = '8cb8c2419ce85799dc8b4e78f0c1ce3b';
//spare key 8cb8c2419ce85799dc8b4e78f0c1ce3b

var A = 0;
var StartCountDown = 10;


    var x = setInterval(function() {
        

        if (A <= 0){
            A = StartCountDown ;
            getWeatherBirmingham(2655603);
            getWeatherPershore(2640360);
            getWeatherCityOfLondon(2643741);
            document.getElementById('output1').innerHTML = output1 + `<h6>Loading</h6>`;
            document.getElementById('output2').innerHTML = output2 + `<h6>Loading</h6>`;
            document.getElementById('output3').innerHTML = output3 + `<h6>Loading</h6>`;
            console.log("just updated");
        }else{
            A -- ;
            console.log("count down running " + A);
            document.getElementById('output1').innerHTML = output1 + `<h6>updating data in</h6>`  + A ;
            document.getElementById('output2').innerHTML = output2 + `<h6>updating data in</h6>` + A ;
            document.getElementById('output3').innerHTML = output3 + `<h6>updating data in</h6>` + A ;
        }

        }, 1000);    






function getWeatherBirmingham(identifier) {
  
  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather',
    type: 'GET',
    data: {

      id: identifier,
      units: 'metric',
      APPID: API_KEY
    },
    success: data => {
      var dp = `${data["main"]["temp"] }`;
      dp = Math.round(dp);
      dp = dp + '\xB0' +  "C";
       output1 = `
                        <div>
                            <br>
                            <h1>${dp}</h1>
                            <h3>${data["weather"]["0"]["description"]}</h3>                  
                        </div>
                    `;   
    }  ,
    error: function (err) {
        console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
    }
}).always(function(jqXHR, textStatus) {
    if (textStatus != "success") {
        console.log("jqXHR.statusText = " + jqXHR.statusText );
        alert("Error could not fetch data for Birmingham, UK");
    }
  })
  setTimeout(function(){
        //document.getElementById('output1').innerHTML = output1;
},1000);
  
}




function getWeatherPershore(identifier) {
  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather',
    data: {

      id: identifier,
      units: 'metric',
      APPID: API_KEY
    },
    success: data => {
      var dp = `${data["main"]["temp"] }`;
      dp = Math.round(dp);
      dp = dp + '\xB0' +  "C";
       output2 = `
                        <div>
                            <br>
                            <h1>${dp}</h1>
                            <h3>${data["weather"]["0"]["description"]}</h3>                        
                        </div>
                    `;   
    } ,
    error: function (err) {
        console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
    }
}).always(function(jqXHR, textStatus) {
    if (textStatus != "success") {
        console.log("jqXHR.statusText = " + jqXHR.statusText );
        alert("Error could not fetch data for Pershore, UK");
    }
  })
  setTimeout(function(){
},1000);
}




function getWeatherCityOfLondon(identifier) {
  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather',
    data: {

      id: identifier,
      units: 'metric',
      APPID: API_KEY
    },
    success: data => {
      var dp = `${data["main"]["temp"] }`;
      dp = Math.round(dp);
      dp = dp + '\xB0' + "C";
       output3 = `
                        <div>
                            <br>
                            <h1>${dp}</h1>
                            <h3>${data["weather"]["0"]["description"]}</h3>                        
                        </div>
                    `;   
    } ,
    error: function (err) {
        console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
    }
}).always(function(jqXHR, textStatus) {
    if (textStatus != "success") {
        console.log("jqXHR.statusText = " + jqXHR.statusText );
        alert("Error could not fetch data for London, UK");
    }
  })
  setTimeout(function(){
},1000);
}
