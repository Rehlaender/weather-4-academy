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
  goToDetailCity})=>(
    <div className="homeContainer">
        <div className="searchcity">
          <p>temperature for saved cities with redux n thunk</p>
          <label>city</label>
          <input id="city" onChange={(e) => {changeCityValue(e.target.value)}} value={searchingCity} />
          <label>country</label>
          <input id="country" onChange={(e) => {changeCountryValue(e.target.value)}} value={searchingCountry} />
          <button onClick={() => {fetchCityWithRedux(searchingCity, searchingCountry)}}> add city</button>
        </div>
        {savedCities.length > 0 ? <div className="citiesContainer">
            {savedCities.map((city,i)=>(
                <div className="city animated bounceIn"
                  key={i}>
                  <span className="detailButton" onClick={() => {goToCityDetailWithRedux(city); goToDetailCity(city.id)}}><em>+ detail</em></span>
                  <span className="deleteButton" onClick={() => {deleteCityWithRedux(city.id)}}>x</span>
                  <span>city: {city.name}</span>
                  <span>weather: {city.weather[0].main}</span>
                </div>
            ))}
        </div> :
        <div>
            You have no saved cities... start loading one
        </div>
        }
    </div>
);
