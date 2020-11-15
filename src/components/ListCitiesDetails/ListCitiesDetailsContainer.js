import { connect } from 'react-redux';
import ListCitiesDetails from './ListCitiesDetails';
import {
  getCityForecast,
  getCityName,
} from '../../redux/weatherSelectors/weatherSelectors';

const mapStateToProps = (state) => ({
  city: getCityName(state),
  dayForecast: getCityForecast(state),
});

export default connect(mapStateToProps, null)(ListCitiesDetails);
