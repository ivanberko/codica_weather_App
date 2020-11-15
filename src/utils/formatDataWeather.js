import moment from 'moment';

function createCurrentWeatherObject(res) {
  const {
    dt,
    main: { temp, temp_min: tempMin, temp_max: tempMax },
    name,
    weather: [{ icon }],
    sys: { sunrise, sunset },
    timezone,
  } = res;

  const newObj = {
    dt,
    currentTime: getLocalTime().format('HH:mm:ss'),
    month: getLocalTime().format('MMMM'),
    date: getLocalTime().format('DD'),
    dayOfWeek: getLocalTime().format('ddd'),
    temp: Math.floor(temp),
    tempMax: Math.floor(tempMax),
    tempMin: Math.floor(tempMin),
    icon: `http://openweathermap.org/img/wn/${icon}@2x.png`,
    name,
    sunrise,
    sunriseTime: {
      hours: moment(sunrise * 1000).format('HH'),
      mins: moment(sunrise * 1000).format('mm'),
    },
    sunset,
    sunsetTime: {
      hours: moment(sunset * 1000).format('HH'),
      mins: moment(sunset * 1000).format('mm'),
    },
    timezone,
  };

  function getLocalTime() {
    return moment.utc(new Date().getTime()).utcOffset(timezone / 60 / 60);
  }

  return newObj;
}

export default createCurrentWeatherObject;
