import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './style.scss';

const Banner = ({ 
  tatooInput,
  changeTatooInput,
  searchTatoo,
  queryResult,
  showResult,
  toggleShowResult,
}) => {
  // Champ controlé pour recherche par tatouage
  const handleChange = (event) => {
    changeTatooInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    searchTatoo(event.target.value);
  };
  const handleBlur = () => {
    toggleShowResult();
  };
  return (
    <div className="banner">
      <div className="banner-wrapper">
        <form className="banner-form" onSubmit={handleSubmit}>
          <h1 className="banner-title">Vous avez trouvé un animal ?</h1>
          <input onClick={handleBlur} onChange={handleChange}  value={tatooInput} className="banner-input" type="text" placeholder="N° de tatouage, nom" />
          <button className="banner-submit" type="submit">Vérifier</button>
          <a href="" className="banner-info">Je ne possède pas cette information </a>
          {((showResult === true ) && queryResult.length >= 1) && (
          <div className="banner-result">
            {queryResult[0].map((result) => (
              <div className="query-result"> 
                <h1>{`name: ${result.name}`}</h1>
                <p>description: {result.description}</p>
                <button type="button">
                  <NavLink exact to={`/petDescription/${result.id}`}>
                    Voir l'annonce
                  </NavLink>
                </button>
              </div>
            ))};
          </div>
          )}
          {((showResult === true) 
          && ((queryResult[0] === undefined)
          || (queryResult[0].length)) === 0) && (
          <div className="banner-result">
            <div className="query-result">
              <h1>Pas de résultats</h1>
            </div>
          </div>
          )}
        </form>
      </div>
    </div>
  );
};

Banner.propTypes = {
  tatooInput: PropTypes.string.isRequired,
  changeTatooInput: PropTypes.func.isRequired,
  searchTatoo: PropTypes.func.isRequired,
};

export default Banner;
