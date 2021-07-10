// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from 'src/containers/Header';
import 'semantic-ui-css/semantic.min.css';
import Banner from 'src/containers/Banner';

import User from 'src/containers/User';

import Footer from 'src/components/Footer';
import PostsList from 'src/containers/PostsList';

import CreatePost from 'src/containers/CreatePost';
import LastPosts from 'src/containers/LastPosts';
import OnePost from 'src/containers/OnePost';
import About from 'src/components/About';
import Title from 'src/components/Title';
import PetDescription from 'src/containers/PetDescription';

import { Route, Switch } from 'react-router-dom';
import Error from 'src/components/Error';
import LoginForm from 'src/containers/LoginForm';
import CreateUser from 'src/containers/CreateUser';

// == Import
import './styles.css';

// == Composant
const App = ({ getAllPosts, OnePetUser, actualUser, fixMap }) => {
  useEffect(getAllPosts, []);
  useEffect(OnePetUser, []);
  if (actualUser.address !== undefined && actualUser.address !== null) {
    fixMap();
  }
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Header />
          <Banner />
          <Title title="Les dernières annonces"/>
          <LastPosts />
          <About />
          <Footer />
        </Route>
        <Route exact path="/createpost">
          <Header />
          <Banner />
          <Title title="Poster une annonce"/>
          <CreatePost />
          <Footer />
        </Route>
        <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route exact path="/create-user">
          <CreateUser />
        </Route>
        <Route exact path="/posts-list">
          <Header />
          <Banner />
          <Title title="Toutes les annonces"/>
          <PostsList />
          <Footer />
        </Route>

        <Route exact path="/onepost/:slug">
          <Header />
          <Title title="Annonce en détail"/>
          <OnePost />
          <Footer />
        </Route>
        <Route exact path="/petDescription/:slug">
          <Header />
          <Title title="Mon animal"/>
          <PetDescription />
          <Footer />
        </Route>
        <Route exact path="/profil">
          <Header />
          <Banner />
          <Title title="Mon Profil"/>
          <User />
          <Footer />
        </Route>
        <Route exact path="/petDescription/:slug">
          <Header />
          <PetDescription />
          <Footer />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>

    </div>

  );
};

App.propTypes = {
  getAllPosts: PropTypes.func.isRequired,
};

// == Export
export default App;
