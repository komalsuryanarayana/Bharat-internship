function convertTemperature() {
    var temperatureInput = document.getElementById("temperature");
    var scaleSelect = document.getElementById("scale");
    var convertedInput = document.getElementById("converted");
    var weatherCondition = document.getElementById("weather-condition");
  
    var temperature = parseFloat(temperatureInput.value);
    var scale = scaleSelect.value;
    var convertedTemperature;
  
    if (scale === "celsius") {
      convertedTemperature = convertToCelsius(temperature);
    } else if (scale === "fahrenheit") {
      convertedTemperature = convertToFahrenheit(temperature);
    } else if (scale === "kelvin") {
      convertedTemperature = convertToKelvin(temperature);
    }
  
    convertedInput.value = convertedTemperature.toFixed(2);
    displayWeatherCondition(convertedTemperature);
  }
  
  function convertToCelsius(temperature) {
    return temperature;
  }
  
  function convertToFahrenheit(temperature) {
    return (temperature * 9/5) + 32;
  }
  
  function convertToKelvin(temperature) {
    return temperature + 273.15;
  }
  
  function displayWeatherCondition(temperature) {
    var condition = "";
  
    if (temperature < 0) {
      condition = "Freezing";
    } else if (temperature >= 0 && temperature < 10) {
      condition = "Very Cold";
    } else if (temperature >= 10 && temperature < 20) {
      condition = "Cold";
    } else if (temperature >= 20 && temperature < 30) {
      condition = "Moderate";
    } else if (temperature >= 30 && temperature < 40) {
      condition = "Hot";
    } else if (temperature >= 40) {
      condition = "Very Hot";
    }
  
    var weatherCondition = document.getElementById("weather-condition");
    weatherCondition.textContent = "Weather Condition: " + condition;
  }