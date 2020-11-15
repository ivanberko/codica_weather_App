const forecastSlice = (listForecast) => {
  return listForecast.length <= 5 ? listForecast : listForecast.slice(1);
};

export default forecastSlice;
