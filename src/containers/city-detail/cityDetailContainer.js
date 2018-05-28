import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logInfo } from '../../actions/logActions';

import { cityDetailDisplay } from './cityDetailDisplay';

const mapStateToProps = (state, ownParams) => ({
  cityId: ownParams.match.params.id,
  actualCity: state.weather.actualCity
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push('/about-us'),
      logInfo
    },
    dispatch
  );

export const CityDetailContainer = connect(mapStateToProps, mapDispatchToProps)(
  cityDetailDisplay
);

export default CityDetailContainer;
