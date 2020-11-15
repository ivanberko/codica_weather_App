import axios from 'axios';
import createCurrentWeatherObject from '../../utils/formatDataWeather';
import { forecast } from '../../utils/formatDataForecast';

import {
  feachWeatherStart,
  feachWeatherSuccsess,
  feachWeatherError,
  feachUpdateStart,
  feachUpdateSuccsess,
  feachUpdateError,
} from '../actions/actionCurrentWeather';

import {
  feachForecastStart,
  feachForecastSuccsess,
  feachForecastError,
} from '../actions/actionForecastWeather';

const BASE_URL = 'https://api.openweathermap.org';
const API_KEY = '87cf27700817ed4e92adafa080b190b6';

export const fetchCurrentWeather = (queryWeather) => (dispatch) => {
  dispatch(feachWeatherStart());

  const queryString = `${BASE_URL}/data/2.5/weather?q=${queryWeather}&appid=${API_KEY}&units=metric`;
  axios
    .get(queryString)
    .then(({ data }) =>
      dispatch(feachWeatherSuccsess(createCurrentWeatherObject(data))),
    )
    .catch((error) => dispatch(feachWeatherError(error)));
};

export const fetchUpdateWeather = (cityName) => (dispatch) => {
  dispatch(feachUpdateStart());

  const queryString = `${BASE_URL}/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
  axios
    .get(queryString)
    .then(({ data }) =>
      dispatch(feachUpdateSuccsess(createCurrentWeatherObject(data))),
    )
    .catch((error) => dispatch(feachUpdateError(error)));
};

export const fetchForecastWeather = (city) => (dispatch) => {
  dispatch(feachForecastStart);
  const queryString = `${BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
  axios
    .get(queryString)
    .then(({ data }) => dispatch(feachForecastSuccsess(forecast(data))))
    .catch((error) => dispatch(feachForecastError(error)));
};
