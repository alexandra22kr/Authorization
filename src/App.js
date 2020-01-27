import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import configureStore from './store/configureStore';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Authorisation from './pages/Authorisation';
import Home from './pages/Home';
import News from './pages/News';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';




class App extends Component {
  render() {
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
    )
  }
}

App.propTypes = {
  isAuth: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    isAuth: state.session
  }
}

export default connect(mapStateToProps)(App);
