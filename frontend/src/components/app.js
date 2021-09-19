import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from '../util/route_util';
import LogIn from './session/login_form_container';

const App = () => (
    <div>
        <LogIn />
    </div>
);

export default App;