import React from 'react';
import { Route, Router as BrowserRouter } from 'react-router-dom';

import browserHistory from '../../browser-history';
import Main from './main';

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Route exact path={`/`}>
        <Main />
      </Route>
    </BrowserRouter>
  );
};

export default App;
