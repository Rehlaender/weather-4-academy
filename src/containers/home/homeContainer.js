import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  fetchPostsWithRedux,
  fetchCityWithRedux,
  changeCityValue,
  changeCountryValue,
  deleteCityWithRedux,
  goToCityDetailWithRedux,
  toggleTemperatureUnit
} from '../../actions/fetchWeatherAction';

import { homeDisplay } from './homeDisplay';

const mapStateToProps = state => ({
  posts: state.weather.posts,
  savedCities: state.weather.savedCities,
  searchingCity: state.weather.searchingCity,
  searchingCountry: state.weather.searchingCountry,
  temperatureUnit: state.weather.temperatureUnit,
  canPostAnotherCity: state.weather.canPostAnotherCity
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push('/about-us'),
      goToDetailCity: cityId => push(`/city-detail/${cityId}`),
      fetchPostsWithRedux,
      fetchCityWithRedux,
      changeCityValue,
      changeCountryValue,
      deleteCityWithRedux,
      goToCityDetailWithRedux,
      toggleTemperatureUnit
    },
    dispatch
  );

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(
  homeDisplay
);

export default HomeContainer;
