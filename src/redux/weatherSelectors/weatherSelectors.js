export const getAllCitiesWeather = (state) =>
  state.dataWeather.listCitiesWeather;

export const getCityForecast = (state) => state.dataWeather.cityForecast.list;

export const getCityName = (state) => state.dataWeather.cityForecast.city?.name;

export const getNotifyError = (state) => state.dataWeather.notifyError;
