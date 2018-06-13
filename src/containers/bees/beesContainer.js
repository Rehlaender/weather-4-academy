import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import {
//   fetchPostsWithRedux,
// } from '../../actions/fetchWeatherAction';

import { beesDisplay } from './beesDisplay';

const mapStateToProps = state => ({
  // canPostAnotherCity: state.weather.canPostAnotherCity
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push('/about-us')
      // fetchPostsWithRedux
    },
    dispatch
  );

export const BeesContainer = connect(mapStateToProps, mapDispatchToProps)(
  beesDisplay
);

export default BeesContainer;
