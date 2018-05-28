import React from 'react'

export const homeDisplay = ({posts,
  searchingCity, searchingCountry,
  fetchPostsWithRedux,
  fetchCityWithRedux,
  changeCityValue,
  changeCountryValue,
  deleteCityWithRedux,
  savedCities})=>(
    <div>
        <div>
        {savedCities.length > 0 ? <div>
            {savedCities.map((city,i)=>(
                <p onClick={() => {deleteCityWithRedux(city.id)}} key={i}>city: {city.name}</p>
            ))}
        </div> :
        <div>
            Please wait...
        </div>
    }
          <label>city</label>
          <input id="city" onChange={(e) => {changeCityValue(e.target.value)}} value={searchingCity} />
          <label>city</label>
          <input id="country" onChange={(e) => {changeCountryValue(e.target.value)}} value={searchingCountry} />
          <button onClick={() => {fetchCityWithRedux(searchingCity, searchingCountry)}}> search 4 city stuff</button>
          <button onClick={fetchPostsWithRedux}> fetch stuff</button>
          <p>{searchingCity} asdf</p>
        </div>
    </div>
);
