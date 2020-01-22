import React from 'react';
import 'bulma/css/bulma.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Authorisation from './pages/Authorisation';
import Home from './pages/Home';
import News from './pages/News';


function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/authorisation' component={Authorisation} />
        <Route path='/news' component={News} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
