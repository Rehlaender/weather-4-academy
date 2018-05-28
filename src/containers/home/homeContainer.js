import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPostsWithRedux } from '../../actions/fetchWeatherAction';

import { homeDisplay } from './homeDisplay';

const mapStateToProps = state => ({
  posts: state.weather.posts
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push('/about-us'),
      fetchPostsWithRedux
    },
    dispatch
  );

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(
  homeDisplay
);

export default HomeContainer;
