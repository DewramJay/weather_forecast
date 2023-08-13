import React , { useState, useEffect } from 'react'

import { AppBar, Box, Button, Card, CardActions,TextField, CardContent, CardMedia, CssBaseline, Stack, Toolbar, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import Weather from '../components/Weather';
import { LoginNavBar } from '../components/LoginNavBar';
import { BottomBar } from '../components/BottomBar';

const HomePage = () => {

const [lon, setLon] = useState('6.9271');
const [lat, setLat] = useState('79.8612');


const [weatherData, setWeatherData] = useState(null);
const API_KEY = '495171e050e135169981183bcd2eb8f9';

const [showMore, setShowMore] = useState(false);

const handleMoreClick = () => {
  setShowMore(true);
};

const handleLessClick = () => {
  setShowMore(false);
};


useEffect(() => {
    getData();
  }, []);

function getData(){
  fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      setWeatherData(data);
       console.log(' weatherdata' );
       console.log(data);
    })
    .catch(error => console.error('Error fetching weather data:', error));
}


if (!weatherData) {
  return <div>Loading...</div>;
}


  return (
    <div
    style={{
        display: 'flex',
        flexDirection: 'column', 

    }}>
    <LoginNavBar/>
        <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100000', 
            margin: '50px 0', 
          }}>
        <TextField 
            type="Longitudonal"
            label="Longitudonal"
            name="Longitudonal"
            sx={{  backgroundColor:"#C5ECF1", margin:'0 50px'}}
            value={lon}
            onChange={(e)=>{
             setLon(e.target.value);  
            }}
            required
            />
        <TextField
            type="Lattitudanal"
            label="Lattitudanal"
            name="Lattitudanal"
            sx={{  backgroundColor:"#C5ECF1", margin:'0 50px'}}
            value={lat}
            onChange={(e)=>{
             setLat(e.target.value);  
            }}
            required
        />
        <Button type="submit" variant='contained' onClick={getData} sx={{ width: '50px', backgroundColor: "#46B7C7" }}>
            Find
        </Button>
        </div>
    
    
        <div style={{display:'flex', flexDirection:'row', justifyContent:"center", alignItems:"center", margin:'0 auto' }} spacing={3}>
            <div item xs={12} md={6} style={{display: 'flex', justifyContent:"center", alignItems:"center",margin:'20px auto'}} spacing={3}>
              <Card sx={{ width: 'auto', backgroundColor: '#C5ECF1',justifyContent:"center", alignItems:"center", border:'1px solid #ccc' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Today</Typography>
                <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  
                  <img
                    src={`https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}
                    alt=""
                    style={{ width: '150px', height: '172px' }}
                  />
                  <Box sx={{ marginLeft: 2 }}>
                    
                    <Typography variant="h5">{weatherData.current.weather[0].main}</Typography>
                    <Typography variant="subtitle1">{weatherData.current.weather[0].description}</Typography>
                    <Typography variant="subtitle2">Temp: {weatherData.current.temp} K</Typography>
                  </Box>
                </CardContent>
                </CardContent>
              </Card>
            </div>
        

       
          {[1, 2, 3].map((index) => (
            <div item xs={12} md={4} key={index} style={{display:'flex', margin:'20px auto' }} spacing={3}>
              <Card sx={{ display:'flex', width: 'auto',height:'auto', backgroundColor: 'rgba(114, 143, 206, 0.5)', margin:'20px auto', border:'1px solid #ccc'}}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Day {index}
                  </Typography>
                  <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                    <img
                      src={`https://openweathermap.org/img/wn/${weatherData.daily[index].weather[0].icon}@2x.png`}
                      alt=""
                      style={{ width: '100px', height: '128px' }}
                    />
                    <CardContent>
                      <Typography variant="h6">{weatherData.daily[index].weather[0].main}</Typography>
                      <Typography variant="subtitle1">{weatherData.daily[index].weather[0].description}</Typography>
                      <Typography variant="subtitle2">Temp: {weatherData.daily[index].temp.day} K</Typography>
                    </CardContent>
                  </CardContent>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {showMore && (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }} spacing={3}>
          {[4, 5, 6, 7].map((index) => (
            <div item xs={12} md={4} key={index} style={{display:'flex', margin:'20px auto' }} spacing={3}>
              <Card sx={{ width: 'auto',height:'auto', backgroundColor: 'rgba(114, 143, 206, 0.5)', margin:'0 auto', border:'1px solid #ccc' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Day {index}
                  </Typography>
                  <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                    <img
                      src={`https://openweathermap.org/img/wn/${weatherData.daily[index].weather[0].icon}@2x.png`}
                      alt=""
                      style={{  width: '100px', height: '128px' }}
                    />
                    <CardContent>
                      <Typography variant="h6">{weatherData.daily[index].weather[0].main}</Typography>
                      <Typography variant="subtitle1">{weatherData.daily[index].weather[0].description}</Typography>
                      <Typography variant="subtitle2">Temp: {weatherData.daily[index].temp.day} K</Typography>
                    </CardContent>
                  </CardContent>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      )}

      {!showMore && (
        <div container justifyContent="center" alignItems="center">
          <div item xs={12} md={6} style={{ display:'flex', margin: '50px auto', justifyContent:'center', alignContent:'center' }}>          
              <Button type="submit" variant="contained" onClick={handleMoreClick} sx={{ width: 'auto', backgroundColor: "#46B7C7", justifyContent:'center', alignContent:'center'  }}>
                More
              </Button>
          </div>
        </div>
      )}

  {showMore && (
        <div container justifyContent="center" alignItems="center">
          <div item xs={12} md={6} style={{ display:'flex', margin: '50px auto', justifyContent:'center', alignContent:'center' }}>          
              <Button type="submit" variant="contained" onClick={handleLessClick} sx={{ width: 'auto', backgroundColor: "#46B7C7", justifyContent:'center', alignContent:'center'  }}>
                Less
              </Button>
          </div>
        </div>
      )}

      <BottomBar/>
    
    </div>
  )
}

export default HomePage