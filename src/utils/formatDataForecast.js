import moment from 'moment';

const getDayNumber = (element) => {
  const ms = element * 1000;

  return new Date(ms).getUTCDate();
};

export const forecast = (response) => {
  const { list } = response;

  const allDates = list.map((el) => getDayNumber(el.dt));

  const uniqueDates = allDates.filter((el, i) => allDates.indexOf(el) === i);

  const myList = uniqueDates.map((date) =>
    list.filter((el) => getDayNumber(el.dt) === date),
  );

  return { ...response, list: myList };
};

export const modifyResponse = (list) => {
  return list.map((day) => {
    const dayForecast = {
      dt: day[0].dt,
      dayOfWeek: '',
      date: '',
      month: '',
      tempMin: [],
      tempMax: [],
      icon: '',
    };

    day.forEach((el) => {
      const forecastDate = moment(el.dt_txt);
      const date = forecastDate.date();
      const dayOfWeek = forecastDate.format('dddd');
      const month = forecastDate.format('MMM');

      dayForecast.dayOfWeek = dayOfWeek;
      dayForecast.date = date;
      dayForecast.month = month;

      dayForecast.tempMin.push(el.main.temp_min);
      dayForecast.tempMax.push(el.main.temp_max);

      if (
        el.dt_txt.endsWith('15:00:00') ||
        el.dt_txt.endsWith('12:00:00') ||
        el.dt_txt.endsWith('09:00:00') ||
        el.dt_txt.endsWith('06:00:00') ||
        el.dt_txt.endsWith('03:00:00') ||
        el.dt_txt.endsWith('00:00:00')
      ) {
        dayForecast.icon = `http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`;
      }
    });

    dayForecast.tempMin = Math.round(Math.min(...dayForecast.tempMin));
    dayForecast.tempMax = Math.round(Math.max(...dayForecast.tempMax));

    return dayForecast;
  });
};

export const modifyMoreInfo = (arr) => {
  return arr.map((el) => {
    return {
      key: el.dt,
      time: moment(el.dt * 1000).format('LT'),
      temp: Math.round(el.main?.temp),
      pressure: el.main.pressure,
      humidity: el.main.humidity,
      wind: Math.round(el.wind.speed),
      icon: `http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`,
    };
  });
};
