// == Import React
import React, { useEffect } from "react";
// == Import React Router
import { Switch, Route, Redirect } from "react-router-dom";

// == Import Containers || components
import Home from "src/containers/Home";

import Login from "src/containers/Login";

import SignUp from "src/containers/SignUp";
import SignUpAssociations from "src/containers/SignUp/Associations";
import SignUpUsers from "src/containers/SignUp/Users";

import Header from "src/containers/Header";
import Main from "src/components/Main";
import Footer from "src/components/Footer";

import Aside from "src/containers/Aside";

import Lists from "src/containers/Lists";

import Profils from "src/containers/Profils";

import AddAnimal from "src/containers/AddAnimal";

import Favoris from "src/containers/Favoris";

import Error404 from "src/components/Error404";

import Contact from "src/components/Contact";
import About from "src/components/About";
import MentionLegal from "src/components/MentionLegal";

// == Composant
const App = ({
  redirectToHomeValue,
  isLoggedValue,
  getAnimalsList,
  getUsersList,
  isLoading,
  animalsList,
  usersList,
  isLogged,
  redirectToHome,
  session,
}) => {
  // useEffect
  /*
  Au chargement de la page:
    - change le titre du site,
    - effectue une verrrification de connexion
    - Recupere les listes des utilisateurs et des annimaux.
  */
  useEffect(() => {
    document.title = "Un p'tit coup de patte";
    isLogged();
    getAnimalsList();
    getUsersList();
  }, []);

  return (
    <>
      {console.log(
        "isLoading",
        !isLoading,
        usersList.length,
        animalsList.length
      )}

      {/*
        redirection if redirectToHome === true
        ex: when user disconect himself ( check Aside Containers && auth middleware)
      */}

      {redirectToHomeValue &&
        (redirectToHome(false), (<Redirect from="*" to="/" />))}

      {/*
        redirection to the Home Page if user is connected and are in login page
        nothing will be displayed until both lists have more than 1 element
      */}

      {usersList.length >= 0 && animalsList.length >= 0 && (
        <>
          <Header />
          <Aside />
          <Main>
            <Switch>
              <Route exact path="/Contact" component={Contact} />
              <Route exact path="/About" component={About} />
              <Route exact path="/MentionLegal" component={MentionLegal} />

              <Route exact path="/" component={Home} />

              {isLoggedValue &&
                (session?.role === "association" ||
                  session?.role === "foster") && (
                  <Route exact path="/fav" component={Favoris} />
                )}

              {isLoggedValue && session?.role === "association" && (
                <Route exact path="/add" component={AddAnimal} />
              )}

              {/* Lists Routes Redirection */}

              {(!isLoggedValue || isLoggedValue) &&
                (session?.role === "foster" || !session?.role) && (
                  <Route
                    exact
                    path="/lists/:type(animals|associations)"
                    component={({ match }) => (
                      <Lists type={match.params.type} />
                    )}
                  />
                )}

              {isLoggedValue && session?.role === "association" && (
                <Route
                  exact
                  path="/lists/:type(animals|associations|utilisateurs)"
                  component={({ match }) => <Lists type={match.params.type} />}
                />
              )}

              <Redirect
                from="/lists/*"
                to="/lists/animals"
                component={() => <Lists type="animals" />}
              />

              {/* Profils Routes Redirection */}

              <Route
                exact
                path="/profil/:type(animals|association|foster)/:id"
                component={({ match }) => (
                  <Profils type={match.params.type} id={match.params.id} />
                )}
              />

              <Route
                exact
                path="/profil/:id"
                component={({ match }) => <Profils id={match.params.id} />}
              />

              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <Route
                exact
                path="/signup/associations"
                component={SignUpAssociations}
              />
              <Route
                exact
                path="/signup/utilisateurs"
                component={SignUpUsers}
              />

              <Route path="/404" component={Error404} />
              <Redirect from="*" to="/404" />
            </Switch>
          </Main>
          <Footer />
        </>
      )}
    </>
  );
};

// == Export
export default App;
