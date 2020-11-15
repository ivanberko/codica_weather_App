import { combineReducers } from 'redux';
import { TypeCurrent } from '../actions/actionCurrentWeather';
import { TypeForecast } from '../actions/actionForecastWeather';
import { TypeCity } from '../actions/actionItemCity';

const cityWeather = (state = [], { type, payload }) => {
  switch (type) {
    case TypeCurrent.FEACH_WEATHER_SUCCESS: {
      const findSameElem = state.some((el) => el.name === payload.data.name);
      if (!findSameElem) {
        return [payload.data, ...state];
      }
      return state;
    }

    case TypeCity.DELETE_CITY:
      return state.filter((city) => city.name !== payload);

    case TypeCity.DND_CITIES:
      return payload;

    case TypeCurrent.FEACH_UPDATE_SUCCESS:
      return state.map((el) =>
        el.name === payload.data.name ? payload.data : el,
      );

    default:
      return state;
  }
};

const cityWeatherForecast = (state = {}, { type, payload }) => {
  switch (type) {
    case TypeForecast.FEACH_FORECAST_SUCCESS:
      return { ...payload.data };

    default:
      return state;
  }
};

const notifyErrorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case TypeCurrent.FEACH_UPDATE_START:
    case TypeCurrent.FEACH_WEATHER_START:
    case TypeForecast.FEACH_FORECAST_SUCCESS:
    case TypeCity.NOTIFY_ERROR:
      return null;

    case TypeCurrent.FEACH_UPDATE_ERROR:
    case TypeCurrent.FEACH_WEATHER_ERROR:
      return payload.error.message;

    default:
      return state;
  }
};

export default combineReducers({
  listCitiesWeather: cityWeather,
  cityForecast: cityWeatherForecast,
  notifyError: notifyErrorReducer,
});
