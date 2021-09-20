import React from "react";
import { Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "../util/route_util";
import Modal from "./modal/modal";
import Splash from "./splash/splash_container";
import LogIn from "./session/login_form_container";
import Signup from "./session/signup_form_container";
import DogIndexContainer from "../components/dog/dog_index_container";
import DogShowContainer from "../components/dog/dog_show_container"

const App = () => (
  <div>
    <Modal />
    {/* <Splash /> */}
    {/* <DogIndexContainer /> */}

    <Route exact path ="/dogs" component={DogIndexContainer}/>
    <Route exact path ="/dogs/:id" component={DogShowContainer}/>
  </div>
);

export default App;
