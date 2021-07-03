import React from 'react';
import chien from 'src/assets/images/chien 1.png';
import PropTypes from 'prop-types';
import './style.scss';

const petDescription = ({ onePetUserSearch }) => {
  console.log(onePetUserSearch);
  return (
    <div className="pet-description">
      <div className="pet-description-left">
        <div className="pet-description-Name">Nom:
          <p> {onePetUserSearch.name}</p>
        </div>
        <div className="pet-description-description">Description:
          <p> {onePetUserSearch.description}</p>
        </div>
        <div className="pet-description-identification">
          Tatouage: <p className="tattoo"> {onePetUserSearch.tattoo}</p>
          Numéro puce: <p className="idcard"> {onePetUserSearch.idCard}</p>
        </div>
        <div className="pet-description-breed">
          Race de l'animal: <p className="breed">{onePetUserSearch.breed.name}</p>
          Type de l'animal: <p className="type">{onePetUserSearch.type.name}</p>
        </div>
      </div>
      <div className="pet-description-right">
        <img className="pet-description-img" src={onePetUserSearch.picture == null ? `${chien}` : `http://ec2-100-25-4-132.compute-1.amazonaws.com/uploads/pictures/${onePetUserSearch.picture}`} alt="" />
      </div>

    </div>
  );
};

petDescription.propTypes = {
  onePet: PropTypes.array.isRequired,
  onePetUser: PropTypes.array.isRequired,
};

export default petDescription;

/*
- selector : 1 seul animal en fct de l'id => renvoi un objet animal
- afficher les info

*/

/*
return (
    <div className="pet-description">
        <h1>{onePet.onePet[0][0].id}</h1>
        <h1>{onePet.onePet[0][0].name}</h1>
        <h1>{onePet.onePet[0][0].description}</h1>
        <img src={`http://ec2-54-197-198-189.compute-1.amazonaws.com/uploads/pictures/${onePet.onePet[0][0].picture}`} alt=""/>
    </div>
*/

