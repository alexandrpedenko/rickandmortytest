import PropTypes from 'prop-types';
import React from 'react';
import './alert.sass';

const Alert = ({ message }) => {
  return <div className='alert-error'>{message}</div>;
};

Alert.propTypes = {
  message: PropTypes.string,
};

export default Alert;
