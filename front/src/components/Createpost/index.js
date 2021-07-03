import React, { useEffect } from 'react';
import './styles.scss';
import { Save, Image } from 'react-feather';
import { Input, TextArea, Form, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const CreatePost = (
  {
    center,
    changePosition,
    changeTitle,
    changeAddress,
    changeDescription,
    changeDate,
    titleInput,
    addressInput,
    descriptionInput,
    submitHandleChangePicture,
    dateInput,
    submitAdvert,
  }) => {

  // Event pour controler le champ title, changeTitle vient du container
  const handleTitleChange = (event) => {
    changeTitle(event.target.value);
  };
  // Event pour controler le champ adresse, changeAddress vient du container
  const handleAddressChange = (event) => {
    changeAddress(event.target.value);
  };
  // Event pour controler le champ description, changeDescription vient du container
  const handleDescriptionChange = (event) => {
    changeDescription(event.target.value);
  };
  // Event pour controler le champ date, changeDate vient du container
  const handleDateChange = (event) => {
    changeDate(event.target.value);
  };
  // EventHandler:dragend ( executéquand le marker est laché), changePosition
  // sauvegarde latitude et longitude dans le state
  const eventHandlersDrag = (event) => {
    // On récupère les coordonnées du marker au laché
    const position = event.target.getLatLng();
    // On modifi le state avec les nouvelles coordonnées
    changePosition(position);
    // Match lat et lon depuis l'api du gouv pour matcher une adresse ecrite
    // matchCoord();
  };
  const HandleSubmitAdvert = () => {
    submitAdvert();
  };
  const HandleChangePicture = (event) => {
    submitHandleChangePicture(event.target.files[0]);
  };
  return (
    <div className="post">
      <div className="post-detail">

        <div className="wrapper-title">
          <Input label='Titre' type="textarea" placeholder="Entrer le titre de l'annonce" className="post-title" onChange={handleTitleChange} value={titleInput} />
          <Input label='Date' type="date" className="post-date" onChange={handleDateChange} value={dateInput} />
        </div>
        <div className="wrapper-description">
          <Form>
            <Input label='description' rows="2" placeholder="Entrer une description" className="post-description" onChange={handleDescriptionChange} value={descriptionInput} />
          </Form>
          <div className="carte-bidon">
            <MapContainer 
              center={center}
              zoom={6} 
              scrollWheelZoom={false}
              className="createpost-map"
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                draggable
                position={center}
                eventHandlers={{
                  dragend: (event) => {
                    eventHandlersDrag(event);
                  },
                }}
              >
                <Popup minWidth={90} />
              </Marker>
            </MapContainer>
          </div>
        </div>
        <div className="wrapper-save">

          <Input onChange={HandleChangePicture} className="post-image" type="file" />
        </div>
        <div className="wrapper-publish">
          <Button primary className="post-publish" type="submit" onClick={HandleSubmitAdvert}>Publier</Button>
        </div>
      </div>
    </div>
  );
};

CreatePost.propTypes = {
  changeTitle: PropTypes.func.isRequired,
  changeAddress: PropTypes.func.isRequired,
  changeDescription: PropTypes.func.isRequired,
  changeDate: PropTypes.func.isRequired,
  matchCoord: PropTypes.func.isRequired,
  changePosition: PropTypes.func.isRequired,
  titleInput: PropTypes.string.isRequired,
  addressInput: PropTypes.string.isRequired,
  descriptionInput: PropTypes.string.isRequired,
  dateInput: PropTypes.string.isRequired,
  submitAdvert: PropTypes.func.isRequired,
};

export default CreatePost;
