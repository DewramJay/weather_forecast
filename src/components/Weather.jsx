import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = '8a6b69994aa29f73adb1df38b6728912'; // Replace with your actual API key
  const lat = '9.6615';
  const lon = '80.0255';

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data);
         console.log(' weatherdata' );
         console.log(data);
      })
      .catch(error => console.error('Error fetching weather data:', error));
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }
   
//   const { main, weather } = weatherData;
  
//   const temperature = main.temp;
//   const weatherDescription = weather[0].description;

//console.log('weather'+ weatherData);


  return (
    <div>
      <h2>Weather in Colombo</h2>
      <p>Temperature:{weatherData.current.temp} Kelvin</p>
      <p>Weather:{weatherData.current.weather[0].main}</p>
      <p>{weatherData.current.weather[0].description}</p>
      <img src={" https://openweathermap.org/img/wn/"+weatherData.current.weather[0].icon +"@2x.png"} alt="" style={{ width: '254px', height: '276px' }} />
    </div>
  );
};

export default Weather;
