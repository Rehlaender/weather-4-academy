const savedCities = loadLocalStorage();
const savedTemperatureUnit = loadLocalStorageTemperatureUnit();
const initialState = {
  actualCity: {},
  canPostAnotherCity: true,
  savedCities: [...savedCities],
  searchingCity: '',
  searchingCountry: '',
  posts: [
    {
      title: ''
    }
  ],
  temperatureUnit: savedTemperatureUnit
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, canPostAnotherCity: false };
    case 'FETCH_ERROR':
      return { ...state, canPostAnotherCity: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        posts: action.payload,
        searchingCity: '',
        searchingCountry: ''
      };
    case 'CHANGE_CITY_VALUE':
      return {
        ...state,
        searchingCity: action.payload
      };
    case 'CHANGE_COUNTRY_VALUE':
      return {
        ...state,
        searchingCountry: action.payload
      };
    case 'FETCH_CITY_SUCCESS':
      return {
        ...state,
        searchingCity: '',
        searchingCountry: '',
        canPostAnotherCity: true,
        savedCities: [...state.savedCities, action.payload]
      };
    case 'DELETE_CITY':
      const newCities = filterAndDeleteCityById(
        action.payload,
        state.savedCities
      );
      return {
        ...state,
        savedCities: [...newCities]
      };
    case 'DETAIL_CITY':
      return {
        ...state,
        actualCity: { ...action.payload }
      };
    case 'TOGGLE_TEMPERATURE_UNIT':
      const newTemperatureUnit =
        state.temperatureUnit === 'metric' ? 'imperial' : 'metric';
      return {
        ...state,
        temperatureUnit: newTemperatureUnit
      };
    default:
      return state;
  }
};

function filterAndDeleteCityById(cityId, citiesArray) {
  return citiesArray.filter(city => city.id !== cityId);
}

function loadLocalStorage() {
  const savedCities = localStorage.getItem('savedCities');
  return savedCities === null ? {} : JSON.parse(savedCities);
}

function loadLocalStorageTemperatureUnit() {
  const savedTemperatureUnit = localStorage.getItem('temperatureUnit');
  if (savedTemperatureUnit === null) {
    localStorage.setItem('temperatureUnit', 'metric');
    return 'metric';
  } else {
    return savedTemperatureUnit;
  }
}
