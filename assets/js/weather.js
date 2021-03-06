var parkCode = localStorage.getItem("park");
var parkURL = "https://developer.nps.gov/api/v1/parks?parkCode=" + parkCode + "&api_key=AFoUZdt3nEoCawGmRJB9OY3AojoJTqxFYJyzbAXk";
var long;
var lat;
$.ajax({
  url: parkURL,
  method: "GET"
}).then(function (response) {
  console.log(response.data[0]);
  long = response.data[0].longitude;
  lat = response.data[0].latitude;
  parkName = response.data[0].fullName;
  $(".parkName").text(parkName);
  currentWeather(lat, long);
  futureWeather(lat, long);
});

// current weather forecast
function currentWeather(lat, long) {
  var apiKey = "2260dff7a76d693fefd23eeb30c6e079";
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=" + apiKey;
  console.log(lat);
  console.log(long);
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log("I MADE IT:", response);
    var temp = (response.main.temp);
    var farenHeit = parseInt((temp - 273.15) * 1.80 + 32);
    $("#temp").text("Temperature : " + farenHeit);
    var humidity = response.main.humidity;
    $("#humidity").text("Humidity : " + humidity);
    var iconData = response.weather[0].icon;
    var img = $('<img />', {
      id: 'weatherImg',
      src: 'https://openweathermap.org/img/wn/' + iconData + '@2x.png',
      alt: 'an image showing the weather'
    });
    img.appendTo($('#weatherImg'));
  });
}

//   the five day forecast
function futureWeather(lat, long) {
  var apiKey = "2260dff7a76d693fefd23eeb30c6e079";
  var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + long + "&appid=" + apiKey;
  $.ajax({
    url: queryURL2,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    // first day forecast
    var temp1 = (response.list[7].main.temp);
    var humidity1 = response.list[7].main.humidity
    var farenHeit1 = parseInt((temp1 - 273.15) * 1.80 + 32);
    $("#temp-one").text("Temperature : " + farenHeit1);
    $("#hum-one").text("Humidity : " + humidity1);
    var iconData1 = response.list[7].weather[0].icon;
    var img1 = $('<img />', {
      id: 'weatherImg',
      src: 'https://openweathermap.org/img/wn/' + iconData1 + '@2x.png',
      alt: 'an image showing the weather'
    });
    img1.appendTo($('#weatherImg1'));
    var grossDate1 = response.list[7].dt_txt;
    var date1 = grossDate1.slice(0, 10);
    $(".card-one-header").text("Date: " + date1);
    // second day forecast
    var temp2 = (response.list[15].main.temp);
    var humidity2 = response.list[15].main.humidity
    var farenHeit2 = parseInt((temp2 - 273.15) * 1.80 + 32);
    $("#temp-two").text("Temperature : " + farenHeit2);
    $("#hum-two").text("Humidity : " + humidity2);
    var iconData2 = response.list[15].weather[0].icon;
    var img2 = $('<img />', {
      id: 'weatherImg',
      src: 'https://openweathermap.org/img/wn/' + iconData2 + '@2x.png',
      alt: 'an image showing the weather'
    });
    img2.appendTo($('#weatherImg2'));
    var grossDate2 = response.list[15].dt_txt;
    var date2 = grossDate2.slice(0, 10);
    $(".card-two-header").text("Date: " + date2);
    // third day forecast
    var temp3 = (response.list[23].main.temp);
    var humidity3 = response.list[23].main.humidity
    var farenHeit3 = parseInt((temp3 - 273.15) * 1.80 + 32);
    $("#temp-three").text("Temperature : " + farenHeit3);
    $("#hum-three").text("Humidity : " + humidity3);
    var iconData3 = response.list[23].weather[0].icon;
    var img3 = $('<img />', {
      id: 'weatherImg',
      src: 'https://openweathermap.org/img/wn/' + iconData3 + '@2x.png',
      alt: 'an image showing the weather'
    });
    img3.appendTo($('#weatherImg3'));
    var grossDate3 = response.list[23].dt_txt;
    var date3 = grossDate3.slice(0, 10);
    $(".card-three-header").text("Date: " + date3);
    // fourth day forecast
    var temp4 = (response.list[31].main.temp);
    var humidity4 = response.list[31].main.humidity
    var farenHeit4 = parseInt((temp4 - 273.15) * 1.80 + 32);
    $("#temp-four").text("Temperature : " + farenHeit4);
    $("#hum-four").text("Humidity : " + humidity4);
    var iconData4 = response.list[31].weather[0].icon;
    var img4 = $('<img />', {
      id: 'weatherImg',
      src: 'https://openweathermap.org/img/wn/' + iconData4 + '@2x.png',
      alt: 'an image showing the weather'
    });
    img4.appendTo($('#weatherImg4'));
    var grossDate4 = response.list[31].dt_txt;
    var date4 = grossDate4.slice(0, 10);
    $(".card-four-header").text("Date: " + date4);
    // fifth day forecast
    var temp5 = (response.list[39].main.temp);
    var humidity5 = response.list[39].main.humidity
    var farenHeit5 = parseInt((temp5 - 273.15) * 1.80 + 32);
    $("#temp-five").text("Temperature : " + farenHeit5);
    $("#hum-five").text("Humidity : " + humidity5);
    var iconData5 = response.list[39].weather[0].icon;
    var img5 = $('<img />', {
      id: 'weatherImg',
      src: 'https://openweathermap.org/img/wn/' + iconData5 + '@2x.png',
      alt: 'an image showing the weather'
    });
    img5.appendTo($('#weatherImg5'));
    var grossDate5 = response.list[39].dt_txt;
    var date5 = grossDate5.slice(0, 10);
    $(".card-five-header").text("Date: " + date5);
  });
}

// button to go back to main page
var parkPage = $("#park-page");
parkPage.click(function (e) {
  location.href = "index.html";
});