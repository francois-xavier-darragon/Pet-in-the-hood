import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input } from 'semantic-ui-react';
import checkInput from 'src/selectors/checkCreateUser';
import { useHistory } from "react-router-dom";

import './style.scss';

const CreateUser = (
  {
    firstName,
    lastName,
    email,
    password,
    passwordConfirm,
    changeInputCreateUser,
    submitNewUser,
    pictureChange,
    redirect,
    changeRedirect,
    rue,
    ville,
    zipCode,
    matchCoord,
    checked,
    addressToggler,
    toggleAddress
  }) => {
  // Champs controlés en une fois en passant le nom du champ
  // Les différents cas en fouction du name sont gérés dans le reducer
  const handleChange = (event) => {
    changeInputCreateUser(event.target.value, event.target.name);
  };
  const HandlecheckAddress = () => {
    const completeAddress = `${rue}, ${zipCode}, ${ville}`;
    matchCoord(completeAddress);
  };
  const history = useHistory();
  if (redirect === true) {
    changeRedirect();
    history.push('/');
  }
  const handleToggler = () => {
    toggleAddress();
  };

  // Vérification des champs, le selector checkInput() renvoi true
  // si les règles de validation sont respectées
  let checkedForm;
  const handleSubmit = () => {
    checkedForm = checkInput(firstName, lastName, email, password, passwordConfirm);
    if (checkedForm === true) {
      submitNewUser();
      alert("creation de compte ok");
    }
  };
  // Sauvegarde l'image uploadée dans le state
  // pour l'utiliser dans la requète axios
  const pictureChangeHandler = (event) => {
    pictureChange(event.target.files[0]);
  };
  return (
    <div className="createUser">
      <div className="createUser-wrapper">
        <h1 className="createUser-header">Créer un compte</h1>
        <Form encType="multipart/form-data" name="myForm" id="myForm">
          <Form.Group unstackable widths={2}>
            <Form.Field required>
              <label>Nom</label>
              <input value={firstName} placeholder="Prenom..." onChange={handleChange} name="nom"/>
            </Form.Field>
            <Form.Field required>
              <label>Prenom</label>
              <input value={lastName} placeholder="Nom..." onChange={handleChange} name="prenom"/>
            </Form.Field>
          </Form.Group>
          <Form.Field required>
            <label>Email</label>
            <input value={email} placeholder="Email..." onChange={handleChange} name="email"/>
          </Form.Field>
          <Form.Group unstackable widths={2}>
            <Form.Field required>
              <label>Mot de passe</label>
              <input value={password} placeholder="Password..." type="password" onChange={handleChange} name="password"/>
            </Form.Field>
            <Form.Field required>
              <label>Confirmer le mot de passe</label>
              <input value={passwordConfirm} placeholder="Password..." type="password" onChange={handleChange} name="passwordConfirm"/>
            </Form.Field>
          </Form.Group>
          <Form.Group >
            <Form.Field>
              <div className="ui toggle checkbox formAdressToggler">
                <input value={addressToggler} checked={addressToggler} type="checkbox" name="address" onChange={handleToggler} />
                <label>Renseigner une adresse</label>
              </div>
            </Form.Field>
          </Form.Group>
          {addressToggler && (
          <Form.Group unstackable widths={2}>
            <Form.Field required>
              <label>rue</label>
              <input value={rue} placeholder="rue..." type="text" onChange={handleChange} name="rue"/>
            </Form.Field>
            <Form.Field required>
              <label>ville</label>
              <input value={ville} placeholder="ville..." type="text" onChange={handleChange} name="ville"/>
            </Form.Field>
            <Form.Field required>
              <label>zipCode</label>
              <input value={zipCode} placeholder="code postal..." type="text" onChange={handleChange} name="zipCode"/>
            </Form.Field>
          </Form.Group>
          )}
          <Form.Field>
            <label>Photo de profil</label>
            <input type="file" className="createUser-file" onChange={pictureChangeHandler} id="picture"/>
          </Form.Field>
          {addressToggler && (
            <Button onClick={HandlecheckAddress}>Vérifier adresse</Button>
          )}
          <Button disabled={checked} onClick={handleSubmit}>Submit</Button>
        </Form>
      </div>
    </div>
  );
};
CreateUser.propTypes = {
  changeInputCreateUser: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirm: PropTypes.string.isRequired,
  submitNewUser: PropTypes.func.isRequired,
  pictureChange: PropTypes.func.isRequired,
};

export default CreateUser;
