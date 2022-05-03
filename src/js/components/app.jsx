import React from 'react';
import { Route, Router as BrowserRouter } from 'react-router-dom';

import browserHistory from '../../browser-history';
import Main from './main';
import { MAIN_URL } from '../const';

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Route exact path={MAIN_URL}>
        <Main />
      </Route>
    </BrowserRouter>
  );
};

export default App;
