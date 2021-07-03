import React from 'react';
import { Icon } from 'semantic-ui-react';
import chien from 'src/assets/images/chien 1.png';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './style.scss';

const post = ({ postData }) => (
  <div className="post-card">
    <div className="post-card-header">
      <Icon name="user" className="icon-user" />
      <p>{postData.title}</p>
    </div>
    <div className="post-card-time">
      <p>{postData.createdAt}</p>
    </div>
    <div className="post-card-content">
      <p>{postData.description}
      </p>
      <div className="post-card-picture">
        <img src={chien} alt="" />
      </div>
    </div>
    <div className="post-card-button">
      <button type="button" className="show"><NavLink
        className="menu-link"
        to={`/onepost/${postData.id}`}
        exact
        activeClassName="menu-link--active"
        >voir
        </NavLink>
      </button>
    </div>
  </div>
);

post.propTypes = {
  postData: PropTypes.object.isRequired,
};

export default post;
