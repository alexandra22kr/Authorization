import React from 'react';
import 'bulma/css/bulma.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import configureStore from './store/configureStore';
import Authorisation from './pages/Authorisation';
import Home from './pages/Home';
import News from './pages/News';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';



function App() {
  return (
    <BrowserRouter>
  
      <Switch>
        <Route path='/authorisation' component={Authorisation} />
        <Route path="/notfound" component={NotFound} />

        <>
          <NavBar />
          <main>
            <Route exact path='/' component={Home} />
            <Route path='/news' component={News} />
          </main>
        </>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
