import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Title = ({title}) => {
  return (
    <div className="Title-wrapper">
      <h1 className="Title-wrapper-h1">- {title} -</h1>
    </div>
  )
};

export default Title;