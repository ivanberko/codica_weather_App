export const TypeCurrent = {
  FEACH_WEATHER_START: 'FEACH_WEATHER_START',
  FEACH_WEATHER_SUCCESS: 'FEACH_WEATHER_SUCCESS',
  FEACH_WEATHER_ERROR: 'FEACH_WEATHER_ERROR',

  FEACH_UPDATE_START: 'FEACH_UPDATE_START',
  FEACH_UPDATE_SUCCESS: 'FEACH_UPDATE_SUCCESS',
  FEACH_UPDATE_ERROR: 'FEACH_UPDATE_ERROR',
};

export const feachWeatherStart = () => ({
  type: TypeCurrent.FEACH_WEATHER_START,
});

export const feachWeatherSuccsess = (data) => ({
  type: TypeCurrent.FEACH_WEATHER_SUCCESS,
  payload: { data },
});

export const feachWeatherError = (error) => ({
  type: TypeCurrent.FEACH_WEATHER_ERROR,
  payload: { error },
});

export const feachUpdateStart = () => ({
  type: TypeCurrent.FEACH_UPDATE_START,
});

export const feachUpdateSuccsess = (data) => ({
  type: TypeCurrent.FEACH_UPDATE_SUCCESS,
  payload: { data },
});

export const feachUpdateError = (error) => ({
  type: TypeCurrent.FEACH_UPDATE_ERROR,
  payload: { error },
});
