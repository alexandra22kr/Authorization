import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Autorisation from '../pages/Authorisation';

const PrivateRoute = ({ component: Component, isAuth , ...rest }) => (
    <Route {...rest} render={() => (
        isAuth 
        ? <Component {...rest} /> :
        <Redirect to='/authorisation' />
    )} />
);

export default PrivateRoute;