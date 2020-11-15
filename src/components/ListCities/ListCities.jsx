import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import update from 'immutability-helper';

import CardCity from './CardCity';

const ListCities = ({
  listCitiesWeather,
  onDeleteCity,
  fetchUpdateWeather,
  dragAndDrop,
}) => {
  useEffect(() => {
    const allСities = listCitiesWeather.map((el) => el.name);
    if (listCitiesWeather.length) {
      localStorage.setItem('cities', JSON.stringify(allСities));
    }
  }, [listCitiesWeather]);

  const handleDeleteCity = (name) => {
    const getCitiesFromLS = JSON.parse(localStorage.getItem('cities'));
    const updateCitiesFronLS = getCitiesFromLS.filter((el) => el !== name);
    localStorage.setItem('cities', JSON.stringify(updateCitiesFronLS));
    onDeleteCity(name);
  };

  const handleUpdate = (nameCity) => {
    fetchUpdateWeather(nameCity);
  };

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = listCitiesWeather[dragIndex];
      dragAndDrop(
        update(listCitiesWeather, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        }),
      );
    },
    [dragAndDrop, listCitiesWeather],
  );

  return (
    <>
      {listCitiesWeather.map((item, index) => (
        <CardCity
          key={item.dt}
          index={index}
          id={item.dt}
          data={item}
          handleDeleteCity={handleDeleteCity}
          handleUpdate={handleUpdate}
          moveCard={moveCard}
        />
      ))}
    </>
  );
};

ListCities.propTypes = {
  listCitiesWeather: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  dragAndDrop: PropTypes.func.isRequired,
  fetchUpdateWeather: PropTypes.func.isRequired,
  onDeleteCity: PropTypes.func.isRequired,
};
export default withRouter(ListCities);
