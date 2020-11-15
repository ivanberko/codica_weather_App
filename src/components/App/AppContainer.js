import { connect } from 'react-redux';
import { fetchCurrentWeather } from '../../redux/operations/weatherOperation';
import App from './App';

const mapDispatchToProps = {
  fetchCurrentWeather,
};

export default connect(null, mapDispatchToProps)(App);
