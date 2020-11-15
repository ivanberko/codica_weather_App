import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';

import {
  listItem,
  titleItem,
  tempItem,
  boxTemp,
  listCities,
  btnGoBack,
  titleDetailsPage,
  listItemActive,
} from './ListCitiesDetails.module.css';

import { modifyResponse } from '../../utils/formatDataForecast';
import forecastSlice from '../../utils/helpers';

const ListCitiesDetails = ({ dayForecast, city, handleGoBack }) => {
  const forecast = modifyResponse(dayForecast);

  return (
    <>
      <h1 className={titleDetailsPage}> Forecast Weather</h1>
      <h2 className={titleItem}>{city}</h2>
      <button type="button" className={btnGoBack} onClick={handleGoBack}>
        Go back
      </button>
      <ul className={listCities}>
        {forecastSlice(forecast).map(
          ({ dt, dayOfWeek, date, month, icon, tempMin, tempMax }) => (
            <NavLink
              to={`/details/${city}/${dt}`}
              key={dt}
              className={listItem}
              activeClassName={listItemActive}
            >
              <li>
                <h4>{dayOfWeek}</h4>
                <p>
                  {date} {month}
                </p>
                <img src={icon} alt="icon" />
                <div className={boxTemp}>
                  <div>
                    <p>min</p>
                    <span className={tempItem}>{tempMin}&deg;</span>
                  </div>

                  <div>
                    <p>max</p>
                    <span className={tempItem}>{tempMax}&deg;</span>
                  </div>
                </div>
              </li>
            </NavLink>
          ),
        )}
      </ul>
    </>
  );
};

ListCitiesDetails.defaultProps = {
  dayForecast: [],
  city: '',
};

ListCitiesDetails.propTypes = {
  dayForecast: PropTypes.arrayOf(PropTypes.array),
  city: PropTypes.string,
  handleGoBack: PropTypes.func.isRequired,
};

export default withRouter(ListCitiesDetails);
