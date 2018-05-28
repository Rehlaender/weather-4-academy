import React from 'react'

export const homeDisplay = ({posts,
  searchingCity, searchingCountry,
  fetchPostsWithRedux,
  fetchCityWithRedux,
  changeCityValue,
  changeCountryValue,
  deleteCityWithRedux,
  goToCityDetailWithRedux,
  savedCities, changeToCityDetail,
  temperatureUnit,
  toggleTemperatureUnit,
  canPostAnotherCity,
  goToDetailCity})=>(
    <div className="homeContainer">
        <div className="searchcity">
          <label>city</label>
          <input id="city" onChange={(e) => {changeCityValue(e.target.value)}} value={searchingCity} />
          <label>country</label>
          <input id="country" onChange={(e) => {changeCountryValue(e.target.value)}} value={searchingCountry} />
          <button disabled={!canPostAnotherCity} onClick={() => {fetchCityWithRedux(searchingCity, searchingCountry)}}> add city</button>
          <br/>
          {
            savedCities.length > 0 ? <button onClick={() => {toggleTemperatureUnit()}}> let's better use {(temperatureUnit === 'metric' ? '°f': '°c')} as units</button> : ''
          }
        </div>
        {savedCities.length > 0 ? <div className="citiesContainer">
            {savedCities.map((city,i)=>(
                <div className="city animated bounceIn"
                  key={i}>
                  <span className="detailButton" onClick={() => {goToCityDetailWithRedux(city); goToDetailCity(city.id)}}><em>+ detail</em></span>
                  <span className="deleteButton" onClick={() => {deleteCityWithRedux(city.id)}}>x</span>
                  <span>city: {city.name}</span>
                  <span>weather: {city.weather[0].main}</span>
                  <li>temp: {
                    (temperatureUnit === 'metric') ? (
                      Math.floor(city.main.temp - 273.15)
                    ) : (Math.floor((city.main.temp-273.15)*1.8)+32)
                  }{(temperatureUnit === 'metric' ? '°f': '°c')}</li>
                </div>
            ))}
        </div> :
        <div style={{textAlign:'center'}}>
            You have no saved cities... start loading one
        </div>
        }
    </div>
);
