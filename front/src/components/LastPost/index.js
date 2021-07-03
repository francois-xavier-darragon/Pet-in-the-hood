import React from 'react';
import PropTypes from 'prop-types';
import chien from 'src/assets/images/chien 1.png';
import { Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import './style.scss';

/*

postData.picture. == null ? chien : postdata.picture 

*/

const LastPost = ({ postData }) => {
  const url = 'http://ec2-100-25-4-132.compute-1.amazonaws.com/uploads/pictures';
  return (
    <NavLink className="menu-link" to={`/onepost/${postData.id}`} exact activeClassName="menu-link--active">
      <div className="last-post">
        <div className ={postData.pet == null ? "last-post-title" : "last-post-title found"}>
          <p>{postData.pet == null ? "trouvé" : `${postData.pet.name}`}</p>
        </div>
        <div className="last-post-picture">
          <img src={ (postData.picture == null ? `${chien}` : `${url}/${postData.picture}`)}  alt="" />
        </div>
        <div className="last-post-description">
          <div className="last-post-description-header">
            <Icon name="user" className="icon-user" />
            <p>{postData.title}</p>
          </div>
          <div className="last-post-description-text">
            <p className="last-post-description-text-date">{}</p>
            <p className="desc">
              {postData.description}
            </p>
          </div>
        </div>
       
      </div>

    </NavLink>
  );
};


LastPost.propTypes = {
  postData: PropTypes.object.isRequired,
};

export default LastPost;
