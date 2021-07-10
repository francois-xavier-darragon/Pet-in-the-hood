import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import logoHeader from '../../assets/images/logo_4.png';

import './style.scss';
import 'semantic-ui-css/semantic.min.css';

const Header = ({
  isLogged,
  loggedOut,
  pseudo,
  picture,
}) => {
  // Deconnection de l'utilisateur avec suppression du localStorage
  const handleClick = () => {
    localStorage.removeItem('JWT');
    loggedOut();
    localStorage.clear();
  };
  return (
    <div className="global-header">
      <header className="header">
        <div className="bandeau">
          <div className="logo">
            <img src={logoHeader} alt="react logo" />
            <h1><NavLink className="logo-link" exact to="/">Pets In The Hood</NavLink></h1>
          </div>
          <div className="trapeze" />
          {isLogged && (
          <div className="userLogin">
            <div className="userLogin-img">
              <img src={`http://ec2-100-25-4-132.compute-1.amazonaws.com/uploads/pictures/${picture}`} alt=""/>
            </div>
            <Dropdown item text={pseudo} className="header-dropdown">
              <Dropdown.Menu direction="left" className="header-dropdown-wrapper">
                <Dropdown.Item><NavLink exact to="/profil">Voir le profil</NavLink></Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item className="header-dropdown-wrapper-lastItem"><a href="" onClick={handleClick} className="header-dropdown-wrapper-disconnect">Deconnexion</a></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          )}
        </div>
        <nav className="header-info">
          <div id="menuToggle">
            <input type="checkbox" />
            <div id="menuButton">
              <span />
              <span />
              <span />
            </div>
            <ul className="navigation">
              <li><NavLink className="header-navlink" exact to="/posts-list">Toutes les annonces</NavLink></li>
              <li><NavLink exact to="/createpost">J'ai trouvé un animal</NavLink></li>
              <li><NavLink exact to="/profil">J'ai perdu mon animal</NavLink></li>
              {!isLogged && (
                <li><NavLink exact to="/login">Me connecter</NavLink></li>
              )}
              {isLogged && (
                <li><a onClick={handleClick}>Deconnexion</a></li>
              )}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  loggedOut: PropTypes.func.isRequired,
  pseudo: PropTypes.string.isRequired,
};

export default Header;
