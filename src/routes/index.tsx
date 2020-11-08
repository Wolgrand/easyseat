import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Eventos from '../pages/Eventos';
import Login from '../pages/Login';
import Teste from '../pages/Teste';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Login}  path="/home" />
      <Route component={Eventos} path="/eventos" />
      <Route component={Teste} exact path="/" />
      <Route component={Home} exact path="/Home" />
    </BrowserRouter>
  );
};

export default Routes;
