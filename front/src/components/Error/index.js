import React from 'react';
import cat2 from 'src/assets/images/cat2.jpg';
import './style.scss';

const Error = () => (
  <div className="error">
    <div className="error-wrapper">
      <img className="error-img" src={cat2} alt=""/>
      <h1 className="zero">0</h1>
      <img className="error-img" src={cat2} alt=""/>
    </div>
    <p className="error-title">not found</p>
  </div>
);

export default Error;
