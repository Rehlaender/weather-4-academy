function fetchPostsRequest() {
  return {
    type: 'FETCH_REQUEST'
  };
}

function fetchPostsSuccess(payload) {
  const citiesInLocalStorage = localStorage.getItem('savedCities');
  if (citiesInLocalStorage === null) {
    const stringifiedPayload = JSON.stringify([payload]);
    localStorage.setItem('savedCities', stringifiedPayload);
  } else {
    const JSONcitiesInLocalStorage = JSON.parse(citiesInLocalStorage);
    const newCitiesToStorage = { ...JSONcitiesInLocalStorage, payload };
    const stringifiedNewCitiesToStorage = JSON.stringify(newCitiesToStorage);
    localStorage.setItem('savedCities', stringifiedNewCitiesToStorage);
  }
  return {
    type: 'FETCH_SUCCESS',
    payload
  };
}

function fetchPostsError() {
  return {
    type: 'FETCH_ERROR'
  };
}

function fetchCityError() {
  alert('cant find that city');
  return {
    type: 'FETCH_ERROR'
  };
}

function fetchPosts() {
  const URL = 'https://jsonplaceholder.typicode.com/posts';
  return fetch(URL, { method: 'GET' }).then(response =>
    Promise.all([response, response.json()])
  );
}

function changeCity(payload) {
  return {
    type: 'CHANGE_CITY_VALUE',
    payload
  };
}

export const changeCityValue = value => {
  return dispatch => {
    dispatch(changeCity(value));
  };
};

function changeCountry(payload) {
  return {
    type: 'CHANGE_COUNTRY_VALUE',
    payload
  };
}

export const changeCountryValue = value => {
  return dispatch => {
    dispatch(changeCountry(value));
  };
};

export const fetchPostsWithRedux = () => {
  return dispatch => {
    dispatch(fetchPostsRequest());
    return fetchPosts().then(([response, json]) => {
      if (response.status === 200) {
        dispatch(fetchPostsSuccess(json));
      } else {
        dispatch(fetchPostsError());
      }
    });
  };
};

function fetchCity(postValues) {
  const URL = `http://api.openweathermap.org/data/2.5/weather?q=${
    postValues.searchingCity
  },${postValues.searchingCountry}&APPID=ea07077cbdfd161a3a94b6572515407d`;
  return fetch(URL, { method: 'GET' }).then(response =>
    Promise.all([response, response.json()])
  );
}

function fetchCitySuccess(payload) {
  const citiesInLocalStorage = localStorage.getItem('savedCities');
  if (citiesInLocalStorage === null) {
    const stringifiedPayload = JSON.stringify([payload]);
    localStorage.setItem('savedCities', stringifiedPayload);
  } else {
    const JSONcitiesInLocalStorage = JSON.parse(citiesInLocalStorage);
    const newCitiesToStorage = [...JSONcitiesInLocalStorage, payload];
    const stringifiedNewCitiesToStorage = JSON.stringify(newCitiesToStorage);
    localStorage.setItem('savedCities', stringifiedNewCitiesToStorage);
  }
  return {
    type: 'FETCH_CITY_SUCCESS',
    payload
  };
}

export const fetchCityWithRedux = (searchingCity, searchingCountry) => {
  return dispatch => {
    dispatch(fetchPostsRequest());
    return fetchCity({
      searchingCity: searchingCity,
      searchingCountry: searchingCountry
    }).then(([response, json]) => {
      if (response.status === 200) {
        dispatch(fetchCitySuccess(json));
      } else {
        dispatch(fetchCityError());
      }
    });
  };
};

function deleteCity(payload) {
  const citiesInLocalStorage = localStorage.getItem('savedCities');
  const JSONcitiesInLocalStorage = JSON.parse(citiesInLocalStorage);
  const filteredCitiesToStorage = JSONcitiesInLocalStorage.filter(
    city => city.id !== payload
  );
  const stringifyFilteredCitiesToStorage = JSON.stringify(
    filteredCitiesToStorage
  );
  localStorage.setItem('savedCities', stringifyFilteredCitiesToStorage);
  return {
    type: 'DELETE_CITY',
    payload
  };
}

export const deleteCityWithRedux = cityId => {
  return dispatch => {
    dispatch(deleteCity(cityId));
  };
};

function goToDetailCity(payload) {
  return {
    type: 'DETAIL_CITY',
    payload
  };
}

export const goToCityDetailWithRedux = city => {
  return dispatch => {
    dispatch(goToDetailCity(city));
  };
};

function toggleUnit() {
  const tempUnit = localStorage.getItem('temperatureUnit');
  const newUnit = tempUnit === 'metric' ? 'imperial' : 'metric';
  localStorage.setItem('temperatureUnit', newUnit);
  return {
    type: 'TOGGLE_TEMPERATURE_UNIT'
  };
}

export const toggleTemperatureUnit = () => {
  return dispatch => {
    dispatch(toggleUnit());
  };
};
