import React, { useState, useEffect } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { modifyMoreInfo } from '../../utils/formatDataForecast';

import {
  listItem,
  additional,
  additionalPressure,
  additionalHumidity,
  additionalWind,
  tempIcon,
} from './MoreInfo.module.css';

const MoreInfo = ({ listForecast, dt, setHistory }) => {
  const [details, setDetails] = useState([]);
  const { city } = useParams();

  useEffect(() => {
    if (!listForecast) {
      setHistory(city);
    } else {
      const filterByDay = listForecast.filter((el) => {
        return el[0].dt === dt;
      });
      setDetails(modifyMoreInfo(...filterByDay));
    }
  }, [city, dt, listForecast, setHistory]);

  return (
    !!details.length &&
    details.map(({ key, time, icon, temp, pressure, humidity, wind }) => (
      <div key={key} className={listItem}>
        <p>
          <b>{time}</b>
        </p>
        <img src={icon} alt="icon" width="50" />
        <p className={tempIcon}>{temp}&deg;</p>
        <div className={additional}>
          <p className={additionalPressure}>{pressure} mm</p>
          <p className={additionalHumidity}>{humidity}%</p>
          <p className={additionalWind}>{wind} m/s</p>
        </div>
      </div>
    ))
  );
};

MoreInfo.propTypes = {
  dt: PropTypes.number.isRequired,
  listForecast: PropTypes.arrayOf(PropTypes.array.isRequired),
};

export default withRouter(MoreInfo);
