import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useDrag, useDrop } from 'react-dnd';
import ItemTypes from './ItemTypes';

import {
  linkItem,
  listItem,
  titleItem,
  tempItem,
  dateItem,
  itemBtnUpdate,
  itemBtnDelete,
  boxButton,
} from './CardCity.module.css';

const CardCity = ({
  data,
  handleDeleteCity,
  handleUpdate,
  moveCard,
  index,
  id,
}) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0.3 : 1;
  drag(drop(ref));
  return (
    <li ref={ref} className={listItem} style={{ opacity }}>
      <NavLink
        to={`/details/${data.name}`}
        className={linkItem}
      >
        <h2 className={titleItem}>{data.name}</h2>
        <div className={dateItem}>
          <span>{data.month}</span> <span>{data.date}</span>,
          <span>{data.dayOfWeek}</span>
        </div>
        <img src={data.icon} alt={data.icon} width="80" />
        <p className={tempItem}>{data.temp}&deg;</p>
      </NavLink>
      <div className={boxButton}>
        <button
          type="button"
          className={itemBtnUpdate}
          onClick={() => handleUpdate(data.name)}
        ></button>
        <button
          type="button"
          className={itemBtnDelete}
          onClick={() => handleDeleteCity(data.name)}
        ></button>
      </div>
    </li>
  );
};

CardCity.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    dayOfWeek: PropTypes.string.isRequired,
  }).isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleDeleteCity: PropTypes.func.isRequired,
  moveCard: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default CardCity;
