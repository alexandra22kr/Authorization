import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Authorisation from './pages/Authorisation';
import Home from './pages/Home';
import News from './pages/News';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';


class App extends Component {
  constructor(props) {
    super(props)
  }

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
              <PrivateRoute path='/profile' isAuth={this.props.isAuth} component={Profile} />
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
