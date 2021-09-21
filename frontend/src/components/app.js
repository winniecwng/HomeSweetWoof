import React from "react";
import { Route, Switch } from "react-router-dom";
import { ProtectedRoute, AuthRoute } from "../util/route_util";
import Modal from "./modal/modal";
import Splash from "./splash/splash_container";
import LogIn from "./session/login_form_container";
import Signup from "./session/signup_form_container";
import DogIndexContainer from "../components/dog/dog_index_container";
import DogShowContainer from "../components/dog/dog_show_container";
import DogCreateContainer from "./dog/dog_create_container";
import DogEditContainer from "./dog/dog_edit_container";
import UserShowContainer from "./user/user_show_container";
import HeaderContainer from "../components/header/header_container";

const App = () => (
  <div>
    <Modal />
    {/* <Splash /> */}
    {/* <DogIndexContainer /> */}
    <HeaderContainer />
    {/* <DogIndexContainer /> */}
    {/* <Route exact path="/" component={Splash} /> */}
    {/* <Route exact path="/dogs" component={DogIndexContainer} />
    <Route exact path="/dogs/:id" component={DogShowContainer} />
    <Route exact path="/dogs/new" component={DogCreateContainer} />
    <Route exact path="/dogs/update/:id" component={DogEditContainer} />
    <Route exact path="/users/:id" component={UserShowContainer} /> */}

    <Switch>
      <AuthRoute exact path="/" component={Splash} />
      <ProtectedRoute exact path="/dogs" component={DogIndexContainer} />
      <ProtectedRoute exact path="/dogs/new" component={DogCreateContainer} />
      <ProtectedRoute exact path="/dogs/:id" component={DogShowContainer} />
      <ProtectedRoute
        exact
        path="/dogs/update/:id"
        component={DogEditContainer}
      />
      <ProtectedRoute exact path="/users/:id" component={UserShowContainer} />
    </Switch>
  </div>
);

export default App;
