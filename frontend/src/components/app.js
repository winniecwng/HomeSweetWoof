import React from "react";
import { Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "../util/route_util";
import Modal from "./modal/modal";
import Splash from "./splash/splash_container";
import LogIn from "./session/login_form_container";
import Signup from "./session/signup_form_container";
import DogIndexContainer from "../components/dog/dog_index_container";
import DogShowContainer from "../components/dog/dog_show_container";
import UserShowContainer from "./user/user_show_container";
import DogFormContainer from "../components/dog/dog_form_container";

const App = () => (
  <div>
    <Modal />
    <Splash />
    {/* <DogIndexContainer /> */}
    
    <Route exact path ="/user/login" component={LogIn}/>
    <Route exact path ="/dogs/new" component={DogFormContainer}/>
    <Route exact path ="/dogs" component={DogIndexContainer}/>
    <Route exact path ="/dogs/:id" component={DogShowContainer}/>
    <Route exact path ="/users/:id" component={UserShowContainer}/>
  </div>
);

export default App;
