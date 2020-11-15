export const TypeForecast = {
  FEACH_FORECAST_START: 'FEACH_FORECAST_START',
  FEACH_FORECAST_SUCCESS: 'FEACH_FORECAST_SUCCESS',
  FEACH_FORECAST_ERROR: 'FEACH_FORECAST_ERROR',
};

export const feachForecastStart = () => ({
  type: TypeForecast.FEACH_FORECAST_START,
});

export const feachForecastSuccsess = (data) => ({
  type: TypeForecast.FEACH_FORECAST_SUCCESS,
  payload: { data },
});

export const feachForecastError = (error) => ({
  type: TypeForecast.FEACH_FORECAST_ERROR,
  payload: { error },
});
