import React from 'react';
import PropTypes from 'prop-types';

import { notify, notifyText } from './Notification.module.css';

const Notification = ({ text }) => {
  return (
    <div className={notify}>
      <p className={notifyText}>{text}</p>
    </div>
  );
};

Notification.defaultProps = {
  text: null,
};

Notification.propTypes = {
  text: PropTypes.string,
};

export default Notification;
