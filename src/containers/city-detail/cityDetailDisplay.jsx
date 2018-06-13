import React from 'react'
import { Link } from 'react-router-dom';
export const cityDetailDisplay = ({actualCity, logInfo})=>(
    <div className="homeContainer">
        { actualCity.name ? (
          <div>
            <Link to="/weather"><button><i style={{color: 'white'}} className="fa fa-angle-left"></i> <span style={{color: 'white'}}>back</span></button></Link>
            <h1>name: {actualCity.name}</h1>
            <p>coord: {actualCity.coord.lon}, {actualCity.coord.lat}</p>
            <p>weather: {actualCity.weather[0].main}.<em>{actualCity.weather[0].description}</em></p>
            <ul>
              <li>temp: {actualCity.main.temp} K</li>
              <li>pressure: {actualCity.main.pressure}</li>
              <li>humidity: {actualCity.main.humidity}</li>
            </ul>
          </div>
        ) : ''
        }
    </div>
);
