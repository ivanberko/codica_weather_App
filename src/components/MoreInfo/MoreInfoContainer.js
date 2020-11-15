import { connect } from 'react-redux';
import MoreInfo from './MoreInfo';
import { getCityForecast } from '../../redux/weatherSelectors/weatherSelectors';

const mapStateToProps = (state) => ({
  listForecast: getCityForecast(state),
});

export default connect(mapStateToProps, null)(MoreInfo);
