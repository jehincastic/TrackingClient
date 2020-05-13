import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';

import Home from '../Home';
import NavBar from '../NavBar';
import theme from '../../Theme/Theme';
import Login from '../Login';
import SignUp from '../SignUp';

const App: React.FC = () => (
  <MuiThemeProvider theme={theme}>
    <NavBar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={(): JSX.Element => <h1>About Page</h1>} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Redirect to="/" />
      </Switch>
    </NavBar>
  </MuiThemeProvider>
);

export default App;
