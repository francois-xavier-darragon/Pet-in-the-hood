import React from 'react';
import './styles.scss';
import {
  Facebook, Twitter, Instagram, Youtube,
} from 'react-feather';

const Footer = () => (
  <div className="reseaux">
    <div className="reseaux-left">
      <ul>
        <h1>A propos</h1>
        <li>Faq</li>
        <li>Nous contacter</li>
        <li>Mentions légales</li>
        <li>Parternaires</li>
      </ul>
    </div>
    <div className="reseaux-right"> <p>∕∕ Retrouvez nous sur nos réseaux</p> <div className="reseaux-icons"><Facebook /> <Twitter /> <Instagram /> <Youtube /></div>  <p> {'\u00a9'} 2021 -Pets in the hood </p> </div>
  </div>
);

export default Footer;
