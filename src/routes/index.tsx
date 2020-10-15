import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Eventos from '../pages/Eventos';
import Login from '../pages/Login';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home}  path="/home" />
      <Route component={Eventos} path="/eventos" />
      <Route component={Login} exact path="/" />
    </BrowserRouter>
  );
};

export default Routes;
