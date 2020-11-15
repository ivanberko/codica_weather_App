import { connect } from 'react-redux';
import { fetchCurrentWeather } from '../../redux/operations/weatherOperation';
import SearchForm from './SearchForm';

const mapDispatchToProps = {
  fetchCurrentWeather,
};

export default connect(null, mapDispatchToProps)(SearchForm);
