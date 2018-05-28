import React from 'react'

export const cityDetailDisplay = ({actualCity, logInfo})=>(
    <div className="homeContainer">
        { actualCity.name ? (
          <div>
            <h1>name: {actualCity.name}</h1>
            <p>coord: {actualCity.coord.lon}, {actualCity.coord.lat}</p>
            <p>weather: {actualCity.weather[0].main}.<em>{actualCity.weather[0].description}</em></p>
            <ul>
              <li>temp: {actualCity.main.temp}</li>
              <li>pressure: {actualCity.main.pressure}</li>
              <li>humidity: {actualCity.main.humidity}</li>
            </ul>
          </div>
        ) : ''
        }
    </div>
);
