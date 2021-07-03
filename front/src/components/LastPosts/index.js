import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import chien from 'src/assets/images/chien 1.png';
import LastPost from 'src/components/LastPost';
import { Select } from 'semantic-ui-react';
import {
  MapContainer, TileLayer, Marker, Popup, L
} from 'react-leaflet';

import { sortedPost } from 'src/selectors/sorted';
import { last5 } from 'src/selectors/last5';

import './style.scss';

const LastPosts = ({
  mapToggler, toggleMap, allPosts, lastPostTri, postTri, center
}) => {
  const handleClick = () => {
    mapToggler();
  };
  const handleTri = (event) => {
    postTri(event.target.id);
  };
  const lastSortedPost = sortedPost(allPosts, lastPostTri);
  const fivePosts = last5(lastSortedPost);
  const options = [
    { key: 'tous', value: 'tous', text: 'tous' },
    { key: 'chiens', value: 'chiens', text: 'chiens' },
    { key: 'chats', value: 'chats', text: 'chats' },
  ];
  return (
    <div className="last-posts">
      <div className="last-post-header">
        <form>
          <Select placeholder="trier par ..." options={options} />
        </form>
        <div className="checkbox-wrapper">
        <Button.Group>
          <Button active={lastPostTri === '1'} id="1" onClick={handleTri}>Tous</Button>
          <Button active={lastPostTri === '2'} id="2" onClick={handleTri}>Trouvés</Button>
          <Button active={lastPostTri === '3'} id="3" onClick={handleTri}>Perdus</Button>
        </Button.Group>
      </div>
        <div className="ui toggle checkbox">
          <input type="checkbox" checked={toggleMap} name="public" onChange={handleClick} />
          <label>Carte</label>
        </div>
      </div>
      
      {!toggleMap && (
      <div className="last-posts-list">
          {fivePosts.map((onePost) => (
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
          {fivePosts.map((onePost) => (
            <Marker key={onePost.id} position={[onePost.address.latitude, onePost.address.longitude]}>
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

LastPosts.propTypes = {
  mapToggler: PropTypes.func.isRequired,
  toggleMap: PropTypes.bool.isRequired,
  allPosts: PropTypes.array.isRequired,
  lastPostTri: PropTypes.string.isRequired,
  postTri: PropTypes.func.isRequired,
};

export default LastPosts;
