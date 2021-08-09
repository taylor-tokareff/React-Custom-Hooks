import React, { Component } from 'react';
import FuturamaCharacters from '../containers/FuturamaCharacters';
import FuturamaDetails from '../containers/FuturamaDetails';
import Header from '../containers/Header';

import {

  Route,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends Component {
  render() {

    return (
      <>



        <Header />

        <Switch>

          <Route path="/" exact={true}
            render={routerProps => (
              <FuturamaCharacters {...routerProps} />
            )}
          />

          <Route path="/character/:character" exact={true}
            render={routerProps => (
              <FuturamaDetails {...routerProps} />
            )}
          />

          <Redirect to="/" />

        </Switch>

      </>
    );
  }


}

export default App;
