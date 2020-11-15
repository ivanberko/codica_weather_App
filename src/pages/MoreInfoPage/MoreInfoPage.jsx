import React from 'react';

import { useParams, useHistory } from 'react-router-dom';
import MoreInfo from '../../components/MoreInfo/MoreInfoContainer';

import { listByHour } from '../../components/MoreInfo/MoreInfo.module.css';

const MoreInfoPage = () => {
  const { dt } = useParams();
  const history = useHistory();

  const setHistory = (city) => {
    history.push(`/details/${city}`);
  };

  return (
    <div className={listByHour}>
      <MoreInfo dt={+dt} setHistory={setHistory} />
    </div>
  );
};
export default MoreInfoPage;
