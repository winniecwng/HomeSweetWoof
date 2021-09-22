import React from "react";
import { Route, Switch } from "react-router-dom";
import { ProtectedRoute, AuthRoute } from "../util/route_util";
import Splash from "./splash/splash_container";
import DogIndexContainer from "../components/dog/dog_index_container";
import DogShowContainer from "../components/dog/dog_show_container";
import DogCreateContainer from "./dog/dog_create_container";
import DogEditContainer from "./dog/dog_edit_container";
import UserShowContainer from "./user/user_show_container";
import HeaderContainer from "../components/header/header_container";
import AboutUs from "../components/about/about";
import ScrollToTop from "./scroll/scroll_to_top";

const App = () => (
  <div>
    <Route path="/" component={HeaderContainer} />
    <Route path="/" component={ScrollToTop} />

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
      <Route exact path="/about" component={AboutUs} />
    </Switch>
  </div>
);

export default App;
