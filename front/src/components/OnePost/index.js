import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import chien from 'src/assets/images/chien 1.png';

import './style.scss';

const OnePost = ({ onePost, showEmailToggler, showEmail, getUser, ownerPostMail, archivePost }) => {
  const HandleShowEmail = () => {
    showEmail();
  };
  useEffect(() => {
    getUser(onePost.user.id);
  });
  const HandleArchivePost = () => {
    archivePost(onePost.id);
  };

  return (
    <div className="posts-list onePost">
      <div className="onePost-left">
        <div className="onePost-left-header">
          <Icon name="user" className="onePost-left-header-user">{onePost.user.firstname}</Icon>
          <h1>{onePost.title}</h1>
        </div>
        <div className="onePost-left-time">
          <p>Postée le 15/06/2021 à 11h00</p>
        </div>
        <div className="onePost-left-content">
          <h1>Description</h1>
          <p>
            {onePost.description}
          </p>
        </div>
      </div>
      <div className="onePost-right">
        <img src={onePost.picture == null ? `${chien}` : `http://ec2-100-25-4-132.compute-1.amazonaws.com/uploads/pictures/${onePost.picture}`} alt="" className="onePost-right-img" />
        <button type="button" onClick={HandleShowEmail} className="onePost-right-button">Contacter</button>
        {showEmailToggler && <p>{onePost.pet == null ? `Email du dépositaire de l'annonce:` : `Email du propriétaire:`}</p>}
        {showEmailToggler && <a href="mailto:san@antonio.net">{ownerPostMail}</a>}
        <button type="button" onClick={HandleArchivePost}className="onePost-right-button-archive">Archiver l'annonce</button> 
      </div>
    </div>
  );
};

OnePost.propTypes = {
  onePost: PropTypes.array.isRequired,
  showEmail: PropTypes.func.isRequired,
  showEmailToggler: PropTypes.bool.isRequired,
  ownerPostMail: PropTypes.string.isRequired,
  getUser: PropTypes.func.isRequired,
  archivePost: PropTypes.func.isRequired,
};

export default OnePost;