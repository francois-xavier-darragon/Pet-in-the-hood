import React from 'react';
import image from 'src/assets/images/logo 3.svg';
import './style.scss';

const Error = () => (
  <div className="error">
    <p className="error-title">erreur 404 sorry</p>
    <img className="error-img" src={image} alt=""/>
  </div>
);

export default Error;
