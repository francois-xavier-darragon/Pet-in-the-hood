import React from 'react';
import PropTypes from 'prop-types';
import pp1 from 'src/assets/images/pp1.jpg';
import pp6 from 'src/assets/images/pp6.jpg';
import pp2 from 'src/assets/images/pp2.jpg';
import pp3  from 'src/assets/images/pp3.jpg';
import pp4  from 'src/assets/images/pp4.jpg';
import pp5  from 'src/assets/images/pp5.jpg';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import './style.scss';

const About = () => (
  <div className="about-wrapper"> 
    <div className="about">
      <h1>Qui sommes nous ? </h1>
      <p>Pets in the hood à été crée afin d'aider les personnes à retrouver leurs animaux perdus, dans le cadre de la
        formation développeur Web chez O'Clock
      </p>
      <div className="team">
        <div className="team-card">
          <img src={pp6} alt=""/>
          <h2 className="team-card-name">François-xavier</h2>
          <p>Lead Dev Back</p>
        </div>
        <div className="team-card">
          <img src={pp1} alt=""/>
          <h2 className="team-card-name">Morgan</h2>
          <p>Product Owner</p>
        </div>
        <div className="team-card">
          <img src={pp3} alt=""/>
          <h2 className="team-card-name">Thomas</h2>
          <p>Referent Tech / Git</p>
        </div>
        <div className="team-card">
          <img src={pp4} alt=""/>
          <h2 className="team-card-name">Paul</h2>
          <p>Scrum Master</p>
        </div>
        <div className="team-card">
          <img src={pp5} alt=""/>
          <h2 className="team-card-name">Julie</h2>
          <p>Lead Dev Front</p>
        </div>
      </div>
    </div>
    <div className="coord-title">
      <h1>// Nous contacter</h1>
    </div>
    
    <div className="coord">
      <MapContainer center={[47.663, 6.866]} zoom={13} className="test">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[47.663, 6.876]}>
          <Popup>
            Pets in the hood
          </Popup>
        </Marker>
      </MapContainer>
      <div className="adress">
        <p>Pets in the hood</p>
        <p>1 rue bidule</p>
        <p>90000 - Belfort</p>
      </div>
    </div>
  </div>
);

About.propTypes = {

};

export default About;
