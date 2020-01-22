import React from 'react';
import 'bulma/css/bulma.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Authorisation from './pages/Authorisation';
import Home from './pages/Home';
import News from './pages/News';
import NotFound from './pages/NotFound';


function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/authorisation' component={Authorisation} />
        <Route path='/news' component={News} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
