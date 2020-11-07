import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Eventos from '../pages/Eventos';
import Login from '../pages/Login';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Login}  path="/home" />
      <Route component={Eventos} path="/eventos" />
      <Route component={Home} exact path="/" />
    </BrowserRouter>
  );
};

export default Routes;
