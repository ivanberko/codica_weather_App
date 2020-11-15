export const TypeCity = {
  DELETE_CITY: 'DELETE_CITY',
  NOTIFY_ERROR: 'NOTIFY_ERROR',
  DND_CITIES: 'DND_CITIES',
};

export const deleteCity = (name) => ({
  type: TypeCity.DELETE_CITY,
  payload: name,
});

export const notifyError = () => ({
  type: TypeCity.NOTIFY_ERROR,
});

export const DnDCities = (cities) => ({
  type: TypeCity.DND_CITIES,
  payload: cities,
});
