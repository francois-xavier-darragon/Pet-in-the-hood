/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {} from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { useHistory, NavLink } from 'react-router-dom';

const LoginForm = ({ emailInput, passwordInput, changeEmail,
  changePassword, connectUser, isLogged }) => {
  const history = useHistory();
  const handleEmailChange = (event) => {
    changeEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    changePassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    connectUser();
  };
  if (isLogged === true) {
    history.push('/');
  }
  return (
    /* On place les handles et les values que l'on recupère du containers */
    <div className="login-wrapper">
      <form action="/" onSubmit={handleSubmit}>
        <div className="login">
          <h2>Connexion</h2>
          <p className="login-text">Pour accéder aux annonces, merci de vous authentifier.</p>
          <div className="login-form">
            <p className="login-user">
              <label>Identifiant</label>
              <input onChange={handleEmailChange} type="text" placeholder="E-mail" value={emailInput} />
            </p>
            <p className="login-password">
              <label>Mot de passe</label>
              <input onChange={handlePasswordChange} type="password" placeholder="Mot de passe" value={passwordInput} />
            </p>
            <p className="login-submit">
              <button type="submit">Se connecter</button>
              <NavLink exact to="/create-user">créer un compte</NavLink>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
/* On valide les propTypes */
LoginForm.propTypes = {
  emailInput: PropTypes.string.isRequired,
  passwordInput: PropTypes.string.isRequired,
  changeEmail: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  connectUser: PropTypes.func.isRequired,
  isLogged: PropTypes.func.isRequired,
};

export default LoginForm;
