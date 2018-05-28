import axios from 'axios';

const apiId = 'ea07077cbdfd161a3a94b6572515407d';
const apiRoot = 'http://api.openweathermap.org/data/2.5/weather?';

const Api = {
  getCurrentWeatherWithCityId(cityId) {
    // return axios.get(`${apiRoot}id=${cityId}&${apiId}`);
    console.log(`${apiRoot}id=${cityId}&${apiId}`);
  },
  sayHi(message) {
    console.log(message, 'aiuda redux');
  }
};

export default Api;
