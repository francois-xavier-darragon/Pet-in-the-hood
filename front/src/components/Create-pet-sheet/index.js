import React from 'react';
import './styles.scss';

const CreatePetSheet = () => (
  <div className="pet">
    <h1>//Création de ma fiche animal</h1>
    <div className="pet-post">

      <div className="wrapper-left">
        <div className="imagebidon" />

        <button className="pet-upload" type="button">Upload</button>
      </div>

      <div className="wrapper-right">
        <label> Nom</label>

        <div className="pet-name">
          <input type="text" name="pet-name" placeholder="Nom de l'animal" />
        </div>

        <div className="wrapper-typeBreed">
          <label>
            Type de votre animal:
          </label>
          <select name="pet-type">
            <option value="cat">Chat</option>
            <option value="dog">Chien</option>
          </select>
          <input type="text" placeholder="Race de votre animal" />
        </div>

        <div className="wrapper-identification">
          <label>
            Identification de votre animal:
          </label>
          <input type="text" placeholder="Numéro de tatouage" />
          <input type="text" placeholder="Numéro de puce" />
        </div>

        <div className="description">
          <label>
            Information supplémentaires:
          </label>
          <textarea name="description" placeholder="Maladies diverses,comportement avec les inconnus,signes distinctifs particulier..." />
        </div>

        <div className="button-bottom">
          <button type="button" className="return">Retour utilisateur</button>
          <button type="button" className="save">Enregistrer</button>
        </div>
      </div>

    </div>
  </div>
);

export default CreatePetSheet;
