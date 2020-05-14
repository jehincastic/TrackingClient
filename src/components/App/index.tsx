import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../Home';
import NavBar from '../NavBar';
import Login from '../Login';
import SignUp from '../SignUp';
import { ThemeProvider } from '../../Context/ThemeContext';

const App: React.FC = () => (
  <ThemeProvider>
    <NavBar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={(): JSX.Element => <h1>About Page</h1>} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Redirect to="/" />
      </Switch>
    </NavBar>
  </ThemeProvider>
);

export default App;
