import { connect } from 'react-redux';
import { fetchForecastWeather } from '../../redux/operations/weatherOperation';
import DetailsPage from './DetailsPage';

const mapDispatchToProps = {
  fetchForecastWeather,
};

export default connect(null, mapDispatchToProps)(DetailsPage);
