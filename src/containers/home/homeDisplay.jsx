import React from 'react'

export const homeDisplay = ({posts,
  searchingCity, searchingCountry,
  fetchPostsWithRedux,
  fetchCityWithRedux,
  changeCityValue,
  changeCountryValue,
  deleteCityWithRedux,
  savedCities})=>(
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
                  onClick={() => {deleteCityWithRedux(city.id)}} key={i}>
                  <span>city: {city.name}</span>
                  <span>weather: {city.weather[0].main}</span>
                  <span><em>{city.weather[0].description}</em></span><br/>
                  <span>temp: {city.weather[0].main}</span>

                </div>
            ))}
        </div> :
        <div>
            You have no saved cities... start loading one
        </div>
        }
    </div>
);
