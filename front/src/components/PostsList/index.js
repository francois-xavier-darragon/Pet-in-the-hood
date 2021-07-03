import React, { useEffect } from 'react';
import LastPost from 'src/components/LastPost';
import PropTypes from 'prop-types';
import { Select, Button } from 'semantic-ui-react';
import {
  MapContainer, TileLayer, Marker, Popup, L
} from 'react-leaflet';
import './style.scss';
import { sortedPost } from 'src/selectors/sorted';
import chien from 'src/assets/images/chien 1.png';

const postsList = ({ savePosts, mapToggler, toggleMap, allPosts, lastPostTri, postTri, center }) => {
  const handleClick = () => {
    mapToggler();
  };
  const handleTri = (event) => {
    postTri(event.target.id);
  };
  const lastSortedPost = sortedPost(allPosts, lastPostTri);

  return (
    <div className="last-posts">
      <div className="last-post-header">
      <Button.Group>
          <Button active={lastPostTri === '1'} id="1" onClick={handleTri}>Tous</Button>
          <Button active={lastPostTri === '2'} id="2" onClick={handleTri}>Trouvés</Button>
          <Button active={lastPostTri === '3'} id="3" onClick={handleTri}>Perdus</Button>
        </Button.Group>
        <div className="ui toggle checkbox">
          
          <input type="checkbox" checked={toggleMap} name="public" onClick={handleClick} />
          <label>Carte</label>
        </div>
      </div>
      <div className="checkbox-wrapper">
        
      </div>
      {!toggleMap && (
      <div className="posts-list">
          {lastSortedPost.map((onePost) => (
            <LastPost postData={onePost} key={onePost.id} />
          ))}
      </div>
      )}
      {toggleMap && (
      <div className="map-wrapper">
        <MapContainer center={center} zoom={13} scrollWheelZoom={false} className="test2">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={center} />
          {lastSortedPost.map((onePost) => (
            <Marker position={[onePost.address.latitude, onePost.address.longitude]}>
              <Popup className="popup">
                <div className="popup-wrap">
                  <img src={chien} alt="" />
                  <div className="popup-left">
                    <div className="popup-info">
                      <p className="popup-info-header">Découvert le: {onePost.dateOfDiscovery} </p>
                      <p>{onePost.title}</p>
                      <p>{onePost.description}</p>
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      )}
    </div>
  );
};


postsList.propTypes = {
  savePosts: PropTypes.array.isRequired,
};

export default postsList;
