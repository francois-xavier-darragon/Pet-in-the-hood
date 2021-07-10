import React, { useEffect} from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import { Form, Tab, Button, Input } from 'semantic-ui-react';
import map from '../../assets/images/map.png';
import chien from 'src/assets/images/chien 1.png';
import TableMenu from './panes';
import { NavLink } from 'react-router-dom';
import {
  MapContainer, TileLayer, Marker } from 'react-leaflet';

import './style.scss';

const User = (
  {
    nom,
    type,
    race,
    desc,
    submitNewPet,
    changeInputCreatePet,
    toggleEditProfil,
    showEditForm,
    actualUser,
    pictureChange,
    submitPicture,
    picture,
    changeFirstName,
    changeName,
    changeEmail,
    changePhone,
    changeAddress,
    NameInput,
    PhoneInput,
    FirstNameInput,
    EmailInput, center, 
    AddressInput, isLogged,
    submitLosted, idCard,
    getAllBreed, tattoo,
    OnePetUser, allBreeds,
    newPictureChange,
    longitude,
    latitude,
    changeLon,
    changeLat,
    patchUser,
    changePosition
  }) => {
  useEffect(OnePetUser, []);
  useEffect(getAllBreed, []);
  if (isLogged !== true) {
    const history = useHistory();
    history.push("/login");
  }

  const handleClick = (event) => {
    event.preventDefault();
    showEditForm();
  };

  const handleChange = (event) => {
    changeInputCreatePet(event.target.value, event.target.name);
  };
  const handleSubmit = () => {
    submitNewPet();
  };

  const handleFirstNameChange = (event) => {
    changeFirstName(event.target.value);
  };

  const handleNameChange = (event) => {
    changeName(event.target.value);
  };

  const handleEmailChange = (event) => {
    changeEmail(event.target.value);
  };

  const pictureChangeHandler = (event) => {
    pictureChange(event.target.files[0]);
  };
  const handleSubmitPicture = () => {
    submitPicture();
  };

  const handleSubmitLosted = (event) => {
    submitLosted(event.target.value);
  };
  const handleNewPetPicture = (event) => {
    newPictureChange(event.target.files[0]);
  };
  const handlePhoneChange = (event) => {
    changeLon(event.target.value);
  };
  const handleAddressChange = (event) => {
    changeLat(event.target.value);
  };
  const handlePatchUser = () => {
    patchUser();
  };
  const eventHandlersDrag = (event) => {
    // On récupère les coordonnées du marker au laché
    const position = event.target.getLatLng();
    changePosition(position);
  };
  const panes = [
    {
      menuItem: 'Mon Profil',
      render: () => (
        <Tab.Pane>
          <div className="profil-picture">
            <img src={`http://ec2-100-25-4-132.compute-1.amazonaws.com/uploads/pictures/${picture}`} alt="profil pic" />

            <Form onSubmit={handleSubmitPicture} enctype="multipart/form-data" name="myForm" id="myForm">
              <Form.Field>
                <label>Photo de profil</label>
                <input type="file" className="createUser-file" onChange={pictureChangeHandler}/>
              </Form.Field>
            </Form>
          </div>
          <p><span>Prenom:</span> {actualUser.firstname}</p>
          <p><span>Nom:</span> {actualUser.lastname}</p>
          <p><span>email:</span> {actualUser.email} </p>
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Mes animaux',
      render: () => (
        <Tab.Pane>
          {actualUser.pets.map((pet) => (
            <div className="petUser-wrapper">
              <div className="wrapper-pet">
                <h1>Nom: {pet.name}</h1>
                <p>Type: {pet.type.name}</p>
                <p>Race: {pet.breed.name}</p>
                <p>Description: {pet.description}</p>
                <NavLink exact to={`/petDescription/${pet.id}`}>
                  <Button basic color='blue' type="button">Voir la fiche</Button>
                </NavLink>
                <NavLink exact to="/createpost">
                  <Button basic color='red' value={pet.id} onClick={handleSubmitLosted} type="submit"> Déclarer perdu</Button>
                </NavLink>
              </div>
              <div className="wrapper-pet-picture">
                <img src={pet.picture == null ? `${chien}` : `http://ec2-100-25-4-132.compute-1.amazonaws.com/uploads/pictures/${pet.picture}`} alt=""/>
              </div>
            </div>
          ))}
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Ajouter un animal',
      render: () => (
        <Tab.Pane>
          <Form onSubmit={handleSubmit}>
            <Form.Group unstackable widths={2}>
              <Form.Field required>
                <label>Nom</label>

                <input value={nom} placeholder='Nom' name="nom" onChange={handleChange}/>

              </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
              <Form.Field required>
                <label>Type</label>
                <select name="type" id="" onChange={handleChange}>
                  <option value="1">Chat</option>
                  <option value="2">Chien</option>
                </select>
              </Form.Field>
              <Form.Field required>
                <label>Race</label>
                <select name="race" onChange={handleChange}>
                  {allBreeds.map((breed) => (
                    <option name="race" value={breed.id}>{breed.name}</option>
                  ))}
                </select>
              </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={2}>
              <Form.Field required>
                <label>tattoo</label>
                <input value={tattoo} placeholder='Tatouage' name="tattoo" onChange={handleChange} />
              </Form.Field>
              <Form.Field>
                <label>idCard</label>
                <input value={idCard} placeholder='Numéro de puce' name="idCard" onChange={handleChange} />
              </Form.Field>
            </Form.Group>
            <Form.Group>

              <Form.Field required>
                <label>Description</label>
                <textarea value={desc}  placeholder='description de lanimal' name="desc" rows="5" cols="33" onChange={handleChange}/>
              </Form.Field>
            </Form.Group>
            <Button type='submit'>Ajouter</Button>
            <Input type="file" onChange={handleNewPetPicture}/>
          </Form>
        </Tab.Pane>
      ),
    },
  ];
  return (
    <div>
      <div className="global-profil">
        <div className="wrapper">
          <div className="buttons">
            <Tab panes={panes} className="petPane" />
          </div>
        </div>
        <div className="profile-map">
          <div className="profil">
            <p>{actualUser.firstname} {actualUser.lastname} </p>
            <Button primary type="button" onClick={handleClick}>Editer le profil</Button>
          </div>
          <div className="profile-map-wrapper">
            <MapContainer center={center} zoom={3} scrollWheelZoom={false} className="profile-map-wrapper-user">
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker draggable position={center} eventHandlers={{
                dragend: (event) => {
                  eventHandlersDrag(event);
                },
              }}
              />
            </MapContainer>
          </div>
        </div>
      </div>
      {toggleEditProfil && (
      <div className="profil-form">
        <div className="formdescription">Tu peux éditer ton profil ici </div>
        <div className="profil-form-fields">
        <Input label="Prenom" onChange={handleFirstNameChange} value={FirstNameInput}type="text" className="name formEntry" placeholder=" nom" />
        <Input label="Nom" onChange={handleNameChange} value={NameInput} type="text" className="name formEntry" placeholder=" prénom" />
        <Input label="Email" onChange={handleEmailChange} value={EmailInput} type="text" className="email formEntry" placeholder="email" />
        <Input  label="Longitude" onChange={handlePhoneChange} value={longitude}type="number" className="tel formEntry" placeholder=" longitude" />
        <Input  label="Latitude" onChange={handleAddressChange} value={latitude}type="number" className="adress formEntry" placeholder="latitude" />
        <button className="submit" type="button" onClick={handlePatchUser}>Envoyer</button>
        </div>
      </div>
      )}
    </div>
  );
};

User.propTypes = {
  toggleEditProfil: PropTypes.bool.isRequired,
  actualUser: PropTypes.array.isRequired,
  showEditForm: PropTypes.func.isRequired,
  pictureChange: PropTypes.func.isRequired,
  submitPicture: PropTypes.func.isRequired,
  picture: PropTypes.string.isRequired,
  changeFirstName: PropTypes.func.isRequired,
  changeName: PropTypes.func.isRequired,
  changeEmail: PropTypes.func.isRequired,
  changePhone: PropTypes.func.isRequired,
  changeAddress: PropTypes.func.isRequired,
  submitLosted: PropTypes.func.isRequired,
};

export default User;
