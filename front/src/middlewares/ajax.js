

import { CONNECT_USER, saveUser, saveProfile, ADD_PET, ONE_PET_USER, saveAllPets, saveBreeds, GET_ALL_BREED, PATCH_USER } from 'src/actions/user';
import { GET_ALL_POSTS, savePosts, GET_USER, ownerPostMail, archivePost, ARCHIVE_POST} from 'src/actions/posts';

import { SUBMIT_NEW_USER, redirect, blockSubmit, setCoord, resetCreateUser } from 'src/actions/createUser';
import { MATCH_COORD, CREATE_POST, saveNewPost, resetLostedPet } from 'src/actions/createPost';
import { SEARCH_TATOO, resultBannerQuery } from 'src/actions/banner';
import axios from 'axios';

const ajax = (store) => (next) => (action) => {
  // config standard et config multipart pour upload image

  const state = store.getState();
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${state.user.token}`,
    },
  };
  const configToken = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  const configTokenPicture = {
    headers: {
      'content-type': 'multipart/form-data',
      'Authorization': `Bearer ${state.user.token}`,
    },
  };
  const configPicture = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };
  // url API Symfony et url API gouv
  const url = 'http://ec2-100-25-4-132.compute-1.amazonaws.com/api';
  const apiGouv = 'https://api-adresse.data.gouv.fr';

  // ---------Action-Type: Connect_USER---------
  // Post username et password: récupère le token
  if (action.type === CONNECT_USER) {
    const data = {
      username: state.user.EmailInput,
      password: state.user.passwordInput,
    };
    // Requete axios
    axios.post(`${url}/login_check`, data, config)
      .then((response) => {
        localStorage.setItem('JWT', response.data.token);
        store.dispatch(saveUser());
        localStorage.setItem('pseudo', response.data.data.firstname);
        store.dispatch(saveUser());
        store.dispatch(saveProfile(response.data.data));
        axios.get(`${url}/user/${response.data.data.id}`)
          .then((responses) => {
            const userToString = JSON.stringify(responses.data);
            localStorage.setItem('actualUser', userToString);
            store.dispatch(saveProfile(responses.data));
          });
      })
      .catch((error) => {
        alert(error);
      });
    next(action);
  }

  // ---------Action-Type: GET_ALL_POSTS---------
  // Get all posts: récupère toute les annonces
  else if (action.type === GET_ALL_POSTS) {
    // Requete axios
    axios.get(`${url}/advert`)
      .then((response) => {
        store.dispatch(savePosts(response.data));
      })
      .catch((error) => {
        alert(error);
      });
    next(action);
  }

  // ---------Action-Type: MATCH_COORD---------
  // Get adress: récupère l'adresse en fonction des coordonnées
  else if (action.type === MATCH_COORD) {
    const state = store.getState();
    // Requete axios
    axios.get(`${apiGouv}/search/?q=${action.value}`)
      .then((response) => {
        if (response.data.features[0] !== undefined) {
          store.dispatch(setCoord(response.data.features[0].geometry.coordinates[0], response.data.features[0].geometry.coordinates[1]));
        }
        if(response.data.features[0] == undefined) {
          store.dispatch(blockSubmit());
        }
      })
      .catch((error) => {
        alert(error);
      });
    next(action);
  }

  // ---------Action-Type: SUBMIT_NEW_USER---------
  // POST user: soumet un nouvel utilisateur et enchaine sur une 2e requete pour envoyer la photo
  /*
  Nouvel utilisateur sans adresse => submit avec adress = null
  Nouvel utilisateur avec adresse => submit avec adress = state adress
  */
  else if (action.type === SUBMIT_NEW_USER) {
    const state = store.getState();
    if (state.createUser.lon !== '') {
      const address = {
        longitude: state.createUser.lon,
        latitude: state.createUser.lat,
      };
      axios.post(`${url}/address`, address, configToken)
        .then((responses) => {
          const data = {
            firstname: state.createUser.firstName,
            lastname: state.createUser.lastName,
            email: state.createUser.email,
            password: state.createUser.password,
            address: responses.data.id,
          };
          axios.post(`${url}/user`, data, configToken)
            .then((response) => {
              if (state.createUser.picture !== null) {
                const formDataPicture = new FormData();
                formDataPicture.append('picture', state.createUser.picture, state.createUser.picture.name);
                // Requete axios chainée après le retour de la réponse de la première requète
                axios.post(`${url}/user/${response.data[1]}/picture`, formDataPicture, configPicture);
              }
            });
        })
        .finally(() => {
          store.dispatch(redirect());
          store.dispatch(resetCreateUser());
        });
    }
    if (state.createUser.lon == '') {
      const data2 = {
        firstname: state.createUser.firstName,
        lastname: state.createUser.lastName,
        email: state.createUser.email,
        password: state.createUser.password,
        address: null,
      };
      axios.post(`${url}/user`, data2, config)
        .then((response) => {
          if (state.createUser.picture !== null) {
            const formDataPicture = new FormData();
            formDataPicture.append('picture', state.createUser.picture, state.createUser.picture.name);
            // Requete axios chainée après le retour de la réponse de la première requète
            axios.post(`${url}/user/${response.data[1]}/picture`, formDataPicture, configPicture);
          }
          store.dispatch(resetCreateUser());
        });
    }
    next(action);
  }
  // Creation d'une annonce
  // 1- On créer une adresse
  // 2- On récupère l'id de la nouvelle adresse
  // 3- On envoi une nouvelle annonce avec l'id de la nouvelle adresse 
  // 4- lostedPet vaut null si animal trouvé, vaut id de la fiche animal si animal perdu
  else if (action.type === CREATE_POST) {
    const state = store.getState();
    const address = {
      longitude: state.createPost.center.lng,
      latitude: state.createPost.center.lat,
    };
    axios.post(`${url}/address`, address, config)
      .then((response) => {
        const advert = {
          title: state.user.titleInput,
          description: state.user.descriptionInput,
          address: response.data.id,
          user: state.user.actualUser.id,
          pet: state.user.lostedPet,
        };
        axios.post(`${url}/advert`, advert, config)
          .then((responseAdvert) => {
            store.dispatch(resetLostedPet());
            if (state.createPost.picturePost !== null) {
              const formPicture = new FormData();
              formPicture.append('picture', state.createPost.picturePost, state.createPost.picturePost.name);
              axios.post(`${url}/advert/${responseAdvert.data.id}/picture`, formPicture, configPicture)
                .then((responsePicture) => {
                  responseAdvert.data.picture = responsePicture.data;
                  store.dispatch(saveNewPost(responseAdvert.data));
                  store.dispatch(resetLostedPet());
                });
            }
          });
      });
    next(action);
  }

  else if (action.type === ADD_PET) {
    const state = store.getState();
    const userId = state.user.actualUser.id;
    axios.post(`${url}/pet`, {
      name: state.newPet.nom,
      type: state.newPet.type,
      description: state.newPet.desc,
      breed: state.newPet.race,
      id_card: state.newPet.idCard,
      tattoo: state.newPet.tattoo,
      user: state.user.actualUser.id,
    }, config)
      .then((response) => {
        if (state.user.newPetPicture !== null) {
          const formPicture = new FormData();
          formPicture.append('picture', state.user.newPetPicture, state.user.newPetPicture.name);
          axios.post(`${url}/pet/${response.data.id}/picture`, formPicture, configPicture);
        }
        axios.get(`${url}/user/${userId}`, config)
          .then((responses) => {
            const userToString = JSON.stringify(responses.data);
            localStorage.setItem('actualUser', userToString);
            store.dispatch(saveProfile(responses.data));
          });
      });
    next(action);
  }
  else if (action.type === GET_ALL_BREED) {
    axios.get(`${url}/pet/breed`, config)
      .then((response) => {
        store.dispatch(saveBreeds(response.data));
      });
    next(action);
  }

  else if (action.type === ONE_PET_USER) {
    axios.get(`${url}/pet`)
      .then((responseOnePet) => {
        store.dispatch(saveAllPets(responseOnePet.data));
      });
  }
  else if (action.type === SEARCH_TATOO) {
    const query = state.banner.tatooInput;
    axios.post(`${url}/pet/search?q=${query}`, config)
      .then((response) => {
        store.dispatch(resultBannerQuery(response.data));
      });
    next(action);
  }

  else if (action.type === PATCH_USER) {
    const newAddress = {
      latitude: state.createPost.center.lat,
      longitude: state.createPost.center.lng,
    };
    axios.post(`${url}/address`, newAddress, config)
      .then((response) => {
        const patchedUser = {
          email: state.user.EmailInput,
          firstname: state.user.FirstNameInput,
          lastname: state.user.NameInput,
          address: response.data.id,
        };
        axios.patch(`${url}/user/${state.user.actualUser.id}`, patchedUser, config)
          .then(() => {
            if ((state.createUser.picture) !== null) {
              const formDataPicture = new FormData();
              formDataPicture.append('picture', state.createUser.picture, state.createUser.picture.name);
              // Requete axios chainée après le retour de la réponse de la première requète
              axios.post(`${url}/user/${state.user.actualUser.id}/picture`, formDataPicture, configPicture);
            }
            axios.get(`${url}/user/${state.user.actualUser.id}`)
              .then((responses) => {
                const userToString = JSON.stringify(responses.data);
                localStorage.setItem('actualUser', userToString);
                store.dispatch(saveProfile(responses.data));
              });
          });
      });
    next(action);
  }
  else if (action.type === GET_USER) {
    axios.get(`${url}/user/${action.value}`)
      .then((responseUser) => {
        store.dispatch(ownerPostMail(responseUser.data.email));
      });
    next(action);
  }
  else if (action.type === ARCHIVE_POST) {
    axios.patch(`${url}/advert/${[action.value]}/archive`, {}, config);
  }
  else {
    next(action);
  }
};

export default ajax;
