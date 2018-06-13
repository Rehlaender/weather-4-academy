import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import {
//   fetchPostsWithRedux,
// } from '../../actions/fetchWeatherAction';

import {
  changeTextObjectValue,
  addTextBox
} from '../../actions/AnimationAction';

import { beesDisplay } from './beesDisplay';

const mapStateToProps = state => ({
  texts: state.animationReducer.texts,
  bees: state.animationReducer.bees
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push('/about-us')
    },
    dispatch
  );

export const BeesContainer = connect(mapStateToProps, mapDispatchToProps)(
  beesDisplay
);

export default BeesContainer;
